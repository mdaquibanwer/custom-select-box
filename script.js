const container = document.querySelector(".container")
const selectBox = container.querySelector(".select-box")
const OptionsofCountry = container.querySelector(".options")
const searchInput = container.querySelector("input");

// array of Some Popular Countries
const AllCountries = ["Afghanistan","Argentina","Australia","Austria","Bangladesh","Brazil","Canada","China","Croatia","Egypt","France","Germany","India","Indonesia","Iran","Iraq","Israel","Italy","Jamaica","Japan","North Korea","South Korea","Kuwait","Malaysia","Mexico","Morocco","Nepal","Netherlands","New Zealand","Nigeria","Pakistan","Philippines","Poland","Portugal","Qatar","Russia","Saudi Arabia","Singapore","South Africa","Spain","Sri Lanka","Switzerland","Taiwan","Tajikistan","Thailand","Trinidad and Tobago","Turkey","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States Of America","Uruguay","Uzbekistan","Vatican City","Venezuela","Vietnam","Yemen","Zimbabwe"
]

// Adding All Countries of the array in the options
const addCountry = ()=>{
    OptionsofCountry.innerHTML = "";
    AllCountries.forEach(country=>{
        let li = `<li onClick="updateName(this)">${country}</li>`;
        OptionsofCountry.insertAdjacentHTML("beforeend",li)
    })
}

// diplaying the selected country
function updateName(clickedcountry){
    selectBox.firstElementChild.innerText = clickedcountry.innerText;
    searchInput.value ="";
    container.classList.remove("active")
}

// adding event listener on the input 
searchInput.addEventListener("input",()=>{
    let arr = [];   // creating an empty array of the country
    let searchCountry = searchInput.value.toLowerCase();
    // filtering all countries to be shown while searching and return them
    arr = AllCountries.filter(data=>{
        return data.toLowerCase().startsWith(searchCountry);
    }).map(data => `<li onClick="updateName(this)">${data}</li>`).join("") // mapping returned country in li and join the li of country
    // console.log(arr)
    OptionsofCountry.innerHTML = arr ? arr: `<p>Sorry, Not Found</p>`;
});

// Add Event Listener On The Main Select Box
selectBox.addEventListener("click",()=>{
    container.classList.toggle("active")
    addCountry();
})