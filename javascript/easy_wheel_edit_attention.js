addEventListener('wheel', (event) => {
  const key = event.deltaY < 0 ? 'ArrowUp' : 'ArrowDown'
  const newEvent = new KeyboardEvent('keydown', {
    key,
    ctrlKey: true,
    target: event.target
  })
  newEvent.originalTarget = event.target

  keyupEditAttention(newEvent);
});
