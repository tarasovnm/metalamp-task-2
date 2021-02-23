export default function initDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const head = dropdown.querySelector('.dropdown__head');
    const options = dropdown.querySelectorAll('.option');

    head.addEventListener('click', e => {
      let parent = e.target.closest('.dropdown');
      parent.classList.toggle('dropdown--opened');
    });

    options.forEach(option => {
      const plusButton = option.querySelector('.option__button--plus');
      const minusButton = option.querySelector('.option__button--minus');

      plusButton.addEventListener('click', e => {
        let countElement = e.target.parentNode.querySelector('.option__count');
        let countValue = Number(countElement.innerHTML);
        if (countValue < 9) {
          countElement.innerHTML = countValue + 1;
        }
      });

      minusButton.addEventListener('click', e => {
        let countElement = e.target.parentNode.querySelector('.option__count');
        let countValue = Number(countElement.innerHTML);
        if (countValue > 0) {
          countElement.innerHTML = countValue - 1;
        }
      });
    });
  });
}