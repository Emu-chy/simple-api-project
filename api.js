
 
let apiData;


const cardDiv = document.getElementById("pDiv");
const container = document.getElementById("container");

function getData() {
  fetch("https://run.mocky.io/v3/4a8b3706-4c59-494a-a457-c91ec6914b93")
    .then((Response) => Response.json())
    .then((data) => api(data));
}

function api(data) {
  apiData = data;

  const allObj = Object.keys(data);
  const length = allObj.length;

  for (i = 0; i < length; i++) {
    
    const allElement = allObj[i];

    button(allElement);
  }
}

function button(receiveData) {
  const button = document.createElement("button");
  const buttonUpercase =receiveData[0].toUpperCase() + receiveData.substring(1);
  
  button.type = "submit";
  button.textContent = buttonUpercase.replace(/-/g, " ");

  button.className = " btn btn-outline-dark mb-2 mt-2 ms-2";
  
  button.onclick = function () {
    cardDiv.innerHTML = " ";
    const getData = apiData[receiveData];

    for (const showData of getData) {
    
      const div = document.createElement("div");
      div.className = " p-4 col-4";
      div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${showData.images[0]}" class="card-img-top" alt="...">
        
        <div class="card-body">
          <h5 class="card-title">${showData.title}</h5>
          <h5 class="card-title">${showData.brand}</h5>
          <p class="card-text">${showData.category}</p>
          <p class="card-text">${showData.description}</p>
          <p class="card-text">${showData.discountPercentage}</p>
          <p class="card-text">${showData.price}</p>
          
        </div>
      </div>
      `;

      cardDiv.appendChild(div);
    }
  };

  container.appendChild(button);
}

getData();
