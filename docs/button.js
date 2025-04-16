class TextButton{
    constructor(x, y, text, width, height, fontsize, callback){
        this.button = createButton(text);
        this.button.style('font-size', fontsize);
        this.button.style('font-family', 'gameFont');
        this.button.style('text-align', 'center');
        this.button.style('background-color', '#FCF3CF');
        this.button.style('border', '3px solid black');
        this.button.style('border-radius', '8px');
        this.button.style('z-index', '2');
        this.button.style('color', 'black');
        this.button.size(width, height);
        this.button.position(x, y);
        this.button.mousePressed(callback);
        this.button.mouseMoved(() => {
            this.button.style('box-shadow', '5px 5px 5px seagreen');
        });
        this.button.mouseOut(() => {
            this.button.style('box-shadow', 'none');
        });
    }

    setText(newText) {
        this.button.html(newText);
    }

    getButton(){
        return this.button;
    }
}
