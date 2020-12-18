const arrowDown = document.querySelector('.arrow-down');
const displayText = document.querySelector('#addText');

const rotateArrow = () => {
  if (arrowDown.style.transform === '') {
    arrowDown.style.transform = 'rotate(180deg)';
    displayText.style.display = 'block';
  } else if (arrowDown.style.transform === 'rotate(0deg)') {
    displayText.style.display = 'block';
    arrowDown.style.transform = 'rotate(180deg)';
  } else {
    arrowDown.style.transform = 'rotate(0deg)';
    displayText.style.display = 'none';
  }
};

arrowDown.addEventListener('click', rotateArrow);
