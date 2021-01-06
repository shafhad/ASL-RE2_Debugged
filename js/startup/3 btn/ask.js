class Ask{
    constructor(){
        this.title = createElement('h2');
        this.back = createButton('Back');
    }

    display(){
        this.title.html('COMING SOON');
        this.title.position(displayWidth/2-100, displayHeight/2)

        this.back.style('width','80px');
        this.back.style('height','30px');
        this.back.style('background','lightPink');
        this.back.position(displayWidth/2-170,displayHeight/2-200);

        this.Back.mousePressed(()=>{
            gameState = 0;
           

            this.Back.hide();
            this.title.hide();
        });
    }
}