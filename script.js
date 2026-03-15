const ratingButtons = document.querySelectorAll(".rating-btn");
const submitButton = document.querySelector(".submit-btn");
const ratingState = document.querySelector(".rating-state");
const thankyouState = document.querySelector(".thankyou-state");
const ratingFeedback = document.querySelector(".rating-feedback");

let selectedRating = null;

// Handle rating selection
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-checked", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-checked", "true");

    selectedRating = button.textContent.trim();
  });
});

// Handle submit
submitButton.addEventListener("click", () => {
  if (!selectedRating) {
    return;
  }

  ratingFeedback.textContent = `You selected ${selectedRating} out of 5`;

  ratingState.classList.add("hidden");
  thankyouState.classList.remove("hidden");
});