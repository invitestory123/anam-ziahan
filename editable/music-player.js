/**
 * music-player.js — Ambient background music controller
 * Extracted from Instagram Reel: https://www.instagram.com/reel/DPD9oN1imQp/
 */
(function() {
  const audioSrc = (window.WEDDING_DATA && window.WEDDING_DATA.images && window.WEDDING_DATA.images.backgroundMusic) 
    || './editable/assets/background-music.mp3';

  const audio = document.createElement('audio');
  audio.id = 'wedding-bg-audio';
  audio.src = audioSrc;
  audio.loop = true;
  audio.preload = 'auto';
  document.body.appendChild(audio);

  const btn = document.createElement('button');
  btn.className = 'music-toggle-btn';
  btn.setAttribute('aria-label', 'Toggle background music');
  btn.title = 'Play / Pause Music';
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `;

  document.body.appendChild(btn);

  let isPlaying = false;

  function togglePlay() {
    if (isPlaying) {
      audio.pause();
      btn.classList.remove('is-playing');
      btn.style.opacity = '0.7';
      isPlaying = false;
    } else {
      audio.play().then(() => {
        btn.classList.add('is-playing');
        btn.style.opacity = '1';
        isPlaying = true;
      }).catch(() => {
        // Autoplay policy or error
      });
    }
  }

  btn.addEventListener('click', togglePlay);

  // Attempt auto-start on first user interaction anywhere
  const autoPlayOnInteraction = () => {
    if (!isPlaying) {
      audio.play().then(() => {
        btn.classList.add('is-playing');
        btn.style.opacity = '1';
        isPlaying = true;
      }).catch(() => {});
    }
    document.removeEventListener('click', autoPlayOnInteraction);
    document.removeEventListener('touchstart', autoPlayOnInteraction);
  };

  document.addEventListener('click', autoPlayOnInteraction, { once: true });
  document.addEventListener('touchstart', autoPlayOnInteraction, { once: true });
})();
