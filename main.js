let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FOOD_COUNT = 100;
let mpos;

let player;
let foods = [];
let pos = new Vector(5, 7);
let vel = new Vector(1, 1);
vel.scale(2);
vel.print(); // <2, 2>
pos.subVector(vel);
pos.print();  // <3, 5>

let colors = [
  '#92a8d1',
  '#034f84',
  '#f7cac9',
  '#f7786b',
  '#ffef96'
];

let strokeColors = [
  '#92a8d1',
  '#034f84',
  '#f7cac9',
  '#f7786b',
  '#ffef96'
];

function randomColor() {
  let index = Math.floor(Math.random() * colors.length)
  return colors[index];
}

function generateFood() {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let color = randomColor();
  let food = new Food(x, y, 8, color);
  foods.push(food);
}

function init() {
  mpos = new Vector(canvas.width/2, canvas.height/2);
  let name = prompt('Enter your name: ');
  let color = randomColor();
  let stroke = strokeColors[colors.indexOf(color)];
  player = new Player(canvas.width/2, canvas.height/2, 25, color, stroke, name, 4);
  for(let i = 0; i < FOOD_COUNT; i++) {
    generateFood();
}
  update();
}

function update() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update(mpos);

  for(let i = 0; i < foods.length; i++) {
    let eaten = player.intersects(foods[i]);
    if(!eaten) {
      foods[i].draw(c);
    } else {
      player.addMass(foods[i].mass);
      foods.splice(i, 1);
      i--;
    }
  }

  while(foods.length < FOOD_COUNT) {
    generateFood();
  }

  player.draw(c);

  requestAnimationFrame(update);
}

window.addEventListener('load', function() {
    init();

    window.addEventListener('mousemove', function(event) {
      mpos.x = event.clientX - canvas.offsetLeft;
      mpos.y = event.clientY - canvas.offsetTop;
      //mpos.print();
    });
});
