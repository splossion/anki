const container = document.getElementById("cards-container");

async function loadCards() {
    const response = await fetch("data.json");
    const data = await response.json();

    data.forEach(anime => {
        const card = document.createElement("div");

        card.innerHTML = `
            <a class="anime-card" href="${anime.link}">
            <h2>${anime.title}</h2>
            <img src="${anime.image}">
            <p>${anime.quantity} cards</p>
            </a>
        `;

        container.appendChild(card);
    });
} 

loadCards();