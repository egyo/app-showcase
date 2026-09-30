document.querySelectorAll('[data-comparison]').forEach((frame) => {
  const range = frame.querySelector('.comparison-range');
  const render = () => {
    const value = Number(range.value);
    frame.style.setProperty('--position', `${value}%`);
    range.setAttribute('aria-valuetext', `LUT あり ${value}%、LUT なし ${100 - value}%`);
  };
  const moveToPointer = (event) => {
    const bounds = frame.getBoundingClientRect();
    range.value = String(Math.round(Math.max(0, Math.min(100,
      (event.clientX - bounds.left) / bounds.width * 100))));
    render();
  };
  let activePointer = null;
  range.addEventListener('input', render);
  frame.addEventListener('pointerdown', (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    range.focus({ preventScroll: true });
    activePointer = event.pointerId;
    frame.setPointerCapture(event.pointerId);
    moveToPointer(event);
  });
  window.addEventListener('pointermove', (event) => {
    if (event.pointerId === activePointer) moveToPointer(event);
  });
  const release = (event) => {
    if (event.pointerId !== activePointer) return;
    if (event.type === 'pointerup') moveToPointer(event);
    activePointer = null;
    if (frame.hasPointerCapture(event.pointerId)) frame.releasePointerCapture(event.pointerId);
  };
  window.addEventListener('pointerup', release);
  window.addEventListener('pointercancel', release);
  render();
});
