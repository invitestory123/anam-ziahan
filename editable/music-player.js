/**
 * music-player.js — Bulletproof background music player with equalizer & mobile unlock
 * Sourced from Instagram Reel: https://www.instagram.com/reel/DPD9oN1imQp/
 */
(function() {
  // Wait for DOM to be ready
  function init() {
    if (document.getElementById('wedding-music-player')) return;

    const data = window.WEDDING_DATA || {};
    const images = data.images || {};
    const audioMp3 = images.backgroundMusic || './editable/assets/background-music.mp3';
    const audioM4a = './editable/assets/background-music.m4a';

    // Create Audio Element
    const audio = document.createElement('audio');
    audio.id = 'wedding-bg-audio';
    audio.loop = true;
    audio.preload = 'auto';
    audio.setAttribute('playsinline', '');
    audio.setAttribute('webkit-playsinline', '');
    audio.crossOrigin = 'anonymous';

    // Source elements for cross-browser fallback
    const src1 = document.createElement('source');
    src1.src = audioMp3;
    src1.type = 'audio/mpeg';
    audio.appendChild(src1);

    const src2 = document.createElement('source');
    src2.src = audioM4a;
    src2.type = 'audio/mp4';
    audio.appendChild(src2);

    document.body.appendChild(audio);

    // Create Music Player Widget
    const container = document.createElement('div');
    container.id = 'wedding-music-player';
    container.className = 'wedding-music-widget';
    container.innerHTML = `
      <div id="music-prompt" class="music-prompt">
        <span>🎵 Tap to Play Music</span>
      </div>
      <button id="music-toggle-btn" class="music-toggle-btn" aria-label="Toggle background music" title="Toggle Music">
        <div class="music-icon-playing">
          <span class="music-bar bar-1"></span>
          <span class="music-bar bar-2"></span>
          <span class="music-bar bar-3"></span>
        </div>
        <div class="music-icon-paused">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
            <line x1="1" y1="1" x2="23" y2="23" stroke="#b33939" stroke-width="2.2"></line>
          </svg>
        </div>
      </button>
    `;
    document.body.appendChild(container);

    const btn = document.getElementById('music-toggle-btn');
    const prompt = document.getElementById('music-prompt');

    let isPlaying = false;
    let userHasInteracted = false;

    function updateUI(playing) {
      isPlaying = playing;
      if (playing) {
        btn.classList.add('is-playing');
        btn.classList.remove('is-paused');
        if (prompt) {
          prompt.classList.add('hidden');
        }
      } else {
        btn.classList.remove('is-playing');
        btn.classList.add('is-paused');
      }
    }

    // Set initial state
    updateUI(false);

    // Audio play helper with volume ramp
    function playAudio() {
      audio.volume = 1.0;
      const promise = audio.play();
      if (promise !== undefined) {
        promise.then(() => {
          updateUI(true);
        }).catch((err) => {
          console.warn('[Wedding Music] Autoplay blocked, awaiting user tap:', err);
          updateUI(false);
        });
      }
    }

    function pauseAudio() {
      audio.pause();
      updateUI(false);
    }

    // Explicit Toggle by clicking the button
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      userHasInteracted = true;
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    });

    // Tap prompt directly to play
    if (prompt) {
      prompt.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        userHasInteracted = true;
        playAudio();
      });
    }

    // Global unlock on first page interaction
    function unlockOnFirstTouch(e) {
      if (userHasInteracted || isPlaying) return;
      userHasInteracted = true;
      playAudio();
      // Remove listeners once unlocked
      cleanupUnlockListeners();
    }

    function cleanupUnlockListeners() {
      document.removeEventListener('click', unlockOnFirstTouch, true);
      document.removeEventListener('touchstart', unlockOnFirstTouch, true);
      document.removeEventListener('pointerdown', unlockOnFirstTouch, true);
      document.removeEventListener('scroll', unlockOnFirstTouch, true);
    }

    document.addEventListener('click', unlockOnFirstTouch, true);
    document.addEventListener('touchstart', unlockOnFirstTouch, true);
    document.addEventListener('pointerdown', unlockOnFirstTouch, true);
    document.addEventListener('scroll', unlockOnFirstTouch, true);

    // Try starting immediately (works in browsers that allow autoplay or unmuted interaction)
    playAudio();

    // Auto-hide the prompt after 6 seconds if user ignores it
    setTimeout(() => {
      if (prompt && !isPlaying) {
        prompt.classList.add('fade-out');
      }
    }, 6000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
