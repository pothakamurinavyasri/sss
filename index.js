
 /*let globalIsSubmit=false*/
 function validate()/*(isSubmit)*/{
  /*if(isSubmit){
    globalIsSubmit=true
  }*/
   let firstName=document.getElementById('first name').value
   let lastName=document.getElementById('last name').value
   let userName=document.getElementById('username').value
   let password=document.getElementById('password').value
   let confirmPassword=document.getElementById('confirm-password').value
   let TNC=document.getElementById('t-and-c').checked 
   let error=false
  /*if(globalIsSubmit){*/ 
    if(firstName.length >=3){
        document.getElementById('first-name-valid').style.display='block'
        document.getElementById('first-name-invalid').style.display='none'
    } else {
        document.getElementById('first-name-invalid').style.display='block'
        document.getElementById('first-name-valid').style.display='none'
        error=true
 }
  
 if(lastName.length >=3){
    document.getElementById('last-name-valid').style.display='block'
    document.getElementById('last-name-invalid').style.display='none'
   
} else {
    document.getElementById('last-name-invalid').style.display='block'
    document.getElementById('last-name-valid').style.display='none'
    error=true
}
if(userName.includes('@') && userName.includes('.') && userName.indexOf("@")>0 && userName.substr(userName.lastIndexOf('.')+1).length>=2 ){
    document.getElementById('username-valid').style.display='block'
    document.getElementById('username-invalid').style.display='none'
} else {
    document.getElementById('username-invalid').style.display='block'
    document.getElementById('username-valid').style.display='none'
    error=true
 }
if(password.length >=8 && (password.includes('@') || password.includes('$') || password.includes('#')) && (password.includes('0') || password.includes('1') || password.includes('2') || password.includes('3') || password.include('4'))){
  document.getElementById('password-valid').style.display='block'
  document.getElementById('password-invalid').style.display='none'
 
} else {
  document.getElementById( 'password-invalid').style.display='block'
  document.getElementById( 'password-valid').style.display='none'
  error=true
}
if(confirmPassword.length<1) {
  document.getElementById('confirm-password-invalid').style.display='block'
  document.getElementById('confirm-password-valid').style.display='none'
}
else if(password==confirmPassword){
  document.getElementById('confirm-password-valid').style.display='block'
  document.getElementById('confirm-password-invalid').style.display='none'
} else {
  document.getElementById('confirm-password-invalid').style.display='block'
  document.getElementById('confirm-password-valid').style.display='none'
  error=true
}
if(TNC){
  document.getElementById("t-and-c").style.display="none"
}
else{
  document.getElementById("t-and-nc").style.display="block"
  error=true
}
/*
if(!error) {
  alert('Your details have been saved successfully!')
  document.getElementById('firstName').value = ''
  document.getElementById('lastName').value = ''
  document.getElementById('userName').value = ''
  document.getElementById('password').value = ''
  document.getElementById('confirmPassword').value = ''
  document.getElementById('tnC').checked = false

  document.getElementById('first-name-valid').style.display = 'none'
  document.getElementById('last-name-valid').style.display = 'none'
  document.getElementById("username-valid").style.display = "none"
  document.getElementById("password-valid").style.display = "none"
  document.getElementById("confirmPassword-invalid").style.display = "none"
}
}
*/
 }
