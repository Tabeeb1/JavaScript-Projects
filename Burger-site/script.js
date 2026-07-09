import { menuArray } from './data.js'

const section = document.getElementById("food-section")

let currentCart = []
let orderProcess = false
let formSubmitted= false

document.addEventListener("click", function(e){
    let shouldRender = false;

    if(e.target.dataset.id){
        for(let item of menuArray){
            if(item.id === Number(e.target.dataset.id)){
                currentCart.push(item) 
                shouldRender = true;     
            }
        }
    }
    if(e.target.dataset.remove){
        for(let item of menuArray){
            if(item.id === Number(e.target.dataset.remove)){
                const index = currentCart.findIndex(item => item.id === Number(e.target.dataset.remove));
                if (index !== -1) {
                    currentCart.splice(index, 1);
                    shouldRender = true;
                }
            }
        }
    }
    if(e.target.dataset.checkout){
        orderProcess = true
        shouldRender = true;
    }
    if(shouldRender){
        render()
    }
})

document.addEventListener("submit", function(e){
    if(e.target.matches('.payment')){
        formSubmitted = true
    }
    orderProcess = false
    render()
})

function renderCart(){
    let totalPrice = 0
    let str = `<p class='order'>Your order</p>`
    for (let item of currentCart){
        str += `
            <div class='cart'>
                <div class='current-items'>
                    <p class='food-name'>${item.name}</p>
                    <button class='remove-button' data-remove=${item.id}>remove</button>
                </div>
                <p class='food-price'>$${item.price}</p>
            </div>
        `
        totalPrice += item.price
    }
    str += `
        <hr class='cart-break'>
        <div class='total-cart'>
            <p class='food-name'>Total Price</p>
            <p class='food-price'>$${totalPrice}</p>
        </div>
        <button class='checkout-button' data-checkout='checkout'>Complete Order</button>
    `
    return str
}

function renderItem(items){
    return  `
        <div class='food-item'>
            <div class='food-details'>
                <p class='food-emoji'>${items.emoji}</p>
                <div class='food-info'>
                    <p class='food-name'>${items.name}</p>
                    <p class='food-ingredients'>${items.ingredients.join()}</p>
                    <p class='food-price'>$${items.price}</p>
                </div>
            </div>
            <button class="add-button" data-id=${items.id}>+</button>
        </div>
        <hr>
    `
}

function paymentProcessForm(){
    return `
        <form class="payment">
            <p class='card-detail'>Enter Card Details</p>
            <div class='input-field'>
                <input type="text" class='input-box' placeholder="Enter your name" required>
                <input type="text" class='input-box' placeholder="Enter card number" required>
                <input type="text" class='input-box' placeholder="Enter CVV" required>
                <button class='pay-button'>Pay</button>
            </div>
        </form>
    `
}


function render(){
    let str = ''
    for(let items of menuArray){
        str += renderItem(items)
    }
    if(currentCart.length > 0){
        str += renderCart()
    }
    if(orderProcess){
        str += paymentProcessForm()
    }
    if(formSubmitted){
        str = ''
        for(let items of menuArray){
            str += renderItem(items)
        }
        str += `
            <p class='order-placed'>Thanks, your order is on the way</p>
        `
    }
    section.innerHTML = str
}


render()