const form = document.getElementById('form');
const campos = document.querySelectorAll('.required'); 
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    nameValidate();
    emailValidate();
    passwordValidate();
    comparePassword();
});

function setError(index) {
    campos[index].style.border = '1px solid #e63636';
    spans[index].style.display = 'block';
}

function setSuccess(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate () {
    if(campos[0].value.length < 3) {
        setError(0);
    }
    else {
        setSuccess(0);
    }
}

function emailValidate() {
    if(!emailRegex.test(campos[1].value)) {
        setError(1);
    }
    else {
        setSuccess(1);
    }
}

function passwordValidate() {
    if(campos[2].value.length < 8) {
        setError(2);
    }
    else {
        setSuccess(2);
        comparePassword();
    }
}

function comparePassword() {
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8) {
        setSuccess(3);
    }
    else {
        setError(3);
    }
}
