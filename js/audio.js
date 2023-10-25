const audio = new Audio();

// 음악 선택 함수
function selectAudio(audioSrc) {
  audio.src = audioSrc;
  audio.play();
}

// 페이지가 로드될 때 저장된 음악 및 재생 시간 확인
window.addEventListener("load", () => {
  const savedAudioSrc = localStorage.getItem("selectedAudioSrc");
  const savedTime = localStorage.getItem("audioPlaybackTime");

  if (savedAudioSrc) {
    audio.src = savedAudioSrc;
  }

  if (savedTime) {
    audio.currentTime = parseFloat(savedTime);
  }

  audio.play();
});

// 페이지가 언로드(닫히는) 될 때 음악 및 재생 시간 저장
window.addEventListener("beforeunload", () => {
  localStorage.setItem("selectedAudioSrc", audio.src);
  localStorage.setItem("audioPlaybackTime", audio.currentTime);
  audio.pause();
});
