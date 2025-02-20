document.getElementById("parent").style.backgroundColor = "red";
document.getElementsByClassName("span")[0].innerHTML = 3 + 7;
document.getElementById("span").innerHTML = "<h2> Hello </h2>";
document.querySelector("#parent").style.backgroundColor = "green";
let btn = document.createElement("button");
btn.innerText = "Submit";
btn.style.padding = "20px";
document.querySelector("#parent").append(btn);

let num = 11;
console.log(num);

function pri() {
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
}
pri();
