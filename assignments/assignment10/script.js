
class Toy {
    constructor(name, image, price, rating, ageRange) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.rating = rating;
        this.ageRange = ageRange;
    }

    get details() {
        return `Name: ${this.name}<br>Price: $${this.price}<br>Rating: ${this.rating}/5<br>Age Range: ${this.ageRange}`;
    }

    getToyItem() {
        return {
            name: this.name,
            image: this.image,
            price: this.price,
            rating: this.rating,
            ageRange: this.ageRange,
        };
    }
}



const toys = [
    new Toy("Toy 1", "images/toy1.jpg", 19.99, 4.5, "3-6 years"),
    new Toy("Toy 2", "images/toy2.jpg", 29.99, 4.0, "5-10 years"),
    new Toy("Toy 3", "images/toy3.jpg", 14.99, 4.2, "2-5 years"),
    new Toy("Toy 4", "images/toy4.png", 24.99, 4.8, "4-8 years"),
    new Toy("Toy 5", "images/toy5.jpeg", 9.99, 3.9, "1-4 years"),
    new Toy("Toy 6", "images/toy6.jpg", 39.99, 4.7, "6-12 years"),
];


const toyList = document.getElementById('toyList');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');
const overlayDetails = document.getElementById('overlay-details');

toys.forEach((toy) => {
    const toyItem = document.createElement('div');
    toyItem.classList.add('toy');

    const image = document.createElement('img');
    image.src = toy.image;
    image.alt = toy.name;

    const caption = document.createElement('div');
    caption.classList.add('toy-caption');
    caption.innerHTML = toy.details;

    toyItem.appendChild(image);
    toyItem.appendChild(caption);
    toyList.appendChild(toyItem);

    toyItem.addEventListener('click', () => {
        overlay.style.display = 'flex';
        overlayImage.src = toy.image;
        overlayImage.alt = toy.name;
        overlayDetails.innerHTML = toy.details;
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});
