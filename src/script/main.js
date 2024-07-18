let loadingSection = document.getElementById("loadingSection")
let menuToggle = document.getElementById("menuToggle")
let mainImage = document.querySelectorAll(".main__image")
let previousImage = document.getElementById("previousImage")
let nextImage = document.getElementById("nextImage")
let recipeTitle = document.getElementById("recipeTitle")
let recipeText = document.getElementById("recipeText")
let imageIndex = 0

function fadeX(element, time, moveX, opacity) {
    element.style.transition = `${time}`
    element.style.opacity = `${opacity}`
    element.style.transform = `translateX(${moveX})`
}

function setOpacity(element, opacity, time) {
    element.style.transition = `${time}`
    element.style.opacity = `${opacity}`
}

function slideImage(leftRight) {
    mainImage[imageIndex].style.opacity = "0"
    mainImage.forEach(element => {
        if (element.classList.contains("active")) {
            if (leftRight == "toRight") {
                element.classList.add("toRight")
                element.style.opacity = "0"
                setTimeout(() => {
                    element.classList.remove("active")
                    element.classList.remove("toRight")
                    element.style.opacity = ""
                    mainImage[imageIndex].classList.add("active")
                    mainImage[imageIndex].classList.add("backToRight")
                    setTimeout(() => {
                        mainImage[imageIndex].style.opacity = "1"
                        setTimeout(() => {
                            mainImage[imageIndex].classList.remove("backToRight")
                        }, 500);
                    }, 100);
                }, 500);
            } else {
                element.classList.add("toLeft")
                element.style.opacity = "0"
                setTimeout(() => {
                    element.classList.remove("active")
                    element.classList.remove("toLeft")
                    element.style.opacity = ""
                    mainImage[imageIndex].classList.add("active")
                    mainImage[imageIndex].classList.add("backToLeft")
                    setTimeout(() => {
                        mainImage[imageIndex].style.opacity = "1"
                        setTimeout(() => {
                            mainImage[imageIndex].classList.remove("backToLeft")
                        }, 500);
                    }, 100);
                }, 500);
            }
        }
        setOpacity(recipeTitle, "0", "0.5s")
        setOpacity(recipeText, "0", "0.5s")
        setTimeout(() => {
            switch (imageIndex) {
                case 0:
                    setOpacity(recipeTitle, "1", "0.5s")
                    setOpacity(recipeText, "1", "0.5s")
                    recipeTitle.textContent = "Caffé Mocha"
                    recipeText.textContent = `Um pouco de chantilly e uma pitada de raspas de chocolate são os elementos deste clássico Starbucks® rico em chocolate.`
                    break;
                case 1:
                    setOpacity(recipeTitle, "1", "0.5s")
                    setOpacity(recipeText, "1", "0.5s")
                    recipeTitle.textContent = "Latte Macchiato"
                    recipeText.textContent = `É um café de torra média levemente torrado, mas cheio de sabor. Adicione um pouco de espuma de leite e terá um delicioso macchiato.`
                    break;
                case 2:
                    setOpacity(recipeTitle, "1", "0.5s")
                    setOpacity(recipeText, "1", "0.5s")
                    recipeTitle.textContent = "Affogato"
                    recipeText.textContent = `O gelado do sorvete encontra o doce e torrado do espresso. O Affogato é fácil de preparar e um deleite para os sentidos. Aprenda como preparar essa sobremesa italiana, coberta com uma pitada de chocolate e um toque de flor de sal.`
                    break;
                case 3:
                    setOpacity(recipeTitle, "1", "0.5s")
                    setOpacity(recipeText, "1", "0.5s")
                    recipeTitle.textContent = "Iced Caramel Macchiato"
                    recipeText.textContent = `Café rico com um toque de baunilha, adoçado com um fio de caramelo. É fresco, é refrescante e 100% delicioso, sempre.`
                    break;
                default:
                    break;
            }
        }, 500);
    })
}

previousImage.onclick = function () {
    if (imageIndex == 0) {
        imageIndex = 3
        slideImage('toLeft')
    } else {
        imageIndex = imageIndex - 1
        slideImage('toLeft')
    }
}

nextImage.onclick = function () {
    if (imageIndex == 3) {
        imageIndex = 0
        slideImage('toRight')
    } else {
        imageIndex = imageIndex + 1
        slideImage('toRight')
    }
}

window.addEventListener("load", () => {
    setTimeout(() => {
        loadingSection.classList.add("desative")
    }, 2000);
})


menuToggle.onclick = function () {
    menuToggle.classList.toggle("active")
}