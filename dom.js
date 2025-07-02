let buttton_action =document.querySelector('button')
let class_selecor =document.querySelector('.hello');
let id_selector =document.querySelector('#java');
let tag_Selection =document.querySelector('h4');
let add_class =document.querySelector('h6');


buttton_action.textContent="Starting download";
tag_Selection.textContent ='nana chi tang';
add_class.classList.add('makeitred');
let h4= document.createElement('p');
h4.textContent="hello suraj how are you we need to be get a job "
document.querySelector("body").appendChild(h4);

let button_event =document.querySelector('button');
button_event.addEventListener('click',function(){
    button_event.textContent="Listing...";
    alert("hello suraj")
    button_event.backgroundcolor ="red"
})