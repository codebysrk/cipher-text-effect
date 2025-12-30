const heading = document.querySelector("h1");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#%&@?!<>[]{}|^*~";
const text = heading.innerText;

const intervalDuration = 50;
let iteration = 0;
let interval = null;

heading.addEventListener("pointerenter", () => {
  clearInterval(interval);
  iteration = 0;

  interval = setInterval(() => {
    heading.innerText = text
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return text[index];
        }
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");

    if (iteration >= text.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
    console.log(iteration);
  }, intervalDuration);
});
