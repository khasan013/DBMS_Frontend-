import { useEffect, useRef } from "react";

/** Refreshes remote data without reloading the page or interrupting local UI state. */
export function usePolling(load, dependencies = [], delay = 2000) {
  const loadRef = useRef(load);
  loadRef.current = load;

  useEffect(() => {
    let active = true;
    let timer;
    const run = async () => {
      if (!active) return;
      if (!document.hidden) await loadRef.current();
      if (active) timer = window.setTimeout(run, delay);
    };
    run();
    const refreshWhenVisible = () => { if (!document.hidden) { window.clearTimeout(timer); run(); } };
    document.addEventListener("visibilitychange", refreshWhenVisible);
    return () => { active = false; window.clearTimeout(timer); document.removeEventListener("visibilitychange", refreshWhenVisible); };
  // The caller controls when this polling job is recreated.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
