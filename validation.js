
//Nav 
        window.addEventListener('scroll', function () {
            let header = document.querySelector('header');
            let windowPosition = window.scrollY > 0;
            header.classList.toggle('scrolling-active', windowPosition);
        })
   
    const navSlide = () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav-list');
        const navList = document.querySelectorAll('.nav-list li');
       
      burger.addEventListener('click',()=>{
        //Toggle nav
            nav.classList.toggle('nav-active');
      
      //Burger Animation
      burger.classList.toggle('toggle');
        });
}

    navSlide();
    //End Nav








function fncValidate() //name of function in javascript
{
   var fn=document.form1.fname.value; 
   var ln=document.form1.lname.value; //ln is declared as a variable to store the value obtained from the text field named as lname 
   var patt = /[^a-z]/i; 
   var fname = patt.test(fn); 
   var lname = patt.test(ln); 
   
 if(fn == "") //used to chech the empty text field  named fname
 {
  alert('Please input Firstname'); //pop up box
 
  return false;
 }
   if ( fn == null || fname == true ) //to validate users input which allow entry only Alphabet
   {
    alert("Enter only Alphabet for Firstname"); //if users input is not alphabet then fname is set to true and the pop up box will alert a mesage
    return false;
   }
  if(ln == "")
 {
  alert('Please input Lastname');
 
  return false;
 }
   if ( ln == null || lname == true )
   {
    alert("Enter only Alphabet for Lastname");
    return false;
   }
   
var m = document.getElementById('male'); //gets value from radia button
var f = document.getElementById('female'); 

if ( (m.checked == false ) && (f.checked == false ) ) //checks if radio button is clicked or not
{
alert ( "Please choose Gender" );
document.getElementById("gen").style.border = "2px solid red"; 
return false;
}
 else {
document.getElementById("gen").style.border = ""; //when the user clicks on the radio button the border vanishes
}

 var add=document.form1.address.value;
 var patt2 = /[^a-z, ]/i;
   var address = patt2.test(add);
 if(add == "")
 {
  alert('Please enter your address');
 
  return false;
 }
 if ( add == null || address == true )
   {
    alert("Enter only Alphabet for Address with ,");
    return false;
   }
 
var c = document.getElementById("country") 
if(c.value == null || c.value == "") {//to check if the user forgot to select the country 
alert("Please select a country"); 
return false;
}
var p=document.form1.phone.value; //p is declared as a variable to store the value obtained fron the text field named phone
if(isNaN(p)) //checks if the phone numbers are not digits
{
alert("Enter only numbers");
return false;
}
if(p=="") //chechs if text field is empty
{
alert("Enter 10 digits");
return false;
}
if(p.length>10)  //checks if the phone number entered exceed 10 numbers 
{
alert("Enter 10 digits");
return false;
}
if(p.length<10) //checks if the phone no entered is less than 10 nr
{
alert("Enter 10 digits");
return false;
}
var em=document.form1.email.value; 
var atpos=em.indexOf("@"); //the variable atpos is declared such that it should containe an index @
var dotpos=em.lastIndexOf("."); 
if(atpos < 1 || dotpos < atpos+2 || dotpos+2 >=em.length)
{
alert("Invalid email id");
return false;
}


 alert("Successfully registered.");
 document.form1.submit();
}