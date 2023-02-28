function setup(){
    canva = createCanvas(600, 800);
    canva.parent("koch-holder")
    p3 = Math.sqrt(3);
}

function Koch(n, x, y, d, alfa){
    stroke("#0037ab");
    var dx = d*Math.cos(alfa);
    var dy = d*Math.sin(alfa);
    if (n==0){
        line(x, y, x+dx, y-dy);
    }
    else{
        Koch(n-1, x, y, d/3, alfa);
        Koch(n-1, x+dx/3, y-dy/3, d/3, alfa+PI/3);
        Koch(n-1, x+dx/2-dy*p3/6, y-dy/2-dx*p3/6, d/3, alfa-PI/3);
        Koch(n-1, x+2*dx/3,y-2*dy/3, d/3, alfa);
    }
}

function PlatekKocha(n, xs, ys, d){
    Koch(n, xs-d/2, ys-d*p3/6, d, -PI/3);
    Koch(n, xs, ys+d*p3/3, d, PI/3);
    Koch(n, xs+d/2, ys-d*p3/6, d, -PI);
}

function draw(){
    background(220);    
    Koch(4,50,300,500,0);
    PlatekKocha(4, 300, 600, 200);
    noLoop();
  }