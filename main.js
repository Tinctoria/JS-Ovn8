const form=document.getElementById("form"); 
const signBtn=form.querySelector("button"); 

signBtn.addEventListener("click", function(event){
    event.preventDefault(); 

    const inputFields=form.querySelectorAll("input"); 

    inputFields.forEach(function(inputField){
        const fieldName=inputField.name; 
        const stringValue=inputField.value;

        console.log(fieldName);

        if (fieldName=== "firstname"){
            const errorDiv=document.getElementById(fieldName + "-error"); 
            if(stringValue.length>=2) {
                errorDiv.textContent="";
            }else {
                errorDiv.textContent="firstname must be at least two characters";
            }
        }

        if (fieldName=== "email"){
            const errorDiv=document.getElementById(fieldName + "-error"); 
            if(stringValue.includes("@")) {
                errorDiv.textContent="";
            }else {
                errorDiv.textContent="your emailadress needs a @";
            }
        }

        if (fieldName=== "password"){
            const errorDiv=document.getElementById(fieldName + "-error"); 
            if(stringValue.length>=6) {
                errorDiv.textContent="";
            }else {
                errorDiv.textContent="your password is too short";
            }
        }

        if (fieldName=== "confPass"){
            const errorDiv=document.getElementById(fieldName + "-error"); 
            const passwordToCheck=document.getElementById("password");
            if(stringValue===passwordToCheck.value) {
                errorDiv.textContent="";
            }else {
                errorDiv.textContent="your passwords doesn't match";
            }
        }

    });

})