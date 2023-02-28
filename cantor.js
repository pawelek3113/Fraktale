function setup(){
    canva = createCanvas(600, 400);
    canva.parent('cantor-holder');
}
function Cantor(n, x, y, d){
    if(n == 0){
        line(x, y, x+d, y);
    }
    else{
        Cantor(n-1, x, y, d/3);
        Cantor(n-1, x+2*d/3, y, d/3);
    }
}
function draw(){
    background(220);    
    for(n = 0; n < 7; n++){
        Cantor(n, 10, (n+1)*50, 580);
    }
    noLoop();
  }