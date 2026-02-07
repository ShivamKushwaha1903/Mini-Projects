const inputfield = document.querySelector('#password');
const outputfield = document.querySelector('#output'); // text outside the input field

inputfield.addEventListener('input', function(){
    console.log(inputfield.value);

    let password = inputfield.value;  // inputed value ko password variable mein save kar deya.

    //length of the password should be greater than 8
    if (password.length < 8){
        outputfield.innerText = 'Password is too short';
        outputfield.style.color = 'red';
    }else{
        outputfield.innerText = 'Password is long enough';
        outputfield.style.color = 'green';
        
        // Password should contain
        //a-z , A-Z , 0-9 , special characters !@#$%^&*()_+{:"<>?|[]\;',.
        console.log("is lowercase",password.search(/[a-z]/));
        if( password.search(/[a-z]/) == -1){
            outputfield.innerText = 'Password is missing a lowercase letter';
            outerfield.style.color = 'red';
        }else if(password.search(/[A-Z]/) == -1){
            outputfield.innerText = 'Password is missing a Uppercase letter';
            outerfield.style.color = 'red';    
        }else if(password.search(/[0-9]/) == -1){
            outputfield.innerText = 'Password is missing a Numeric letter';
            outputfield.style.color = 'red';
        }else if(password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\:\"\<\>\?\|\[\]\\\;\'\,\.]/) == -1){
            outputfield.innerText = 'Password is missing a Special Character';
            outputfield.style.color = 'red';
        }else{
            outputfield.innerText = 'Password is strong';
            outputfield.style.color = 'green';
        } 
    }
})