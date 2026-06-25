
const crops = [
    "Wheat","Rice","Maize","Potato","Sugarcane",
    "Barley","Bajra","Jowar","Gram","Mustard",
    "Soybean","Groundnut","Cotton","Turmeric",
    "Onion","Tomato","Garlic","Chilli","Moong",
    "Urad","Arhar","Masoor","Peas","Sunflower",
    "Sesamum","Tea","Coffee","Apple","Banana",
    "Mango","Orange","Grapes","Papaya","Guava"
];
const cropSelect = document.querySelector("#crop");

crops.forEach(crop => {
    cropSelect.innerHTML += `
        <option value="${crop}">
            ${crop}
        </option>
    `;
});
const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
];
const stateSelect = document.querySelector("#state");

states.forEach(state => {
    stateSelect.innerHTML += `
        <option value="${state}">
            ${state}
        </option>
    `;
});
const mandiData = {

    "Uttar Pradesh": [
        "Kanpur Mandi",
        "Lucknow Mandi",
        "Agra Mandi",
        "Meerut Mandi",
        "Varanasi Mandi",
        "Prayagraj Mandi",
        "Bareilly Mandi",
        "Gorakhpur Mandi"
    ],

    "Punjab": [
        "Ludhiana Mandi",
        "Amritsar Mandi",
        "Patiala Mandi",
        "Jalandhar Mandi",
        "Bathinda Mandi"
    ],

    "Haryana": [
        "Karnal Mandi",
        "Hisar Mandi",
        "Rohtak Mandi",
        "Kurukshetra Mandi",
        "Panipat Mandi"
    ],

    "Rajasthan": [
        "Jaipur Mandi",
        "Kota Mandi",
        "Jodhpur Mandi",
        "Bikaner Mandi",
        "Ajmer Mandi"
    ],

    "Madhya Pradesh": [
        "Indore Mandi",
        "Bhopal Mandi",
        "Ujjain Mandi",
        "Gwalior Mandi",
        "Jabalpur Mandi"
    ],

    "Maharashtra": [
        "Pune Mandi",
        "Nagpur Mandi",
        "Nashik Mandi",
        "Kolhapur Mandi",
        "Aurangabad Mandi"
    ],

    "Gujarat": [
        "Ahmedabad Mandi",
        "Rajkot Mandi",
        "Surat Mandi",
        "Vadodara Mandi",
        "Bhavnagar Mandi"
    ],

    "Bihar": [
        "Patna Mandi",
        "Muzaffarpur Mandi",
        "Gaya Mandi",
        "Bhagalpur Mandi",
        "Purnia Mandi"
    ],

    "West Bengal": [
        "Kolkata Mandi",
        "Siliguri Mandi",
        "Durgapur Mandi",
        "Asansol Mandi",
        "Malda Mandi"
    ],

    "Karnataka": [
        "Bengaluru Mandi",
        "Mysuru Mandi",
        "Hubli Mandi",
        "Belagavi Mandi",
        "Mangaluru Mandi"
    ],

    "Tamil Nadu": [
        "Chennai Mandi",
        "Coimbatore Mandi",
        "Madurai Mandi",
        "Salem Mandi",
        "Tiruchirappalli Mandi"
    ],

    "Telangana": [
        "Hyderabad Mandi",
        "Warangal Mandi",
        "Karimnagar Mandi",
        "Nizamabad Mandi",
        "Khammam Mandi"
    ],

    "Andhra Pradesh": [
        "Vijayawada Mandi",
        "Guntur Mandi",
        "Visakhapatnam Mandi",
        "Kurnool Mandi",
        "Tirupati Mandi"
    ],

    "Chhattisgarh": [
        "Raipur Mandi",
        "Bilaspur Mandi",
        "Durg Mandi",
        "Korba Mandi",
        "Jagdalpur Mandi"
    ],

    "Odisha": [
        "Bhubaneswar Mandi",
        "Cuttack Mandi",
        "Sambalpur Mandi",
        "Rourkela Mandi",
        "Balasore Mandi"
    ]
};
const mandiSelect = document.querySelector("#mandi");

stateSelect.addEventListener("change", () => {

    const selectedState = stateSelect.value;

    mandiTom.clearOptions();

    if (!mandiData[selectedState]) return;

    mandiData[selectedState].forEach(mandi => {
        mandiTom.addOption({
            value: mandi,
            text: mandi
        });
    });

    mandiTom.refreshOptions(false);
});

new TomSelect("#crop");
new TomSelect("#state");
const mandiTom = new TomSelect("#mandi");