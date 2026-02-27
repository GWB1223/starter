// PARTICLES
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];
for(let i=0;i<70;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
d:Math.random()*0.4
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="rgba(255,255,255,0.3)";
particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();
p.y-=p.d;
if(p.y<0){p.y=canvas.height}
});
requestAnimationFrame(draw);
}
draw();

// 3D TILT
document.querySelectorAll(".tilt").forEach(card=>{
card.addEventListener("mousemove",(e)=>{
const rect=card.getBoundingClientRect();
const x=e.clientX-rect.left;
const y=e.clientY-rect.top;
const centerX=rect.width/2;
const centerY=rect.height/2;
const rotateX=-(y-centerY)/15;
const rotateY=(x-centerX)/15;
card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
card.addEventListener("mouseleave",()=>{
card.style.transform="rotateX(0) rotateY(0)";
});
});
