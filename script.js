const buttons = document.querySelectorAll('.rating-btn')
const submitBtn = document.querySelector('.submit-btn')
const ratingState = document.querySelector('.rating-state')
const thankyouState = document.querySelector('.thankyou-state')
const ratingFeedback = document.querySelector('.rating-feedback')

let selectedRating = null


buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        buttons.forEach((btn) => btn.classList.remove('active'))
        btn.classList.add('active')
        selectedRating = btn.textContent
    }
    )
})

submitBtn.addEventListener('click', (e) => {
    if (!selectedRating) return

    ratingFeedback.textContent = `You selected ${selectedRating} out of 5`
    
    ratingState.style.display = "none"
    thankyouState.style.display = "flex"
})
