const Items = document.querySelector(".content .items");
const search = document.getElementById("search");
const entities = [];
for (let i = 0; i < 3000; i++) {
    entities.push(i)  
}

search.oninput=e=>{
    const filtered = entities.filter(e=>
         search.value == ""? entities:
         e == search.value);
         console.log(filtered);
    loadHtml(filtered);
}

loadHtml(entities);
function loadHtml(params) {
    Items.innerHTML = "";
    const html = params.map(e=>`
    <div class="item">&#${e};</div> 
    `).join("");
    Items.innerHTML = html;
}

