class TextButton{
    constructor(x, y, text, callback){
        this.button = createButton(text);
        this.button.style('font-size', '20px');
        this.button.style('font-family', 'gameFont');
        this.button.style('background-color', 'rgba(255, 0, 0, 0.0)');
        this.button.style('border', 'none');
        this.button.style('color', 'white');
        this.button.size(200, 50);
        this.button.position(x, y);
        this.button.mousePressed(callback);
        this.button.mouseMoved(() => {
            this.button.style('box-shadow', '5px 5px 5px seagreen');
        });
        this.button.mouseOut(() => {
            this.button.style('box-shadow', 'none');
        });
    }

    getButton(){
        return this.button;
    }
}