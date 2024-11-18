const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Weh???";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGVmeW1tODYwOGJ2a2JtNDh1bmwyczRqcnVoNHJveWF6OTB3M2VvNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FDbIUZLwbCUS4786z3/giphy.gif";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  // Generate random coordinates within the allowed range
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Apply the calculated position (assuming position is absolute)
  noBtn.style.position = "absolute"; // Ensure position is set to absolute
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
