import { renderCars, deleteCar, renderAllCars } from "./ts-utils.js";
import { Car, Cars } from "./types";

const form = document.querySelector(".add-form") as HTMLFormElement;
const delForm = document.querySelector(".del-form") as HTMLFormElement;
const delInput = document.querySelector(".del-input") as HTMLInputElement;

renderAllCars();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formEl = event.currentTarget as HTMLFormElement;
    const brandInput = formEl.elements.namedItem("brand") as HTMLInputElement;
    const modelInput = formEl.elements.namedItem("model") as HTMLInputElement;

    if (!brandInput.value || !modelInput.value)
        return alert("Please enter the brand and model");

    const newCar = { car: brandInput.value, type: modelInput.value };
    const cars: Cars = JSON.parse(localStorage.getItem("cars") as string) || [];
    cars.push(newCar);

    localStorage.setItem("cars", JSON.stringify(cars));
    renderCars(newCar);
    form.reset();
});

delForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = delInput.value;

    let cars: Cars = JSON.parse(localStorage.getItem("cars") as string);
    const newCars = cars.filter((car: Car) => car.car !== inputValue);

    localStorage.setItem("cars", JSON.stringify(newCars));
    deleteCar(inputValue);
    delForm.reset();
});
