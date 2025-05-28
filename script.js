let lastTap = 0;
document.addEventListener('touchend', function (e) {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;
  if (tapLength < 300 && tapLength > 0) {
    document.body.classList.toggle('landscape');
  }
  lastTap = currentTime;
});

if (screen.orientation && screen.orientation.lock) {
  screen.orientation.lock('portrait').catch(err => {
    console.warn('회전 잠금 실패:', err);
  });
}
