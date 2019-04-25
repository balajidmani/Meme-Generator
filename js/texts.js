textsTab.addEventListener('click', function () {
    hideFormSections();
    textsTab.classList.add('active');
    textSection.classList.remove('mg_hide');
});

addTextButton.addEventListener('click', function () {
    const textContent = {
        type: 'text',
        text: 'Your text',
        width: 100,
        height: 40,
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Source Sans Pro',
        colour: 'yellow',
        strokeColour: 'black',
        strokeWidth: 2,
        backgroundColour: 'none',
        positionX: 0,
        positionY: 0
    };
    memeContents.push(textContent);

    createText(textContent);
    drawCanvas();
});

function createText(textContent) {
    const length = memeContents.length - 1;
    const textOptions =
        `<div class='mg_form_caption_group' data-content-index='${length}'>
            <input class='mg_width_100percentage mg_input' type='text' data-property='text' value='${textContent.text}'>
            <div class='mg_toggle' data-collapse-options='true'>-</div>
            <div class='mg_remove' data-content-index='${length}'>×</div>
        </div>
        <div class='mg_form_options_group' data-content-index='${length}'>
            <div>Width (%)</div>
            <input type='number' class='mg_input_small' data-property='width' value='${textContent.width}'/>
            <div>Height (px)</div>
            <input type='number' class='mg_input_small' data-property='height' value='${textContent.height}'/>
            <div>Text align</div>
            <select data-property='textAlign'>
                <option value='center' ${ textContent.textAlign === 'center' ? 'selected' : '' }>Center</option>
                <option value='left' ${ textContent.textAlign === 'left' ? 'selected' : '' }>Left</option>
                <option value='right' ${ textContent.textAlign === 'right' ? 'selected' : '' }>Right</option>
            </select>
            <div>Font size (px)</div>
            <input type='number' class='mg_input_small' data-property='fontSize' value='${textContent.fontSize}'/>
            <div>Font family</div>
            <select data-property='fontFamily'>
                <option value='Source Sans Pro' ${ textContent.fontFamily === 'Source Sans Pro' ? 'selected' : '' }>Sans</option>
                <option value='Baloo Thambi' ${ textContent.fontFamily === 'Baloo Thambi' ? 'selected' : '' }>Tamil</option>
                <option value='Kaushan Script' ${ textContent.fontFamily === 'Kaushan Script' ? 'selected' : '' }>Script</option>
                <option value='Carter One' ${ textContent.fontFamily === 'Carter One' ? 'selected' : '' }>Carter One</option>
            </select>
            <div>Colour</div>
            <select data-property='colour'>
                <option value='yellow' ${ textContent.colour === 'yellow' ? 'selected' : '' }>Yellow</option>
                <option value='#ffc107' ${ textContent.colour === '#ffc107' ? 'selected' : '' }>Sun Flower</option>
                <option value='#ff9800' ${ textContent.colour === '#ff9800' ? 'selected' : '' }>Orange</option>
                <option value='white' ${ textContent.colour === 'white' ? 'selected' : '' }>White</option>
                <option value='#1abc9c' ${ textContent.colour === '#1abc9c' ? 'selected' : '' }>Green</option>
                <option value='#03a9f4' ${ textContent.colour === '#03a9f4' ? 'selected' : '' }>Blue</option>
                <option value='#00bcd4' ${ textContent.colour === '#00bcd4' ? 'selected' : '' }>Sky Blue</option>
                <option value='cyan' ${ textContent.colour === 'cyan' ? 'selected' : '' }>Cyan</option>
                <option value='#f44336' ${ textContent.colour === '#f44336' ? 'selected' : '' }>Red</option>
                <option value='#e91e63' ${ textContent.colour === '#e91e63' ? 'selected' : '' }>Pink</option>
                <option value='black' ${ textContent.colour === 'black' ? 'selected' : '' }>Black</option>
            </select>
            <div>Stroke Colour</div>
            <select data-property='strokeColour'>
                <option value='yellow' ${ textContent.strokeColour === 'yellow' ? 'selected' : '' }>Yellow</option>
                <option value='#ffc107' ${ textContent.strokeColour === '#ffc107' ? 'selected' : '' }>Sun Flower</option>
                <option value='#ff9800' ${ textContent.strokeColour === '#ff9800' ? 'selected' : '' }>Orange</option>
                <option value='white' ${ textContent.strokeColour === 'white' ? 'selected' : '' }>White</option>
                <option value='#1abc9c' ${ textContent.strokeColour === '#1abc9c' ? 'selected' : '' }>Green</option>
                <option value='#03a9f4' ${ textContent.strokeColour === '#03a9f4' ? 'selected' : '' }>Blue</option>
                <option value='#00bcd4' ${ textContent.strokeColour === '#00bcd4' ? 'selected' : '' }>Sky Blue</option>
                <option value='cyan' ${ textContent.strokeColour === 'cyan' ? 'selected' : '' }>Cyan</option>
                <option value='#f44336' ${ textContent.strokeColour === '#f44336' ? 'selected' : '' }>Red</option>
                <option value='#e91e63' ${ textContent.strokeColour === '#e91e63' ? 'selected' : '' }>Pink</option>
                <option value='black' ${ textContent.strokeColour === 'black' ? 'selected' : '' }>Black</option>
            </select>
            <div>Stroke (px)</div>
            <input type='number' class='mg_input_small' data-property='strokeWidth' value='${textContent.strokeWidth}'/>
            <div>Background</div>
            <select data-property='backgroundColour'>
                <option value='none' ${ textContent.backgroundColour === 'none' ? 'selected' : '' }>none</option>
                <option value='yellow' ${ textContent.backgroundColour === 'yellow' ? 'selected' : '' }>Yellow</option>
                <option value='#ffc107' ${ textContent.backgroundColour === '#ffc107' ? 'selected' : '' }>Sun Flower</option>
                <option value='#ff9800' ${ textContent.backgroundColour === '#ff9800' ? 'selected' : '' }>Orange</option>
                <option value='white' ${ textContent.backgroundColour === 'white' ? 'selected' : '' }>White</option>
                <option value='#1abc9c' ${ textContent.backgroundColour === '#1abc9c' ? 'selected' : '' }>Green</option>
                <option value='#03a9f4' ${ textContent.backgroundColour === '#03a9f4' ? 'selected' : '' }>Blue</option>
                <option value='#00bcd4' ${ textContent.backgroundColour === '#00bcd4' ? 'selected' : '' }>Sky Blue</option>
                <option value='cyan' ${ textContent.backgroundColour === 'cyan' ? 'selected' : '' }>Cyan</option>
                <option value='#f44336' ${ textContent.backgroundColour === '#f44336' ? 'selected' : '' }>Red</option>
                <option value='#e91e63' ${ textContent.backgroundColour === '#e91e63' ? 'selected' : '' }>Pink</option>
                <option value='black' ${ textContent.backgroundColour === 'black' ? 'selected' : '' }>Black</option>
            </select>
            <div>Position X (%)</div>
            <input type='number' class='mg_input_small' data-property='positionX' value='${textContent.positionX}'/>
            <div>Position Y (%)</div>
            <input type='number' class='mg_input_small' data-property='positionY' value='${textContent.positionY}'/>
        </div>`;

    const fragment = document.createElement('div');
    fragment.classList = 'mg_section_group';
    fragment.innerHTML = textOptions;
    textsContianer.append(fragment);
}

function modifyText(e) {
    const target = e.target;
    let index = 0;
    if (target && target.matches("input[data-property='text']")) {
        index = target.parentNode.getAttribute('data-content-index');
        memeContents[index].text = target.value;
    }

    if (target && target.matches("input[data-property='width']")) {
        index = target.parentNode.getAttribute('data-content-index');
        memeContents[index].width = parseInt(target.value);
    }

    if (target && target.matches("input[data-property='height']")) {
        index = target.parentNode.getAttribute('data-content-index');
        memeContents[index].height = parseInt(target.value);
    }

    if (target && target.matches("input[data-property='fontSize']")) {
        index = target.parentNode.getAttribute('data-content-index');
        memeContents[index].fontSize = parseInt(target.value);
    }

    if (target && target.matches("select[data-property='textAlign']")) {
        index = target.parentNode.getAttribute('data-content-index');
        memeContents[index].textAlign = target.value;
    }

    if (target && target.matches("select[data-property='fontFamily']")) {
        index = target.parentNode.getAttribute('data-content-index');
        memeContents[index].fontFamily = target.value;
    }

    if (target && target.matches("select[data-property='colour']")) {
        index = target.parentNode.getAttribute('data-content-index');
        memeContents[index].colour = target.value;
    }

    if (target && target.matches("select[data-property='strokeColour']")) {
        index = target.parentNode.getAttribute('data-content-index');
        memeContents[index].strokeColour = target.value;
    }

    if (target && target.matches("input[data-property='strokeWidth']")) {
        index = target.parentNode.getAttribute('data-content-index');
        memeContents[index].strokeWidth = parseInt(target.value);
    }

    if (target && target.matches("select[data-property='backgroundColour']")) {
        index = target.parentNode.getAttribute('data-content-index');
        memeContents[index].backgroundColour = target.value;
    }

    if (target && target.matches("input[data-property='positionX']")) {
        index = target.parentNode.getAttribute('data-content-index');
        memeContents[index].positionX = parseInt(target.value);
    }

    if (target && target.matches("input[data-property='positionY']")) {
        index = target.parentNode.getAttribute('data-content-index');
        memeContents[index].positionY = parseInt(target.value);
    }

    drawCanvas();
}

textsContianer.addEventListener("keyup", debounce(modifyText, 400));
textsContianer.addEventListener("change", debounce(modifyText, 400));
textsContianer.addEventListener("click", function (e) {
    const target = e.target;
    if (target && target.matches("div.mg_toggle")) {
        const subOptions = target.parentNode.nextElementSibling;
            subOptions.classList.toggle('mg_hide');
        const collapse = target.getAttribute('data-collapse-options');
        if (collapse == 'true') {
            target.innerText = '+';
            target.setAttribute('data-collapse-options', 'false');
        } else {
            target.innerText = '-';
            target.setAttribute('data-collapse-options', 'true');
        }
    }

    if (target && target.matches("div.mg_remove")) {
        const index = target.getAttribute('data-content-index');
        const imageOptionsGroup = target.parentNode.parentNode;
        imageOptionsGroup.remove();
        memeContents[index] = null;

        drawCanvas();
    }
});