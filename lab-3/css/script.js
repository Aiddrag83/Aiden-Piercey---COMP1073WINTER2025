// ToyCar Constructor
function ToyCar(
    brand,
    model,
    year,
    scale,
    color,
    material,
    manufacturer,
    price,
    weight,
    length,
    collectible,
    limitedEdition,
    openingDoors
) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.scale = scale;
    this.color = color;
    this.material = material;
    this.manufacturer = manufacturer;
    this.price = price;
    this.weight = weight;
    this.length = length;
    this.collectible = collectible;
    this.limitedEdition = limitedEdition;
    this.openingDoors = openingDoors;
}


// Create Toy Car Objects
const car1 = new ToyCar(
    "Lamborghini",
    "Aventador",
    2022,
    "1:24",
    "Yellow",
    "Diecast Metal",
    "Maisto",
    24.99,
    "1.2 lbs",
    "8 inches",
    true,
    false,
    true
);

const car2 = new ToyCar(
    "Ford",
    "Mustang GT",
    2021,
    "1:24",
    "Red",
    "Diecast Metal",
    "Jada Toys",
    19.99,
    "1.1 lbs",
    "7.5 inches",
    true,
    true,
    true
);


// Function to display a car
function displayCar(car) {

    const container = document.getElementById("carContainer");

    const card = document.createElement("div");
    card.classList.add("carCard");

    card.innerHTML = `
        <h2>${car.brand} ${car.model}</h2>
        <p><strong>Year:</strong> ${car.year}</p>
        <p><strong>Scale:</strong> ${car.scale}</p>
        <p><strong>Color:</strong> ${car.color}</p>
        <p><strong>Material:</strong> ${car.material}</p>
        <p><strong>Manufacturer:</strong> ${car.manufacturer}</p>
        <p><strong>Price:</strong> $${car.price}</p>
        <p><strong>Weight:</strong> ${car.weight}</p>
        <p><strong>Length:</strong> ${car.length}</p>
        <p><strong>Collectible:</strong> ${car.collectible}</p>
        <p><strong>Limited Edition:</strong> ${car.limitedEdition}</p>
        <p><strong>Opening Doors:</strong> ${car.openingDoors}</p>
    `;

    // Interaction Button
    const button = document.createElement("button");
    button.textContent = "Change Color";

    button.addEventListener("click", () => {
        car.color = "Black";
        card.querySelector("p:nth-child(4)").innerHTML =
            "<strong>Color:</strong> " + car.color;
    });

    card.appendChild(button);

    container.appendChild(card);
}


// Display cars on page
displayCar(car1);
displayCar(car2);