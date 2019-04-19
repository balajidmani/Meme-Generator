imagesTab.addEventListener('click', function () {
    hideFormSections();
    imagesTab.classList.add('active');
    imageSection.classList.remove('mg_hide');
});

imageInput.addEventListener('change', function () {
    const imageContent = {
        type: 'image',
        imageObject: imageInput.files[0],
        width: 100,
        height: 100,
        positionX: 0,
        positionY: 0
    };
    memeContents.push(imageContent);
    createImage(imageContent);
    drawCanvas();
});

function createImage(imageContent) {
    const length = memeContents.length - 1;
    const imageOptions =
        `<div class='mg_form_caption_group'>
        <p class='mg_canvas_caption'>${imageContent.imageObject.name}</p>
        <div class='mg_toggle' data-collapse-options='true'>-</div>
        <div class='mg_remove' data-content-index='${length}'>×</div>
    </div>
    <div class='mg_form_options_group' data-content-index='${length}'>
        <div>Width (%)</div>
        <input type='number' class='mg_input_small' data-property='width' value='${imageContent.width}'/>
        <div>Height (%)</div>
        <input type='number' class='mg_input_small' data-property='height' value='${imageContent.height}'/>
        <div>Position X (%)</div>
        <input type='number' class='mg_input_small' data-property='positionX' value='${imageContent.positionX}'/>
        <div>Position Y (%)</div>
        <input type='number' class='mg_input_small' data-property='positionY' value='${imageContent.positionY}'/>
    </div>`;

    const fragment = document.createElement('div');
    fragment.classList = 'mg_section_group';
    fragment.innerHTML = imageOptions;
    imagesContainer.append(fragment);
}

function modifyImage (e) {
    let index = 0;
    if (e.target && e.target.matches("input[data-property='width']")) {
        index = e.target.parentNode.getAttribute('data-content-index');
        memeContents[index].width = parseInt(event.target.value);
    }

    if (e.target && e.target.matches("input[data-property='height']")) {
        index = e.target.parentNode.getAttribute('data-content-index');
        memeContents[index].height = parseInt(event.target.value);
    }

    if (e.target && e.target.matches("input[data-property='positionX']")) {
        index = e.target.parentNode.getAttribute('data-content-index');
        memeContents[index].positionX = parseInt(event.target.value);
    }

    if (e.target && e.target.matches("input[data-property='positionY']")) {
        index = e.target.parentNode.getAttribute('data-content-index');
        memeContents[index].positionY = parseInt(event.target.value);
    }
    drawCanvas();
}

imagesContainer.addEventListener("keyup", function (e) {
    modifyText(e);
});

imagesContainer.addEventListener("click", function (e) {
    if (e.target && e.target.matches("div.mg_toggle")) {
        const subOptions = e.target.parentNode.nextElementSibling;
            subOptions.classList.toggle('mg_hide');
        const collapse = e.target.getAttribute('data-collapse-options');
        if (collapse == 'true') {
            e.target.innerText = '+';
            e.target.setAttribute('data-collapse-options', 'false');
        } else {
            e.target.innerText = '-';
            e.target.setAttribute('data-collapse-options', 'true');
        }
    }

    if (e.target && e.target.matches("div.mg_remove")) {
        const index = e.target.getAttribute('data-content-index');
        const imageOptionsGroup = e.target.parentNode.parentNode;
        imageOptionsGroup.remove();
        memeContents[index] = null;

        drawCanvas();
    }
});