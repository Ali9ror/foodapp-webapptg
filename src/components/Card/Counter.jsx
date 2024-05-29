
export default function Counter() {
    const counterText = document.querySelector('.counter-wrap b')
    const counterBtn = document.querySelectorAll('.counter-wrap button')

    let counter = 1

    counterBtn.forEach((el, index) => {
        el.addEventListener('click', () => {
            if (index === 0) {
                counter--
            }
            else if (index === 1) {
                counter++
            }
            counterText.textContent = counter
        })

    })

}