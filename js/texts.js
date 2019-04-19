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
        fontSize: 25,
        fontFamily: 'Source Sans Pro',
        colour: 'yellow',
        strokeColor: 'black',
        strokeWidth: 2,
        backgroundColor: 'none',
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
                <option value='none' ${ textContent.backgroundColor === 'none' ? 'selected' : '' }>none</option>
                <option value='yellow' ${ textContent.backgroundColor === 'yellow' ? 'selected' : '' }>Yellow</option>
                <option value='#ffc107' ${ textContent.backgroundColor === '#ffc107' ? 'selected' : '' }>Sun Flower</option>
                <option value='#ff9800' ${ textContent.backgroundColor === '#ff9800' ? 'selected' : '' }>Orange</option>
                <option value='white' ${ textContent.backgroundColor === 'white' ? 'selected' : '' }>White</option>
                <option value='#1abc9c' ${ textContent.backgroundColor === '#1abc9c' ? 'selected' : '' }>Green</option>
                <option value='#03a9f4' ${ textContent.backgroundColor === '#03a9f4' ? 'selected' : '' }>Blue</option>
                <option value='#00bcd4' ${ textContent.backgroundColor === '#00bcd4' ? 'selected' : '' }>Sky Blue</option>
                <option value='cyan' ${ textContent.backgroundColor === 'cyan' ? 'selected' : '' }>Cyan</option>
                <option value='#f44336' ${ textContent.backgroundColor === '#f44336' ? 'selected' : '' }>Red</option>
                <option value='#e91e63' ${ textContent.backgroundColor === '#e91e63' ? 'selected' : '' }>Pink</option>
                <option value='black' ${ textContent.backgroundColor === 'black' ? 'selected' : '' }>Black</option>
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
    let index = 0;
    if (e.target && e.target.matches("input[data-property='text']")) {
        index = e.target.parentNode.getAttribute('data-content-index');
        memeContents[index].text = event.target.value;
    }

    if (e.target && e.target.matches("input[data-property='width']")) {
        index = e.target.parentNode.getAttribute('data-content-index');
        memeContents[index].width = parseInt(event.target.value);
    }

    if (e.target && e.target.matches("input[data-property='height']")) {
        index = e.target.parentNode.getAttribute('data-content-index');
        memeContents[index].height = parseInt(event.target.value);
    }

    if (e.target && e.target.matches("input[data-property='fontSize']")) {
        index = e.target.parentNode.getAttribute('data-content-index');
        memeContents[index].fontSize = parseInt(event.target.value);
    }

    if (e.target && e.target.matches("select[data-property='fontFamily']")) {
        index = e.target.parentNode.getAttribute('data-content-index');
        memeContents[index].fontFamily = event.target.value;
    }

    if (e.target && e.target.matches("select[data-property='colour']")) {
        index = e.target.parentNode.getAttribute('data-content-index');
        memeContents[index].colour = event.target.value;
    }

    if (e.target && e.target.matches("select[data-property='strokeColour']")) {
        index = e.target.parentNode.getAttribute('data-content-index');
        memeContents[index].strokeColour = event.target.value;
    }

    if (e.target && e.target.matches("input[data-property='strokeWidth']")) {
        index = e.target.parentNode.getAttribute('data-content-index');
        memeContents[index].strokeWidth = parseInt(event.target.value);
    }

    if (e.target && e.target.matches("select[data-property='backgroundColour']")) {
        index = e.target.parentNode.getAttribute('data-content-index');
        memeContents[index].backgroundColour = event.target.value;
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


textsContianer.addEventListener("keyup", function (e) {
    modifyText(e);
});

textsContianer.addEventListener("change", function (e) {
    modifyText(e);
});

textsContianer.addEventListener("click", function (e) {
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