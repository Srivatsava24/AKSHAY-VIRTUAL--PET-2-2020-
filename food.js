class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('images/milk.png');
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=50,y=200;

      imageMode(CENTER);
   

      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=40;
            y=y+60;
          }
          image(this.image,x,y,50,50);
          x=x+40;
        }
      }
    }
}