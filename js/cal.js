// str = str.substring(0, str.length - 1);
const item = document.querySelectorAll("#num");
const opr = document.querySelectorAll("#opr");
const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#operator");
const input3 = document.querySelector("#num2");
const del = document.querySelector("#del");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form");
const result = document.querySelector("#result");
const reset = document.querySelector("#reset");
let box = input1;
let value = "";

let input = [input1, input2, input3];
input.forEach((inp)=>{
    inp.addEventListener("click",()=>{
        
        box = inp;
    })
})

reset.addEventListener("click",()=>{
    form.reset();
    result.innerHTML = "";
    value = "";
    box = input1;
})

document.addEventListener('click',(e)=>{
    if(input2.value){
        box = input3;
    }else if(!input.value){
        box = input1;
    }
    if(e.target == input1){
        box = input1;
        value = input1.value;
    }else if(e.target == input2){
        box = input2;
        value = input2.value;
    }else if (e.target == input3){
        box = input3;
        value = input3.value;
    }

})
item.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(item.innerText == "Neg"){
            box.value = "-" + box.value;
            value = "-" + value;
        }else{
            value += item.innerText;
            box.value = value;
        }
        
    })
})

opr.forEach((op)=>{
    op.addEventListener("click", ()=>{
        box = input2;
        value = op.innerText;
        box.value = op.innerText;
        value = "";
    })
})

del.addEventListener("click", ()=>{
    value = value.substring(0, value.length - 1);
    box.value = value;
})

submit.addEventListener("click", ()=>{
    if(input1.value && input2.value && input3.value ){
        box = input1;
        const a = parseFloat(input1.value);
        const b = input2.value;
        const c = parseFloat(input3.value);
        let ans = 0;
        switch(b){
            case "+":
                ans = a + c;
                break;
            case "-":
                ans = a - c;
                break;
            case "*":
                ans = a * c;
                break;

            case "/":
                ans = a / c;
                break;
            case "%":
                ans = a % c;
                break;
        }
        result.innerText = `${a} ${b} ${c} = ${ans}`;
        value = "";
        form.reset();
    }else{
        result.innerText = "Enter Value";
    }
    

    
})
