class TextButton{
    constructor(x, y, text, callback){
        this.button = createButton(text);
        this.button.style('font-size', '27px');
        this.button.style('font-family', 'gameFont');
        this.button.style('text-align', 'center');
        this.button.style('background-color', '#FCF3CF');
        this.button.style('border', '3px solid black');
        this.button.style('border-radius', '8px');
        this.button.style('color', 'black');
        this.button.size(250, 50);
        this.button.position(x, y);
        this.button.mousePressed (() =>{
            if (typeof audioController !== 'undefined') {
                audioController.play('button');
            }
            callback();
        });
        //(callback);
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
