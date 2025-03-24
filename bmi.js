const btnE1=document.getElementById("btn");
const bmiinput=document.getElementById('bmi-result');
const weightcondition= document.getElementById('Weight-condition');

function calculateBMI(){
    const heightval = document.getElementById("height").value /100
    const weightval = document.getElementById("weight").value
    console.log(heightval,weightval);
const bmivalue=weightval/(heightval * heightval)
bmiinput.value=bmivalue; 
if(bmivalue < 18.5){
    weightcondition.innerText="under weight";

}else if(bmivalue >=18.5 && bmivalue <=24.9)
{
    weightcondition.innerText="normal weight";
}
else if(bmivalue >=25 && bmivalue <=29.9)
{
    weightcondition.innerText="over weight"
}
else if(bmivalue >=30){
    weightcondition.innerText="obesity";
}
}



btnE1.addEventListener("click",calculateBMI)