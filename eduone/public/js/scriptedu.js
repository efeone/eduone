function eduone(){
  console.log("tngbdfvd");
  if (document.getElementById("board").value == "") 
  {
      document.getElementById("statee").style.display="none";
      document.getElementById("cbses").style.display="none";
      console.log("wwwwwww");
  }
  if (document.getElementById("board").value == "State") 
  {
      document.getElementById("statee").style.display="block";
      document.getElementById("cbses").style.display="none";
      console.log("wwwwwww");
  }
  if (document.getElementById("board").value == "CBSE")
   		 {
      document.getElementById("statee").style.display="none";
      document.getElementById("cbses").style.display="block";
      console.log("wwwwwww");
  }

}
function setAddress(){
  if ($("#homy").is(":checked")) {
    $('#communinication').val($('#permanent').val());
    $('#communinication').attr('disabled', 'disabled');
  } else {
    $('#communinication').removeAttr('disabled');
    console.log("testttt")
  }
}
    
$('#homy').click(function(){
  setAddress();
})
function emailvalidation()
{
  var email = document.getElementById("email").value;
  if(email){
    console.log(validateEmail(email))
    if(!validateEmail(email)){
      alert("Invalid Email Id!"); 
      document.getElementById("email").value = "";
    } 
  }
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
}

function mobilevalidation(){
  var moble = document.getElementById("mobiles").value;
  var phone = document.getElementById("phone").value;
  if(phone){
    console.log(phone.toString().length)
    if(isNaN(phone) || phone.toString().length >10 )
    {
      alert("Invalid Mobile Number !");
      document.getElementById("phone").value = "";
    }
  }
  if(moble){
    console.log(moble.toString().length)
    if(isNaN(moble) || moble.toString().length >10 )
    {
      alert("Invalid Mobile Number !");
      document.getElementById("mobiles").value = "";
    }
  }
}

function aadharvalidation(){
  var aadhar_number = document.getElementById("aadhar").value;
  if(aadhar_number){
    console.log(aadhar_number.toString().length)
    if(isNaN(aadhar_number) || aadhar_number.toString().length >12 || aadhar_number.toString().length <12 )
    {
      alert("Invalid Aadhar Number !");
      document.getElementById("aadhar").value = "";
    }
  }
}

function regivalidation(){
  var regist = document.getElementById("register_number").value;
  if(regist){
    console.log(regist.toString().length)
    if(isNaN(regist) || regist.toString().length >6 || regist.toString().length <6 )
    {
      alert("Invalid Registration Number !");
      document.getElementById("register_number").value = "";
    }
  }
}
function pinvalidation(){
  var pin = document.getElementById("permanent_pin").value;
  if(pin){
    console.log(pin.toString().length)
    if(isNaN(pin) || pin.toString().length >6 || pin.toString().length <6 )
    {
      alert("Invalid Pin Code !");
      document.getElementById("permanent_pin").value = "";
    }
  }
}