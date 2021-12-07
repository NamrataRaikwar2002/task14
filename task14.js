var initialprice=document.querySelector("#initial-price");
var stockquantity=document.querySelector("#Quantity");
var currentprice=document.querySelector('#current-price');
var button=document.querySelector("#check-btn");
var output=document.querySelector("#out-put");

function calculateprofitloss(initial,quantity,current){
    if (initial>current){
        var loss=(initial-current)*quantity
        var losspercentage=(loss/initial)*100
        output.innerText=(`the LOSS is ${loss} and the LOSS PERCENTAGE is ${losspercentage}%`);

    }
    else if(current>initial){
            var profit=(current-initial)*quantity;
            var profitpercentage=(profit/initial)*100;
            output.innerText=(`The PROFIT is ${profit} and PROFIT PERCENTAGE is ${profitpercentage}%`)
    }else{
        output.innerText=("No profit!! No loss!!");
    }
}





function clickhandler(){
    calculateprofitloss(Number(initialprice.value),Number(quantity.value),Number(currentprice.value));
}


button.addEventListener("click",clickhandler)