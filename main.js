let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #4F518C;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #4F518C;">La programación es el universo donde el creador soy "YO".</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
