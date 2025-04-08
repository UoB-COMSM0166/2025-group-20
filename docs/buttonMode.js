let easyModeButton;
let hardModeButton;

function modeButtons() {
    if (!easyModeButton) {
        easyModeButton = createButton('EASY MODE');
        easyModeButton.style('font-size', '20');
        easyModeButton.style('font-family', 'gameFont');
        easyModeButton.style('text-align', 'center');
        easyModeButton.style('background-color', '#c2ac53');
        easyModeButton.style('border', 'none');
        easyModeButton.style('border-radius', '8px');
        easyModeButton.style('color', 'black');
        easyModeButton.size(150, 30);
        easyModeButton.position((windowWidth / 3) - 76.5, (windowHeight / 1.345));
    }

    if (!hardModeButton) {
        hardModeButton = createButton('HARD MODE');
        hardModeButton.style('font-size', '20');
        hardModeButton.style('font-family', 'gameFont');
        hardModeButton.style('text-align', 'center');
        hardModeButton.style('background-color', '#FCF3CF');
        hardModeButton.style('border', 'none');
        hardModeButton.style('border-radius', '8px');
        hardModeButton.style('color', 'black');
        hardModeButton.size(150, 30);
        hardModeButton.position((windowWidth / 3) - 76.5, (windowHeight / 1.26));
    }
}
