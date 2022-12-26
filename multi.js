const personalInfo=document.querySelector(".containerforPersonalINfo");
const selectContent=document.querySelector(".containerforselect");
const nextStep=document.getElementById("Next");
const hover=document.getElementById("circle2");

const inputName=document.getElementById("Name");
const inputEmail=document.getElementById("Email");
const inputphoneNum=document.getElementById("phone");


function next(){
    !inputName.value? inputName.classList.add("error"):inputName.classList.remove("error");
    !inputName.value? inputName.parentElement.classList.add("error_msg"):inputName.parentElement.classList.remove("error_msg");
    !inputEmail.value?inputEmail.classList.add("error"):inputEmail.classList.remove("error");
    !inputEmail.value?inputEmail.parentElement.classList.add("error_msg"):inputEmail.parentElement.classList.remove("error_msg");
    !inputphoneNum.value?inputphoneNum.classList.add("error"):inputphoneNum.classList.remove("error");
    !inputphoneNum.value?inputphoneNum.parentElement.classList.add("error_msg"):inputphoneNum.parentElement.classList.remove("error_msg");
   
}


function next1(){
     hover.style.backgroundColor='hsl(206, 94%, 87%)';
     hover.style.color='hsl(213, 96%, 18%)';
     hover.style.borderColor='hsl(206, 94%, 87%)';
}
nextStep.addEventListener("click",next1);

let arr=new Array();
function addData(){
    DeleteData();
    getData();
    arr.push({
        UserName:document.getElementById('Name').value,
        Email:document.getElementById('Email').value,
        PhoneNum:document.getElementById('phone').value,

    });
    localStorage.setItem("UserInfo",JSON.stringify(arr));


}
function getData(){
    let  str = localStorage.getItem("UserInfo");
    if (str!= null)
        arr = JSON.parse(str);
}

function DeleteData(){
    localStorage.clear();
    }
nextStep.addEventListener('click',addData);

