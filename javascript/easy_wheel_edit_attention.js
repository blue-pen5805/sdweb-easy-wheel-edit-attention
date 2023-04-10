addEventListener('wheel', (event) => {
  if (event.target.tagName != 'TEXTAREA') return;
  event.preventDefault();

  const key = event.deltaY < 0 ? 'ArrowUp' : 'ArrowDown'
  const newEvent = new KeyboardEvent('keydown', {
    key,
    ctrlKey: true,
    target: event.target
  })
  newEvent.originalTarget = event.target

  keyupEditAttention(newEvent);
}, { passive: false });

onUiLoaded(() => {
  ['txt2img_prompt', 'txt2img_neg_prompt', 'img2img_prompt', 'img2img_neg_prompt'].forEach(id => {
    const container = gradioApp().getElementById(id)
    const textarea = container.querySelector('textarea')
    textarea.classList.remove('scroll-hide')
    textarea.style.overflowY = 'auto'
  })
})
