'use strict';

const userInputEl = document.getElementById('user-input');

const btnTranslate= document.getElementById('btn-translate');

const outputContainer = document.getElementById('output-container');


const url='https://api.funtranslations.com/translate/dothraki.json?text=Have%20you%20seen%20my%20lady%E2%80%99s%20dragon%3F';   
 const showOutput=(str)=>{
    outputContainer.innerHTML=str;
 }
 const getTranslatedText=(input)=>{
 fetch(url+input)
 .then((response)=>response.json())
 .then((data)=>{
    console.log(data)
    showOutput(data.contents.translated);
 });
 };
btnTranslate.addEventListener('click',()=> {

    const userInput= userInputEl.value.trim();


    if (userInput) {
    outputContainer.innerHTML=userInput;
    getTranslatedText(userInput);
} else{
    alert('Input is Mandatory');
    userInputEl.value=null;
}
});
