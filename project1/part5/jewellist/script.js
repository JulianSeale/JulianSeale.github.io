
  const getJewelryData = async () => {
    
    const url = "https://julianseale.github.io/project1/part5/json/jewel.json";
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const createJewelrySection = async (jewelry) => {
    return new Promise(async (resolve) => {
      var jewelrySection = document.createElement("div");
      jewelrySection.className = "jewelry-item";
  
      var image = document.createElement("img");
      image.src = jewelry.Image;
      image.alt = jewelry.Name;
      image.width = 200;
  
      var textSection = document.createElement("div");
      textSection.className = "text-section";
  
      var title = document.createElement("h2");
      title.textContent = jewelry.Name;
  
      var gemType = document.createElement("p");
      gemType.innerHTML = `<strong>Gem Type:</strong> ${jewelry["Gem Type"]}`;
  
      var price = document.createElement("p");
      price.innerHTML = `<strong>Price:</strong> $${jewelry.Price.toFixed(2)}`;
  
      var description = document.createElement("p");
      description.innerHTML = `<strong>Description:</strong> ${jewelry.Description}`;
      description.style.fontStyle = "italic";
  
     
      var addButton = document.createElement("button");
      addButton.textContent = "Add";
      var subButton = document.createElement("button");
      subButton.textContent = "Sub";
  
      textSection.appendChild(title);
      textSection.appendChild(gemType);
      textSection.appendChild(price);
      textSection.appendChild(description);
  
      
      textSection.appendChild(addButton);
      textSection.appendChild(subButton);
  
      jewelrySection.appendChild(image);
      jewelrySection.appendChild(textSection);
  
      resolve(jewelrySection);
    });
  };
  
  const displayJewelry = async () => {
    var jewelryListDiv = document.getElementById("jewelryList");
    let jewelryData = await getJewelryData();
  
    for (const category in jewelryData) {
      const categoryItems = jewelryData[category];
  
      for (const jewelry of categoryItems) {
        const jewelrySection = await createJewelrySection(jewelry);
        jewelryListDiv.appendChild(jewelrySection);
      }
    }
  };
  
  window.onload = () => displayJewelry();
  