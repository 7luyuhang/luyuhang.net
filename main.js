// main.js

// Theme
(function () {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  if (prefersDarkMode.matches) {
    document.documentElement.classList.add('dark-mode');
  } else {
    document.documentElement.classList.remove('dark-mode');
  }
})();

// Time
function getLocalTime() {
  const options = {
    timeZone: 'Europe/London',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  };

  const localTime = new Date().toLocaleTimeString('en-US', options);
  return localTime;
}

function updateLocalTime() {
  const localTimeElement = document.getElementById('localTime');
  if (localTimeElement) {
    const timeString = getLocalTime();
    const blinkingTimeString = timeString.replace(/:/g, '<span class="blink">:</span>');
    localTimeElement.innerHTML = blinkingTimeString;
  }

}

window.onload = function () {
  updateLocalTime();
};

setInterval(updateLocalTime, 1000);
