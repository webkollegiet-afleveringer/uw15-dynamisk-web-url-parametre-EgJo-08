let favorit = {
    
}

favorit[destination.id] = true;

const heart = div.querySelector(".heart");

heart.addEventListener("click", function () {
    const id = this.dataset.id;

    this.classList.toggle("active");

    if (favorit[id]) {
        delete favorit[id];
    } else {
        favorit[id] = true;
    }

    console.log(favorit);
});