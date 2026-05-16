currentimage = document.getElementById("currentimage")

function setphoto(name) {
    currentimage.src = `./images/${name}.jpg`
}

setphoto("cat1")