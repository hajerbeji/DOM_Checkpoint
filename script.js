// variables
let plus_btn = document.getElementsByClassName("plus-btn")
let minus_btn = document.getElementsByClassName("minus-btn")
let heart=document.getElementsByClassName("like")
let quant=document.getElementsByClassName("Quant")
let delete_btn=document.getElementsByClassName("delete")
let item=document.getElementsByClassName("Item")
let final_price=document.getElementById("finalPrice")
let prices=[1379,176,500]

// for Loop
for(let index=0;index<plus_btn.length;index++){
    // plus button

    plus_btn[index].addEventListener("click",function(){
        quant[index].value=Number(quant[index].value)+1
        final_price.value=Number(final_price.value)+prices[index]
    })

    // minus button

    minus_btn[index].addEventListener("click",function(){
        if(quant[index].value!=="0"){
            quant[index].value=Number(quant[index].value)-1
            final_price.value=Number(final_price.value)-prices[index]
        }
        
    })

    // heart button
    heart[index].addEventListener("click",function(){
        if(heart[index].style.color==="red"){
            heart[index].style.color="black"
        }
        else{
            heart[index].style.color="red"
        }
    })

    // delete button
    delete_btn[index].addEventListener("click",function(){
        item[index].style="display:none;"
        final_price.value=Number(final_price.value)-prices[index]*Number(quant[index].value)
    })
}