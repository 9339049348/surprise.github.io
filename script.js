document.addEventListener('DOMContentLoaded', function() {
  // Get the audio element
  const audio = document.getElementById('background-music');

  // Function to play the audio
  function playAudio() {
    audio.play().catch(error => {
      console.error('Playback failed:', error);
    });
  }

  // Set up event listener to replay audio when it ends
  audio.addEventListener('ended', function() {
    playAudio();
  });

  // Automatically play the song when the page loads
  playAudio();

  // Carousel controls
  document.getElementById('next').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  }

  document.getElementById('prev').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
  }
});
