export default function initDropdowns() {
  console.log('Dropdowns initialization');

  let dropdowns = document.querySelectorAll('.dropdown')
  dropdowns.forEach(dropdown => {
    const head = dropdown.querySelector('.dropdown__head');
    head.addEventListener('click', e => {
      console.log('Dropdown head is clicked');
      let parent = e.target.closest('.dropdown');
      parent.classList.toggle('dropdown--opened');
    });
  });
}