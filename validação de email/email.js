// VALIDAÇÃO DE CPF DIRETO NO JAVASCRIPT
function checarEMAIL(){
    if(document.forms[0].email.value == "" || 
       document.forms[0].email.value.indexOf("@") == -1 ||
       document.forms[0].email.value.indexOf(".") == -1){
        alert("Por favor informe um email válido");
        return false;
       }else{
        alert("Email informado");
        document.getElementById("email").innerHTML = document.forms[0].email.value;
        
       }
}