const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

const h3 = document.getElementsByTagName("h3");

h3[0].classList.add("slowText");

for (let i = 1; i < h3.length; i++) {
    h3[i].style.opacity = "0";
}

const elements = [one, two, three, four, five];

elements.forEach((element, index) => {
    element.addEventListener("click", () => {

        elements.forEach((e, index2) => {
            e.style.flex = "1";
            h3[index2].style.opacity = "0";
            h3[index2].classList.remove("slowText");
        });

        element.style.flex = "10";
        h3[index].style.opacity = "1";
        h3[index].classList.add("slowText");
    });
});
