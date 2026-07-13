const prodBG = document.getElementById("prod-bg");
const prodType = document.getElementById("prodType");

function renderProds(filteredProds) {
    prodBG.innerHTML = "";

    if (filteredProds.length < 1) {
        prodBG.innerHTML = "No results found";
        return;
    }

    filteredProds.forEach(function(merchandise){
        const card = document.createElement('div');
        card.className = "prod-card";

        card.innerHTML = `
            <img class = "card-img" src="${merchandise.image}" alt="${merchandise.title}"/>
            <div class="card-info">
                <p class="card-title">${merchandise.title}</p>
                <p class="card-price">$${merchandise.price.toFixed(2)} USD</p>
            </div>        
        `;

        prodBG.appendChild(card);
        card.addEventListener('click', function() {
        window.location.href = `ProdBuy.html?id=${merchandise.id}`;
        });
    }); 
}

renderProds(merchandise);

function applyFilters() {
    const typeFilter = prodType.value;

    let prodFilter;

    if (typeFilter === "all") {
        prodFilter = merchandise;
    } else {
        prodFilter = merchandise.filter(function(prod) {
            return prod.type === typeFilter;
        });
    }

    renderProds(prodFilter);
}
applyFilters();

prodType.addEventListener('change', function() {
    applyFilters();
});