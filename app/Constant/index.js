import imgs from "../../public/index";

const Products = [
  {
    id: "1",
    title: "Fresh Egyptian Clover",
    imageproduct: imgs.imageproduct1,
    span1: "AED 131.00 / Bale",
    span2: "Moraco",
    span3: "In Stock",
    details: "Rich in nutrients and locally harvested to ensure freshness.",
  },
  {
    id: "2",
    title: "High-Quality American Clover",
    imageproduct: imgs.imageproduct2,
    span1: "AED 131.00 / Bale",
    span2: "Egypt",
    span3: "In Stock",
    details: "Premium quality, cultivated in the USA, ideal for livestock.",
  },
  {
    id: "3",
    title: "Certified Australian Clover",
    imageproduct: imgs.imageproduct3,
    span1: "AED 131.00 / Bale",
    span2: "Germany",
    span3: "In Stock",
    details: "Certified organic, rich in essential nutrients, harvested fresh.",
  },
  {
    id: "4",
    title: "Natural Sudanese Clover",
    imageproduct: imgs.imageproduct4,
    span1: "AED 131.00 / Bale",
    span2: "USA",
    span3: "In Stock",
    details: "Pure, naturally grown, great for animal feed with high fiber.",
  },
  {
    id: "5",
    title: "Fresh Saudi Clover",
    imageproduct: imgs.imageproduct5,
    span1: "AED 131.00 / Bale",
    span2: "Spain",
    span3: "In Stock",
    details: "Locally sourced, ideal for enhancing animal diet.",
  },
  {
    id: "6",
    title: "Nutritious Spanish Clover",
    imageproduct: imgs.imageproduct6,
    span1: "AED 131.00 / Bale",
    span2: "Saudi",
    span3: "In Stock",
    details:
      "Known for its high protein content, perfect for balanced feeding.",
  },
];
// data/data.js
const animaldata = [
  {
    id: "1",
    title: "Camel",
    img: imgs.animal1,
    imgdetail: imgs.camel1,
    diet1: "Desert plants",
    diet2: "grasses",
    diet3: "thorny bushes",
    habitat: "Deserts and arid regions of the Middle East and Africa",
    lifespan: "40-50 years",
    types1: "Dromedary (one hump)",
    types2: "Bactrian (two humps)",
    uses: "Used for transportation, milk, meat, and wool.",
    characteristics: "Camels can survive long periods without water by storing fat in their humps.",
    historicalFacts: 'Known as the "Ship of the Desert," camels have been used in desert trade for thousands of years.',
    description: "The camel is a domesticated animal well adapted to desert life, known for its resilience and endurance.",
  },
  {
    id: "2",
    title: "Cow",
    img: imgs.animal2,
    imgdetail: imgs.cow1,
    diet1: "Grass",
    diet2: "grains",
    diet3: "silage",
    habitat: "Farms and agricultural regions worldwide",
    lifespan: "15-20 years",
    types1: "Dairy cows",
    types2: "Beef cattle",
    types3: "Wild cattle",
    uses: "Used for milk, meat, leather, and sometimes for labor in agriculture.",
    characteristics: "Cows are social animals that live in herds and have strong memories.",
    historicalFacts: "Cows were among the first animals domesticated by humans around 10,000 years ago.",
    description: "Cows are social, farm-raised animals that are primary sources of milk and meat globally.",
  },
  {
    id: "3",
    title: "Goat",
    img: imgs.animal3,
    imgdetail: imgs.goat,
    diet1: "Grass",
    diet2: "leaves",
    diet3: "fruits",
    habitat: "Mountains, forests, and farms worldwide",
    lifespan: "10-18 years",
    types1: "Mountain goats",
    types2: "Dairy goats",
    types3: "Meat goats",
    uses: "Used for milk, meat, and leather production.",
    characteristics: "Goats are curious animals, known for their climbing abilities and intelligence.",
    historicalFacts: "Goats were domesticated about 9,000 years ago in the Middle East.",
    description: "Goats are adaptable, resilient animals and are a major source of milk in some cultures.",
  },
  {
    id: "4",
    title: "Sheep",
    img: imgs.animal4,
    imgdetail: imgs.sheep,
    diet1: "Grass",
    diet2: "hay",
    diet3: "Greass",
    habitat: "Open pastures and farms in temperate regions",
    lifespan: "10-12 years",
    types1: "Wool sheep",
    types2: "Meat sheep",
    types3: "Dairy sheep",
    uses: "Primarily raised for wool, meat, and milk.",
    characteristics: "Sheep are shy animals that live in flocks and have excellent hearing.",
    historicalFacts: "Sheep wool is one of the oldest natural materials used in clothing production.",
    description: "Sheep are domesticated animals widely raised for wool and meat, commonly found on farms.",
  },
  {
    id: "5",
    title: "Horse",
    img: imgs.animal5,
    imgdetail: imgs.horse1,
    diet1: "Grass",
    diet2: "hay",
    diet3: "oats",
    habitat: "Farms, pastures, and some wild areas",
    lifespan: "25-30 years",
    types1: "Arabian",
    types2: "Thoroughbred",
    types3: "Wild horses",
    uses: "Used for riding, racing, farm work, and breeding.",
    characteristics: "Horses are strong animals with great endurance and high speeds.",
    historicalFacts: "Horses have been used by humans for transportation, agriculture, and in wars since ancient times.",
    description: "Horses are agile and powerful animals, symbolizing speed and strength, used in various sports and work.",
  },
  {
    id: "6",
    title: "Donkey",
    img: imgs.animal6,
    imgdetail: imgs.donkey1,
    diet1: "Grass",
    diet2: "hay",
    diet3: "legumes",
    habitat: "Villages, farms, and sometimes mountainous areas worldwide",
    lifespan: "30-50 years",
    types1: "Domestic donkey",
    types2: "African wild donkey",
    types3: "Sicilian donkey",
    uses: "Primarily used for carrying loads, transportation, and sometimes farm work.",
    characteristics: "Donkeys have strong endurance and excellent memory.",
    historicalFacts: "Donkeys have been domesticated for thousands of years and are known for their resilience.",
    description: "The donkey is a sturdy, intelligent animal commonly used by farmers for carrying heavy loads and working in agriculture.",
  },
];

const mediaimg = [
  {
    id:"1" ,
    img : imgs.img1media ,
  } ,
  {
    id:"2" ,
    img : imgs.img2media ,
  } ,
  {
    id:"2" ,
    img : imgs.img2media ,
  } ,
  {
    id:"3" ,
    img : imgs.img2media ,
  } ,
  {
    id:"4" ,
    img : imgs.img2media ,
  } ,
  {
    id:"5" ,
    img : imgs.img2media ,
  } ,
  {
    id:"6" ,
    img : imgs.img2media ,
  } ,
  {
    id:"7" ,
    img : imgs.img2media ,
  } ,
]


const mediavideo = [
  {
    id: "1",
    img: imgs.video1,
  },
  {
    id: "2",
    img: imgs.video2,
  },
  {
    id: "3",
    img: imgs.video3,
  },
  {
    id: "4",
    img: imgs.video4,
  },
  {
    id: "5",
    img: imgs.video5,
  },
  {
    id: "6",
    img: imgs.video6,
  },
  {
    id: "7",
    img: imgs.video7,
  },
];


const Newsdata = [
  {
    id: "1",
    img1: imgs.news,
    title: "Impact of Drought on Alfalfa Production (2021-2022)",
    prah: "Severe droughts in key U.S. farming states like California and Texas in 2021 severely reduced alfalfa production, reaching one of the lowest levels since 2012. This led to increased demand both domestically and internationally.",
  },
  {
    id: "2",
    img1: imgs.news,
    title: "Rising Demand for Alfalfa Exports (2021)",
    prah: "Global demand for alfalfa surged, especially from China, where dairy herd growth fueled the need for more feed. The U.S. became a major supplier, with over half of its alfalfa exports going to China.",
  },
  {
    id: "3",
    img1: imgs.news,
    title: "Feed Prices Rise Due to Drought and High Demand",
    prah: "The combination of ongoing droughts and increasing global demand has driven prices for alfalfa and other forage crops up significantly. Despite the continued drought conditions in the U.S., global demand, especially from China, keeps prices high.",
  },
  {
    id: "4",
    img1: imgs.news,
    title: "Climate Change Impact on Agriculture in Egypt",
    prah: "Studies in Egypt revealed the effects of climate change on agriculture, particularly alfalfa production. Some regions have seen declines in production due to rising temperatures and water scarcity in recent years.",
  },
  {
    id: "5",
    img1: imgs.news,
    title: "Innovations in Alfalfa Farming to Improve Yield",
    prah: "In recent years, agricultural companies have developed new technologies to improve alfalfa yield, such as modern irrigation techniques and drought-resistant varieties, helping farmers face the challenges of climate change.",
  },
  {
    id: "6",
    img1: imgs.news,
    title: "Sustainability in Alfalfa Farming Practices",
    prah: "There has been an increasing shift towards sustainable alfalfa farming, with farmers adopting practices that reduce water use and improve soil health. This includes better crop rotation, organic farming, and the use of precision agriculture techniques.",
  },
];

const certificate = [
  {
    id: "1",
    img: imgs.img1,
  },
  {
    id: "2",
    img: imgs.img4,
  },
  {
    id: "3",
    img: imgs.img3,
  },
  {
    id: "4",
    img: imgs.img4,
  },

];
export {mediavideo , mediaimg, Products, Newsdata, animaldata, certificate };
