window.addEventListener("load", function () {
    const container = document.querySelector('.container');

    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('flex-row');
        container.appendChild(row);

        for (let j = 0; j < 16; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);

            // Add click event listener to each box
            box.addEventListener('click', function () {
                // Change the color to black on click
                box.style.backgroundColor = 'black';
            });
        }
    }
});
