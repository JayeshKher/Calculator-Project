let btn = document.querySelectorAll(".btn");
let display = document.querySelector(".display");

let key = ""; 
let history =[];
btn.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "=") {
      display.innerText = eval(key); 
    } else {
      key = key + btn.innerText;
      display.innerText = key;
    }
    if (btn.innerText === "DEL") {
        display.innerText = "";
        key="";
    }
  });
});
