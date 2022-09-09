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
    localStorage.setItem(product, quantitiy);
    
    //display product in UI
    //simple way
    displayProductAndQuantityUI(product, quantitiy)
}

const displayProductAndQuantityUI = (product, quantitiy) =>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantitiy}`;

    productContainer.appendChild(li);

}