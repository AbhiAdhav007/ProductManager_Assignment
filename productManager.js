"use strict";

let products = [

    {
        name : "iphone11",
        price : 40000,
        colors : ['red' , 'gold'],
    },
    {
        name : "iphone12",
        price : 55000,
        colors : ['red' , 'blue'],
    },
    {
        name : "iphone13",
        price : 65000,
        colors : ['sapphire' , 'white'],
    },
    {
        name : "iphone14",
        price : 71000,
        colors : ['green' , 'red' , 'blue' , 'white'],
    }
]


let addNewProducts = (ProdName , ProdPrice , ...args)=>{

    let product = {
        name : ProdName,
        price : ProdPrice,
        colors : [...args]
    }
    products.push(product);

    console.log(`${product.name} is added...!`);
    console.log(products)
}

function getProductDetails(ProdName){

    try{
        // const product = products.filter((product) =>{

        //     if(product.name === ProdName){
        //         return product;
        //     }
        // }
        // )
        // console.log(...product);

        const product = products.find(product => product.name===ProdName)

        if(product === undefined){
            throw new Error('Please enter valid product name...!');
        }

        console.log(product);

    }catch(err){
        alert(err);
    }
}


function updatePrice(prodName , newPrice){

    products.forEach((product) =>{

        if(product.name === prodName){
            console.log(`Privious price of product is :${product.price}`);
            product.price = parseInt(newPrice);
            console.log(`New price of product is :${product.price}`);

        }
    })
}

function removeProduct(prodName){

    let flag = false;
    products.forEach((product , index) =>{

        
        
        if(product.name === prodName){
            
            if (index > -1) { // only splice array when item is found
                products.splice(index, 1); // 2nd parameter means remove one item only
              }
              console.log(products);
              console.log('Product is removed')
              flag = true;
              return;
              
        }
    })

    if(!flag){
        console.log('Product that you want to remove is not valid')
    }
}



export{addNewProducts , getProductDetails , updatePrice , removeProduct};