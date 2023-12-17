// Function to handle box click events
function handleBoxClick(box, useRandomColor) {
    if (useRandomColor) {
        // Change the color to a random color on click
        box.style.backgroundColor = getRandomColor();
    } else {
        // Change the color to black on click (default behavior)
        box.style.backgroundColor = 'black';
    }
}

window.addEventListener("load", function () {
    const container = document.querySelector('.container');
    let useRandomColor = false; // Flag to determine the click behavior

    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('flex-row');
        container.appendChild(row);

        for (let j = 0; j < 16; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);

            // Add click event listener to each box using the new function
            box.addEventListener('click', function () {
                handleBoxClick(box, useRandomColor);
            });
        }
    }

    // Event listener for the random button
    const randomButton = document.getElementById('randomButton');
    randomButton.addEventListener('click', function () {
        // Toggle the flag when the random button is clicked
        useRandomColor = !useRandomColor;
    });

    // Event listener for the default button
    const defaultButton = document.getElementById('defaultButton');
    defaultButton.addEventListener('click', function () {
        // Set the flag to false to use the default behavior
        useRandomColor = false;
    });
});

// Function to reset box colors to default
function resetBoxes() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.style.backgroundColor = 'rgb(245, 245, 245)';
    });
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener for the reset button
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetBoxes);


// kudos to https://codepen.io/armanb/details/GRBjVgd 

const slider_input = document.getElementById('slider_input'),
      slider_thumb = document.getElementById('slider_thumb'),
      slider_line = document.getElementById('slider_line');

function showSliderValue() {
  slider_thumb.innerHTML = slider_input.value;
  const bulletPosition = (slider_input.value /slider_input.max),
        space = slider_input.offsetWidth - slider_thumb.offsetWidth;

  slider_thumb.style.left = (bulletPosition * space) + 'px';
  slider_line.style.width = slider_input.value + '%';
}

showSliderValue();
window.addEventListener("resize",showSliderValue);
slider_input.addEventListener('input', showSliderValue, false);