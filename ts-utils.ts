import { Car, Cars } from "./types.js";

export function renderCars(car: Car): void {
    const carList = document.querySelector(".car-list");
    if (carList)
        carList.insertAdjacentHTML(
            "beforeend",
            `<li class="car-item">${car.car} ${car.type}</li>`
        );
}

export function deleteCar(name: string): void {
  const items = document.querySelectorAll(".car-item");
  if (!name) return alert("Please enter the brand");
  items.forEach((item) => {
    if (item.textContent?.startsWith(name)) {
      item.remove();
    }
  });
}

export function renderAllCars(): void {
  const stored = localStorage.getItem("cars");  
  const cars: Cars = stored ? JSON.parse(stored) : [];
  cars.forEach(renderCars);
}
