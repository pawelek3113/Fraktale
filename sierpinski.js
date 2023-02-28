// function setup(){
//     canva = createCanvas(600, 600);
//     canva.parent('Dywan-holder');
// }
// function draw(){
//     background(220);
//     Sierpinski(3, 0, 0, 400);
// }
// function Sierpinski(n, x, y, a){
//     if (n==0){
//         square(x, y, a);
//     }
//     else{
//         var b = a/3, i;
//         for(i = 0; i < 3; i++){
//             Sierpinski(n-1, x+i*b, y, b);
//         }
//         for(i = 0; i < 2; i++){
//             Sierpinski(n-1, x+2*i*b, y+b, b);
//         }
//         for(i = 0; i < 3; i++){
//             Sierpinski(n-1, x+i*b, y+2*b, b);
//         }
//     }
// }