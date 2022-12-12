const getInputValueById = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}




const addProduct = () =>{
    const product = getInputValueById('product-name-field');
    const quantitiy = getInputValueById('product-quantity-field')
    // set product in local storage
    // localStorage.setItem(product, quantitiy);
    addCartToLocalStorage(product, quantitiy)
    
    //display product in UI
    //simple way
    addProductToDisplay(product, quantitiy)
}

const getCartFromLocalStorage = () =>{
    let saveCart = localStorage.getItem('cart');
    let cart = {};
    if(saveCart){
         cart = JSON.parse(saveCart)
    }
    return cart;
}

const addCartToLocalStorage = (product, quantitiy) =>{
    const cart = getCartFromLocalStorage();
    //add product to the object as property
    cart[product] = quantitiy;
    const cartStringified = JSON.stringify(cart);

    //save to local storage
    localStorage.setItem('cart', cartStringified);

}

const addProductToDisplay = (product, quantitiy) =>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantitiy}`;

    productContainer.appendChild(li);

}

const displayProduct = () => {
    const cart = getCartFromLocalStorage();
    for(const product in cart){
        // console.log(product);
        const quantitiy = cart[product]
        addProductToDisplay(product, quantitiy)
    }
}
displayProduct()
