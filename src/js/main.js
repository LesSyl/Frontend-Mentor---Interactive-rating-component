const cardThanks = document.querySelector('.card__thanks')
const submitBtn = document.querySelector('.card__button')
const span = document.querySelector('.card__thanks-choice-rating')
const numbers = document.querySelectorAll('.card__evaluation-number')
const popup = document.querySelector('.popup')
const exit = document.querySelector('.popup__button')

numbers.forEach(number => {
	number.addEventListener('click', () => {
		span.textContent = number.textContent
	})
})

const showPopup = () => {
	popup.classList.add('show')
}

const closePopup = () => {
    popup.classList.remove('show')
}

numbers.forEach(number => {
	number.addEventListener('focus', () => {
		submitBtn.addEventListener('click', () => {
			cardThanks.classList.remove('hidden')
            closePopup()
		})
	})
	number.addEventListener('blur', () => {
		showPopup()
	})
})

exit.addEventListener('click', closePopup)
submitBtn.addEventListener('click', showPopup)