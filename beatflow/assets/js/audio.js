
document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');
    const stopButton = document.getElementById('stopButton');
  
    playButton.addEventListener('click', function() {
      if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pausar';
      } else {
        audioPlayer.pause();
        playButton.textContent = 'Reproducir';
      }
    });
  
    stopButton.addEventListener('click', function() {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      playButton.textContent = 'Reproducir';
    });
  });
  