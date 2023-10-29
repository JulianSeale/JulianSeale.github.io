document.addEventListener("DOMContentLoaded", function () {
    const gemForm = document.getElementById("gem-form");
    const gemTypeInput = document.getElementById("gem-type");
    const gemPriceInput = document.getElementById("gem-price");
    const gemImageInput = document.getElementById("gem-image");
    const addButton = document.getElementById("add-button");
    const subButton = document.getElementById("sub-button");
    const gemList = document.getElementById("gem-items");
    const selectedImage = document.getElementById("selected-image");

    addButton.addEventListener("click", function () {
        const gemType = gemTypeInput.value;
        const gemPrice = parseFloat(gemPriceInput.value);
        const imageFile = gemImageInput.files[0];

        if (gemType && !isNaN(gemPrice) && imageFile) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>${gemType}</strong> - $${gemPrice.toFixed(2)}
                <br>
                <img src="${URL.createObjectURL(imageFile)}" alt="${gemType}">
            `;
            gemList.appendChild(listItem);
            selectedImage.src = "placeholder.png"; // Reset the image preview

            // Clear input fields
            gemTypeInput.value = "";
            gemPriceInput.value = "";
            gemImageInput.value = "";
        }
    });

    subButton.addEventListener("click", function () {
        // Remove the last item in the list
        const lastItem = gemList.lastElementChild;
        if (lastItem) {
            gemList.removeChild(lastItem);
        }
    });

    gemImageInput.addEventListener("change", function () {
        if (gemImageInput.files && gemImageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                selectedImage.src = e.target.result;
            };
            reader.readAsDataURL(gemImageInput.files[0]);
        }
    });
});
