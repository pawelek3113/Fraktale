function setup(){
    canva = createCanvas(600, 400);
    canva.parent('trojkat-holder');
}

function losowyKolor(){
    return color(random(255), random(255), random(255));
}

function drawTriangle(p1, p2, p3){
    fill(losowyKolor());
    triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
}

function srodkowyPunkt(p1, p2){
    return createVector((p1.x + p2.x)/2, (p1.y + p2.y)/2); 
}

class Triangle{
    constructor(p1, p2, p3){
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    draw(){
        drawTriangle(this.p1, this.p2, this.p3); 
    }
}

var level = 3;

function rysujTrojkatSierpinskiego(tr, n){
    if(n == level){
        return;
    }
    let m1 = srodkowyPunkt(tr.p1, tr.p2);
    let m2 = srodkowyPunkt(tr.p2, tr.p3);
    let m3 = srodkowyPunkt(tr.p3, tr.p1);

    let t0 = new Triangle(m1, m2, m3);
    t0.draw();

    let t1 = new Triangle(tr.p1, m1, m3);
    let t2 = new Triangle(tr.p2, m1, m2);
    let t3 = new Triangle(tr.p3, m2, m3);

    rysujTrojkatSierpinskiego(t1, n+1);
    rysujTrojkatSierpinskiego(t2, n+1);
    rysujTrojkatSierpinskiego(t3, n+1);
}

function draw(){
    background(220);
    let p1 = createVector(600/2, 0);
    let p2 = createVector(0, 400);
    let p3 = createVector(600, 400);

    let t1 = new Triangle(p1, p2, p3);
    t1.draw();

    rysujTrojkatSierpinskiego(t1, 0);
    noLoop();
}
