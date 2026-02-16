fetch("data/destinations.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("destinations-container");


        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        data.destinations.forEach(destination => {
            const div = document.createElement("div");

            div.innerHTML = `
                <h2>${destination.title}</h2>
                <img src="img/${destination.image}" width="200">
                <p>${destination.subtitle}</p>
                <a href="destination.html?id=${destination.id}">
                    Se mere
                </a>
                <p>favorit: <i class="fa-regular fa-heart"></i></p>
            `;

            container.appendChild(div);

            const heartIcon = div.querySelector(".fa-heart");


            if (favorites.includes(destination.id)) {
                heartIcon.classList.remove("fa-regular");
                heartIcon.classList.add("fa-solid");
                heartIcon.style.color = "red";
            }


            heartIcon.addEventListener("click", () => {
                const id = destination.id;


                heartIcon.classList.toggle("fa-solid");
                heartIcon.classList.toggle("fa-regular");
                heartIcon.style.color = heartIcon.style.color === "red" ? "black" : "red";


                if (favorites.includes(id)) {
                    favorites = favorites.filter(favId => favId !== id);
                } else {

                    favorites.push(id);
                }

                localStorage.setItem("favorites", JSON.stringify(favorites));
            });
        });
    });
