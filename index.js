import "./style.css";

const input = document.querySelector(".text-input"),
  mirror = document.querySelector(".mirror");

const setMirror = e => {
  const value = e.target.value;
  mirror.textContent = [...value].reverse().join("");
};

input.addEventListener("keyup", e => setMirror(e));
