require("dotenv").config({ path: 'C:/Users/marve/OneDrive/Desktop/Play4Keeps/.env' });
const apiKey = process.env.apiKey;
const apiPassword = process.env.apiPassword;
//const shopName = "play4keeps-appreal";
const axios = require("axios");

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "https://p4kapparel.com/admin/api/2024-10/products.json",
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": apiPassword,
  },
};

const fetchProducts = async () => {
  await axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchProducts();

