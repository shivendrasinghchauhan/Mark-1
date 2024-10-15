function shiv(){

    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    console.log(name);
    console.log(age);
    console.log(email);
    console.log(password);

    if(name === ""){
        window.alert("please enter name")
    }
    else if(age === ""){
        window.alert("please enter age")
    }
    else if(email === ""){
        window.alert("please enter email")
    }

else if(password === ""){
    window.alert("please enter password")
}
return false;

}
