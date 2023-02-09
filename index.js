const productSliderLine = document.querySelector('.product-card__slider-line');
const productSliderDots = document.querySelectorAll('.product-card__slider-dot');
const buttonMinus = document.querySelector('.product-card__button--minus');
const buttonPlus = document.querySelector('.product-card__button--plus');
const quantityInput = document.querySelector('.product-card__quantity');

let sliderCount = 0;

const rollSlider = () => {
    let sliderWidth = document.querySelector('.product-card__slider').offsetWidth;
    productSliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

const currentSlide = (index) => {
    productSliderDots.forEach(item => item.classList.remove('product-card__slider-dot--active'));
    productSliderDots[index].classList.add('product-card__slider-dot--active');
}

const showSlide = () => {
    productSliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sliderCount = index;
            rollSlider();
            currentSlide(sliderCount);
        })
    })
}

showSlide();

setInterval(() => {
    sliderCount++;
    if (sliderCount > productSliderDots.length - 1) {
        sliderCount = 0;
    }
    rollSlider();
    currentSlide(sliderCount);

}, 10000);

const onMinusButtonClick = () => {
    quantityInput.value--;  
    if (quantityInput.value <= 1) {
        buttonMinus.setAttribute('disabled', 'disabled');
    }
}

const onPlusButtonClick = () => {
    quantityInput.value++;  
    if (quantityInput.value >= 99) {
        buttonPlus.setAttribute('disabled', 'disabled');
    }
}

buttonMinus.addEventListener('click', onMinusButtonClick);
buttonPlus.addEventListener('click', onPlusButtonClick);