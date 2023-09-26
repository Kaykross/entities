const search = document.getElementById("search");
const items = document.querySelector(".content .items");
const content = document.querySelector(".content");
const sidebar = document.querySelector(".sidebar");
const sideLinks = document.querySelector(".side-links .items");

function loadHTML(val){
    
    console.log(val);
    const arr = range(0,1000).filter((i,n,arr)=>i==val?i:val == undefined ?arr: val == "" ?arr:null);
    if(arr.length == 0){
        sideLinks.innerHTML = '';
        items.innerHTML = `<div class="item">Entity Not Found</div>`;
        sideLinks.innerHTML = `<div class="item incorrect">Incorrect Input</div>`;
        return content.append(items);
    }
    const iu = arr.map(e=>`
    <div class="item" id="${e}">
        <div>&#${e};</div>
        <div class="name"></div>
    </div>`
    ).join("");
    items.innerHTML = iu;
    sideLinks.innerHTML = iu;
    [...items.children].forEach(i=>i.children[1].textContent = `&#${i.id};`);
    [...sideLinks.children].forEach(i=>i.children[1].textContent = `&#${i.id};`);
    content.append(items);
}
loadHTML();

search.oninput=e=>{
    console.log(search.value == "");
    loadHTML(search.value)
}





function range(min=0,max=1000){
    const numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(i)
    }
    return numbers;
}

function render(htmlString){ 
   const node = document.createRange().createContextualFragment(`<div>${htmlString}</div>`);
   const nodes = node.firstElementChild.children;
   return node;
};

const btnOpenSidebar = document.querySelector(".open-sidebar");
btnOpenSidebar.onclick=e=>{
    console.log("fired");
    sidebar.classList.toggle('active');
    content.classList.toggle('active');
}
