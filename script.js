fetch("data/destinations.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("destinations-container");

        data.destinations.forEach(destination => {

            const div = document.createElement("div");

            div.innerHTML = `
                <h2>${destination.title}</h2>
                <img src="img/${destination.image}" width="200">
                <p>${destination.subtitle}</p>
                <a href="destination.html?id=${destination.id}">
                    Se mere
                </a>
                <hr>
            `;

            container.appendChild(div);
        });
    });