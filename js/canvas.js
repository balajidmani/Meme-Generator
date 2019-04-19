canvasTab.addEventListener('click', function () {
    hideFormSections();
    canvasTab.classList.add('active');
    canvasSection.classList.remove('mg_hide');
});

addCustomCanvasRadioButton.addEventListener('change', function () {
    predefinedCanvasForm.classList.add('mg_hide');
    customCanvasForm.classList.remove('mg_hide');
});

addPredefinedCanvasRadioButton.addEventListener('change', function () {
    customCanvasForm.classList.add('mg_hide');
    predefinedCanvasForm.classList.remove('mg_hide');
});

function changeCanvasSize(width, height) {
    canvas.style.width = width + 'px';
    canvas.width = width;
    canvas.style.marginLeft = '-' + (width / 2) + 'px';
    canvas.style.height = height + 'px';
    canvas.height = height;
    canvas.style.marginTop = '-' + (height / 2) + 'px';
}

for (let i = 0; i < canvasPredefinedSizes.length; i++) {
    canvasPredefinedSizes[i].addEventListener('click', usePredefinedCanvasSize);
}

function usePredefinedCanvasSize() {
    removePredefinedCanvasActiveState();

    this.classList.add('selected');
    let width = this.innerText.split('X')[0].trim();
    let height = this.innerText.split('X')[1].trim();
    changeCanvasSize(width, height);
    drawCanvas();
}

function removePredefinedCanvasActiveState() {
    for (let i = 0; i < canvasPredefinedSizes.length; i++) {
        canvasPredefinedSizes[i].classList.remove('selected');
    }
}

canvasSizeSaveButton.addEventListener('click', function () {
    if (canvasWidthInput.value == '') {
        alert('Width value cannot be empty :(');
        return;
    }
    if (canvasHeightInput.value == '') {
        alert('Height value cannot be empty :(');
        return;
    }

    removePredefinedCanvasActiveState();
    changeCanvasSize(canvasWidthInput.value, canvasHeightInput.value);
    drawCanvas();
});