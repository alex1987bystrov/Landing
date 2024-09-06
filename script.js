let email;
let panel = document.querySelector('.panel');
let input = document.querySelector('input');
function handleClick(){
    panel.classList.toggle('active');
}
function handleClickSub(){
    email = input.value;
    panel.classList.toggle('active');
    alert('Our specialist will contact you shortly!');
}