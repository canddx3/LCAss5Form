// Write your JavaScript code here!


fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function (json) {
      let index = Math.floor(Math.random()*6);
      console.log(index)
      const missionTarget = document.getElementById("missionTarget")
      missionTarget.innerHTML = 
      `<div>
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[index].name}</li>
         <li>Diameter: ${json[index].diameter}</li>
         <li>Star: ${json[index].star}</li>
         <li>Distance from Earth: ${json[index].distance}</li>
         <li>Number of Moons: ${json[index].moons}</li>
      </ol>
      <img src="${json[index].image}">
      </div>`
   });
});

let pilotName = document.querySelector("input[name=pilotName]");
let copilotName = document.querySelector("input[name=copilotName]");
let fuelLevel = document.querySelector("input[name=fuelLevel]");
let cargoMass = document.querySelector("input[name=cargoMass]");
let launchStatus = document.getElementById("launchStatus");
let faultyItems = document.getElementById("faultyItems");
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");
let fuelStatus = document.getElementById("fuelStatus");
let cargoStatus = document.getElementById("cargoStatus");

let form = document.getElementById("launchForm");
form.addEventListener("submit", (event) => {

  const letters = /^[a-zA-Z]+$/;
  const numbers = /^[0-9]+$/;
   if (pilotName.value === '' || !letters.test(pilotName.value)) {
      alert("please enter a Pilots name");
   }

   if (copilotName.value === '' || !letters.test(copilotName.value)) {
      alert("please enter a Copilots name");
   } 
   
   if (!numbers.test(fuelLevel.value)) {
      alert("please enter a valid fuel level number")
   } 
   if (!numbers.test(cargoMass.value)) {
      alert("please enter a valid cargo mass number")
   }
   event.preventDefault();

   if (fuelLevel.value <=10000) {
      faultyItems.style.visibility = "visible";
      launchStatus.innerText = 'Shuttle not ready for launch';
      launchStatus.style.color = 'red';
      pilotStatus.innerText = `${pilotName.value} Ready`;
      copilotStatus.innerText = `${copilotName.value} Ready`;
      fuelStatus.innerText = 'Not enough fuel';
   } else if
      (cargoMass.value > 10000) {
      faultyItems.style.visibility = "visible";
      launchStatus.innerText = 'Shuttle not ready for launch';
      launchStatus.style.color = 'red';
      pilotStatus.innerText = `${pilotName.value} Ready`;
      copilotStatus.innerText = `${copilotName.value} Ready`;
      cargoStatus.innerText = 'To much weight';
   } else {
      faultyItems.style.visibility = "visible";
      launchStatus.innerText = 'Shuttle is ready to launch';
      launchStatus.style.color = 'green';
      pilotStatus.innerText = `${pilotName.value} Ready`;
      copilotStatus.innerText = `${copilotName.value} Ready`;
      console.log(pilotName.value)

   }
});
   