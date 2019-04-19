// Meme Area
// Meme Canvas
const canvas = document.querySelector('#meme');

// Meme Customizing Forms
// Tabs
const formTabs = document.querySelectorAll('.mg_form_tab');
const canvasTab = document.querySelector('#mg_canvas_tab');
const imagesTab = document.querySelector('#mg_images_tab');
const textsTab = document.querySelector('#mg_texts_tab');

// Form sections
const formSections = document.querySelectorAll('.mg_form_section');

// Canvas
const canvasSection = document.querySelector('#mg_canvas_section');
const addCustomCanvasRadioButton = document.querySelector('#mg_add_custom_canvas_radio_button');
const addPredefinedCanvasRadioButton = document.querySelector('#mg_add_predifined_canvas_radio_button');
const customCanvasForm = document.querySelector('#mg_custom_canvas_size_form');
const predefinedCanvasForm = document.querySelector('#mg_predefined_canvas_size_form');
const canvasWidthInput = document.querySelector('#mg_canvas_width');
const canvasHeightInput = document.querySelector('#mg_canvas_height');
const canvasSizeSaveButton = document.querySelector('#mg_save_custom_canvas_button');
const canvasPredefinedSizes = document.querySelectorAll('.mg_template_size');

// Images
const imageSection = document.querySelector('#mg_images_section');
const imageInput = document.querySelector('#mg_image_input');
const imagesContainer = document.querySelector('#mg_form_images_container');

// Texts
const textSection = document.querySelector('#mg_texts_section');
const addTextButton = document.querySelector('#mg_add_text_button');
const textsContianer = document.querySelector('#mg_form_texts_container');

const memeContents = [];

function hideFormSections() {
    formTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    formSections.forEach(section => {
        section.classList.add('mg_hide');
    });
}

async function drawCanvas () {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let index = 0, length = memeContents.length; index < length; index++) {
        const content = memeContents[index];
        if(content == null) {
            continue;
        }

        if (content.type == 'image') {
            let imageRenderingPromise = new Promise(resolve => {
                const image = new Image();
                image.src = window.URL.createObjectURL(content.imageObject);
                image.onload = function () {
                    image.width = parseInt((canvas.width / 100)  * content.positionX);
                    image.height = parseInt((canvas.height / 100)  * content.positionY);
                    ctx.mozImageSmoothingEnabled = false;
                    ctx.webkitImageSmoothingEnabled = false;
                    ctx.msImageSmoothingEnabled = false;
                    ctx.imageSmoothingEnabled = false;
                    ctx.imageSmoothingEnabled = false;
                    ctx.drawImage(image, parseInt((canvas.width / 100)  * content.positionX), parseInt((canvas.height / 100)  * content.positionY), parseInt((canvas.width / 100)  * content.width), parseInt((canvas.height / 100)  * content.height));
                    resolve('');
                };
            });

            await imageRenderingPromise;
            imageInput.value = '';
        } else if (content.type == 'text') {
            ctx.font = 'bold' + ' ' +content.fontSize + 'px' + ' ' + content.fontFamily;
            ctx.fillStyle = content.colour;
            ctx.textAlign = 'left';
            ctx.strokeStyle = content.strokeColour;
            ctx.lineWidth = content.strokeWidth;
            ctx.strokeText(content.text, parseInt((canvas.width / 100)  * content.positionX), ( parseInt((canvas.height / 100)  * content.positionY) + content.height), parseInt((canvas.width / 100)  * content.width), content.height);
            ctx.fillText(content.text, parseInt((canvas.width / 100)  * content.positionX), ( parseInt((canvas.height / 100)  * content.positionY) + content.height), parseInt((canvas.width / 100)  * content.width), content.height);
        }
    }
}