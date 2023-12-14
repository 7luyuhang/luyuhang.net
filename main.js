// main.js

// Google tag (gtag.js)
(function () {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-SW0XLHNEPV';
  document.head.appendChild(script);

  script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-SW0XLHNEPV');
  };
})();

// Vercel Insights
window.si = window.si || function () {
  (window.siq = window.siq || []).push(arguments);
};
const vercelScript = document.createElement('script');
vercelScript.defer = true;
vercelScript.src = '/_vercel/speed-insights/script.js';
document.head.appendChild(vercelScript);

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
    localTimeElement.textContent = timeString;
  }
}

window.onload = function () {
  updateLocalTime();
};

setInterval(updateLocalTime, 1000);
