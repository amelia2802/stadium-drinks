import {productArray} from "./data.js"
function getProducts(){
    let typeProducts = ""

    productArray.forEach(function(product) {
        typeProducts+=
        `
            <div class="product-card">
                <img class="product-pic" src="${product.img}"
                <h3 class="product-name">${product.name}</h3>
                <div id="product-data">
                    <p class="price">$ ${product.price}</p>
                </div>
                <button type="submit" id="order" data-vote=${product.id}>Order a free Sample</button>
            </div>
        `
        
    });
    return typeProducts
}

function render(){
    document.getElementById("products").innerHTML = getProducts()   
}

render()
