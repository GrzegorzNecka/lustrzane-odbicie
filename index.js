import "./style.css";

const input = document.querySelector(".text-input"),
  mirror = document.querySelector(".mirror");

const setReflection = e => {
  const value = e.target.value;
  mirror.textContent = [...value].reverse().join("");
};

input.addEventListener("keyup", e => setReflection(e));
