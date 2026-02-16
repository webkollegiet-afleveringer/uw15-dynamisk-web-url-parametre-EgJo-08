
const params = new URLSearchParams(window.location.search);


const id = params.get("id");


fetch(`${id}.json`)
    .then(response => response.json())
    .then(data => {

        const container = document.getElementById("destination-container");

        container.innerHTML = `
            <h1>${data.title}</h1>
            <img src="img/${data.image}" width="300">
            <h3>${data.subtitle}</h3>
            <p>${data.text}</p>

            <h4>Facilities:</h4>
            <ul>
                ${data.facilities.map(f => `<li>${f}</li>`).join("")}
            </ul>
        `;
    });
