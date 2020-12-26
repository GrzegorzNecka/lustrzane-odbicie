import "./style.css";

document.addEventListener("DomContentLoaded", () => {
  const input = document.querySelector(".text-input"),
    mirror = document.querySelector(".mirror");

  console.log(input);
  console.log(mirror);

  input.addEventListener("keyup", e => {
    console.log(input.value);
    console.log(e);
  });
});
