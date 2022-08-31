let slider = document.querySelector('#slider');
let output = document.querySelector('#value');
output.textContent = `${slider.value}x${slider.value}`;
slider.oninput = () => output.textContent = `${slider.value}x${slider.value}`;
