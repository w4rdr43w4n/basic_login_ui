let btn = document.querySelector(".upload");
let usr = document.querySelector("#usr");
let pwd = document.querySelector("#pwd");
let view = document.querySelector(".view");
let inf = document.querySelector(".info");
let close = document.querySelector(".close");
let remH = document.querySelector(".cls");
let lst = document.getElementById('val');
data = {
names: [],
passwords: [],
Hlist:""
};
function load(){
let dwn  = JSON.parse(window.localStorage.getItem("info"));
lst.innerHTML = dwn.Hlist;
}
btn.addEventListener("click",() => {

let date = new Date();
lst.innerHTML += `<div class="item"> [${data.names.length+1}] <span class="usrI">Usersname: ${usr.value}</span>,<span class="pwdI"> Password: ${pwd.value}</span> <span class="datI">[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}][${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}]</span></div>`;

data.Hlist = lst.innerHTML;
data.passwords.push(pwd.value);
data.names.push(usr.value);

Str_data = JSON.stringify(data);
window.localStorage.setItem("info",Str_data);

alert("Succesfully uploaded!");
});
view.addEventListener("click",() => {
inf.style.display = "block";
load();
});
close.addEventListener("click",() => {
inf.style.display = "none";
});

remH.addEventListener("click", ()=>{
  window.localStorage.removeItem("info");
  lst.innerHTML = "";
  data.names = [];
  data.passwords = [];
  alert("Login history deleted");
});