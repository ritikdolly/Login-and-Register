let container=document.getElementById('container');
let registerBtn =document.getElementById('register');
let loginBtn=document.getElementById('login');
let email=document.querySelector("#email");
let pwd=document.querySelector("#pwd");
let name=document.querySelector("#email");
let signUp=document.querySelector("#signUp");

registerBtn.addEventListener('click',()=>{
    container.classList.add("active");
});
loginBtn.addEventListener('click',()=>{
    container.classList.remove("active");

});

signUp.addEventListener('click',()=>{
    let nameGet=name.innerText;
    let emailGet=email.innerText;
    let pwdGet=pwd.innerText;
    console.log(nameGet);
    console.log(emailGet);
    console.log(pwdGet);
})