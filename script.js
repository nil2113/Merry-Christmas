// Create floating hearts dynamically
const createHeart = () => {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 3 + 5}s`;
  heart.textContent = "🩷"; // Cute heart shape
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
};

// Generate hearts every 1.5 seconds
setInterval(createHeart, 1500);

// Create snowflakes dynamically
const createSnowflake = () => {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
  snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 10000);
};

// Generate snowflakes every 300ms
setInterval(createSnowflake, 300);
