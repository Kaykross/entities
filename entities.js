const search = document.getElementById("search");
const items = document.querySelector(".content .items");
const content = document.querySelector(".content");
const sidebar = document.querySelector(".sidebar");
const sideLinks = document.querySelector(".side-links .items");
const menuIcon = document.querySelector(".open-sidebar");
const date = document.querySelector(".footer .date");

loadHTML();
addDate(date);
search.oninput=e=>loadHTML(search.value);
menuIcon.onclick=e=>sidebar.classList.toggle('active');


//generate range of numbers from min to max [1,2,3];
function range(min=0,max=1000){
    const numbers = [];
    for (let i = min; i <= max; i++) { numbers.push(i)}
    return numbers;
}

//map the range of numbers array into a html and add to the page
function loadHTML(val){
    const arr = range(33,3000).filter((i,n,arr)=>i==val?i:val == undefined ?arr: val == "" ?arr:null);
    if(arr.length == 0){
        sideLinks.innerHTML = '';
        items.innerHTML = `<div class="item">Entity Not Found</div>`;
        sideLinks.innerHTML = `<div class="item incorrect">Incorrect Input</div>`;
        return content.append(items);
    }
    const iu = arr.map(e=>`
    <div class="item" id="${e}">
        <div class="entity">&#${e};</div>
        <div class="label"></div>
    </div>`
    ).join("");
    items.innerHTML = iu;
    sideLinks.innerHTML = iu;
    [...items.children].forEach(i=>i.children[1].textContent = `&#${i.id};`);
    [...sideLinks.children].forEach(i=>i.children[1].textContent = `&#${i.id};`);
    content.append(items);
}

function addDate(el){
   const d = new Date().toLocaleDateString("en-gh",{dateStyle:"long"});
   return el.innerText = d;
}






