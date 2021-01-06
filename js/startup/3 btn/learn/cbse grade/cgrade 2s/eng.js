class Eng1{
    constructor(){
        this.Back = createButton('Back');
        this.speak = createButton('Read Aloud');
    }

    display(){

        this.speak.style('width','80px');
        this.speak.style('height','30px');
        this.speak.style('background','lightPink');
        this.speak.position(displayWidth/2-170,displayHeight/2+160);
        this.speak.mousePressed(()=>{
            var sp = new p5.Speech(); // speech synthesis object
            sp.speak('What is a noun? A noun is a word that is the name of a thing, an idea, a place or a person... Here are a few examples............................. 1. Joe is my cousin.. 2. i like these beautiful flowers.. 3. She played with her brother.. 4. The bus has stopped suddenly!!.. 5. we saw many animals at the zoo.. 6. There are no markers in the box.. 7. Children were playing outside..'); // say something
        })

        this.Back.style('width','80px');
        this.Back.style('height','30px');
        this.Back.style('background','lightPink');
        this.Back.position(displayWidth/2-170,displayHeight/2);

        this.Back.mousePressed(()=>{
            gameState = 0;
            this.Back.hide();
        });
        gameState = 21;
    }
}