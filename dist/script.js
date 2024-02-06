const random = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);
const hue = random(360);
const app = document.getElementById('app');
document.body.style.setProperty('--bg', `oklch(50% 50% ${hue})`);
app.innerHTML = [ ...Array(100).keys() ].map(i => `<li style="--bg:oklch(${
  random(60,40)}% ${
  random(80,20)}% ${
  random(hue, hue + 50)});--w:${100-i}cqi;"></li>`).join('');