import { addNewProducts , getProductDetails , updatePrice,removeProduct } from "./productManager.js";


let name;

let price;

let colors = []



const colorBtn = document.getElementById('colorBtn')
const submitBtn = document.getElementById('submitBtn');
let color = document.getElementById('color')
const productName = document.getElementById('name');
const productPrice = document.getElementById('price');

const getProductBtn = document.getElementById('getProduct');
const getProdName = document.getElementById('product-name');

const uodatePriceBtn = document.getElementById('updatePrice');
const updatePriceOfProdName = document.getElementById('prodToUpdatePrice');
const newPriceName = document.getElementById('new-price')

//remove product
const RemoveBtn = document.getElementById('removeBtn');
const removeProductName = document.getElementById('removeProd');


submitBtn.addEventListener('click', (event) => {


    event.preventDefault();

    name = productName.value;
    price = parseInt(productPrice.value);

    if (productName.value) {
        productName.value = "";
    }
    if (productPrice.value) {
        productPrice.value = "";
    }

    // let product = {

    //     name,
    //     price,
    //     colors,
    // }

    addNewProducts(name, price, ...colors);

})

colorBtn.addEventListener('click', (event) => {
    event.preventDefault();

    colors.push(color.value);

    if (color.value) {
        color.value = "";
    }

})

//Get product Details

getProductBtn.addEventListener('click' , (event)=>{

    event.preventDefault();

    getProductDetails(getProdName.value);
    if (getProdName.value) {
        getProdName.value = "";
    }
})

//update the price of the product

uodatePriceBtn.addEventListener('click' , (event)=>{

    event.preventDefault();

    updatePrice(updatePriceOfProdName.value , newPriceName.value);
    if (updatePriceOfProdName.value) {
        updatePriceOfProdName.value = "";
    }
    if (newPriceName.value) {
        newPriceName.value = "";
    }
})
// updatePrice("iphone13" , "40000")


//remove item
RemoveBtn.addEventListener('click' ,(event)=>{

    event.preventDefault();

    removeProduct(removeProductName.value);
    if(removeProductName.value){
        removeProductName.value = "";
    }
})