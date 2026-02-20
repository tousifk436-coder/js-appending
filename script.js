let section=document.createElement("section");
document.body.append(section);

let heading1=document.createElement("h1");
heading1.style.textAlign="center";
heading1.innerHTML="latest news";
section.appendChild(heading1);

let para=document.createElement("p");
para.style.textAlign="center";
section.append(para);
para.innerHTML="New customizable tabs put you back in control so that you can see what’s new at a glance and decide which emails you want to read and when";

let maindiv=document.createElement("div");
maindiv.style.display="flex";
section.append(maindiv);

let div1=document.createElement("div");
maindiv.append(div1);
let image1=document.createElement("img");
div1.append(image1);
image1.src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/bakery-16-400x250.jpg";
console.log(div1);

let divh1=document.createElement("h1");
div1.append(divh1)
divh1.innerHTML="Nunc Volutpat Venenatis"

let divp1=document.createElement("p")
div1.append(divp1);
divp1.innerHTML="Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Ut faucibus fringilla semper. Aenean nunc ex,..."




let div2=document.createElement("div");
maindiv.append(div2);
let image2=document.createElement("img");
div2.append(image2);
image2.src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/generator-68-400x250.jpg";


let divh2=document.createElement("h1");
div2.append(divh2)
divh2.innerHTML="Nunc Volutpat Venenatis"

let divp2=document.createElement("p")
div2.append(divp2);
divp2.innerHTML="Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Ut faucibus fringilla semper. Aenean nunc ex,..."



