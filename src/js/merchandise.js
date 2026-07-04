const prodBG = document.getElementById("prod-bg");

function renderProds(filteredProds) {
    prodBG.innerHTML = "";

    if (filteredProds.length < 1) {
        prodBG.innerHTML = "No results founds";
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

        
    }); 
}

renderProds(merchandise);

