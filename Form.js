class Form{
    constructor(){
      this.input = createInput("Name");
      this.button = createButton("Play");
      this.greeting = createElement("h3");
      this.title = createElement("h2");

    }
    display(){
        title.html("Car Racing Game");
        title.position(displayWidth/2-40,displayHeight/2-80);
        this.input.position(130,160);
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          var name = this.input.value();
          playercount += 1;
          player.update(name);
          player.updateCount(playercount);
          this.greeting.html("Hello"+","+name);
          this.greeting.position(displayWidth/2-70,displayHeight/4);
        })
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
}