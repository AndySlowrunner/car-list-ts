export function renderCars(car) {
    const carList = document.querySelector(".car-list");
    if (carList)
        carList.insertAdjacentHTML("beforeend", `<li class="car-item">${car.car} ${car.type}</li>`);
}
export function deleteCar(name) {
    const items = document.querySelectorAll(".car-item");
    if (!name)
        return alert("Please enter the brand");
    items.forEach((item) => {
        var _a;
        if ((_a = item.textContent) === null || _a === void 0 ? void 0 : _a.startsWith(name)) {
            item.remove();
        }
    });
}
export function renderAllCars() {
    const stored = localStorage.getItem("cars");
    const cars = stored ? JSON.parse(stored) : [];
    cars.forEach(renderCars);
}
