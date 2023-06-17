// ------------------plus button-------------------
let plus = document.querySelectorAll('.plus-btn');
plus.forEach(function(plus){
    plus.addEventListener('click',function(){
        let valeur = plus.previousElementSibling;
        let x = parseFloat(valeur.value);
        let y = x + 1;
        valeur.value = y;
    })
})
// ------------------End plus button-------------------



// ------------------minus button-------------------
let minus = document.querySelectorAll('.minus-btn');
minus.forEach(function(minus){
    minus.addEventListener('click',function(){
        let valeur = minus.nextElementSibling;
        let x = parseFloat(valeur.value);
        let y = x - 1;
        valeur.value = y;
    })
})
// ------------------End minus button-------------------


// ------------------Delete button-------------------
let del=document.querySelectorAll('.delete');
del.forEach(function(del) {
    del.addEventListener('click', function() {
      del.parentNode.remove();
    })
  });

// ------------------End Delete button-------------------


// ------------------clickable heart-------------------
let heart=document.querySelectorAll('.like');
heart.forEach(function(heart){
    heart.addEventListener('click',function(){
       heart.style.color = 'red';
    })
})
// ------------------End clickable heart-------------------


// ------------------Calculate Price-------------------

// step 1 :create a function which calculate the total price    
let prixTotal=document.getElementById('finalPrice');
function final_price(){
    let total=0;
    let carts=document.querySelectorAll('.Item');
    carts.forEach(function(cart){
        let quantity=parseFloat(cart.querySelector('.Quant').value);
        let prix=parseFloat(cart.querySelector('.price').textContent);
        total=total+(quantity*prix);
    })
    prixTotal.value=total.toFixed(2);
}

// step2 : when we adjust the quantity through "+" and "-" buttons
let plus_And_Minus=document.querySelectorAll('.quantity button');
plus_And_Minus.forEach(function(button){
    button.addEventListener('click',function(){
        let input=button.parentNode.querySelector('.Quant');
        let val=parseFloat(input.value);
        if(button.classList.contains('minus-btn')){
            val--;

        }else if(button.classList.contains('plus-btn')){
            val++;
        }
        final_price();
    })
})

//step 3 : when we delete an item 
let supp=document.querySelectorAll('.delete');
supp.forEach(function(button){
    button.addEventListener('click',function(){
        final_price();
    })
})
// ------------------End Calculate Price-------------------
