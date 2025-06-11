import { renderCars, deleteCar, renderAllCars } from "./ts-utils.js";
const form = document.querySelector(".add-form");
const delForm = document.querySelector(".del-form");
const delInput = document.querySelector(".del-input");
renderAllCars();
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const brandInput = formEl.elements.namedItem("brand");
    const modelInput = formEl.elements.namedItem("model");
    if (!brandInput.value || !modelInput.value)
        return alert("Please enter the brand and model");
    const newCar = { car: brandInput.value, type: modelInput.value };
    const cars = JSON.parse(localStorage.getItem("cars")) || [];
    cars.push(newCar);
    localStorage.setItem("cars", JSON.stringify(cars));
    renderCars(newCar);
    form.reset();
});
delForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = delInput.value;
    let cars = JSON.parse(localStorage.getItem("cars"));
    const newCars = cars.filter((car) => car.car !== inputValue);
    localStorage.setItem("cars", JSON.stringify(newCars));
    deleteCar(inputValue);
    delForm.reset();
});
