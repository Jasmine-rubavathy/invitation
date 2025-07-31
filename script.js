// 🎊 Confetti on load
window.onload = () => {
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 }
  });
};

// ⏳ Countdown Timer
function startCountdown() {
  const eventDate = new Date("August 25, 2025 18:30:00").getTime();
  const timerElement = document.getElementById("timer");

  const update = () => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
      timerElement.innerHTML = "🎉 It's Party Time!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    timerElement.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
  };

  update(); // initial call
  const interval = setInterval(update, 1000);
}

startCountdown();
