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
    // console.log(phone.toString().length)
    // if(isNaN(phone) || phone.toString().length >10 )
    if(isNaN(phone))
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
function data(){
  var name = document.getElementById("firstname").value;
  var guid = document.getElementById("gurd").value;
  var occup = document.getElementById("occu").value;
  var middle = document.getElementById("middlename").value;
  var last = document.getElementById("lastname").value;
  var other = document.getElementById("others").value;
  var country = document.getElementById("count").value;
  var state = document.getElementById("states").value;
  var dist = document.getElementById("district").value;
  var thalu = document.getElementById("thaluks").value;
  var villa = document.getElementById("villages").value;
  var fath = document.getElementById("fathname").value;
  var month = document.getElementById("mothname").value;
  if(name){
    console.log(name.toString().length)
    if(!isNaN(name) || names.toString().length >30 )
    {
      alert("Invalid details, Number not allowed!");
      document.getElementById("firstname").value = "";
    }
  }
  if(guid){
    console.log(guid.toString().length)
    if(!isNaN(guid) || guid.toString().length >30 )
    {
      alert("Invalid details, Number not allowed!");
      document.getElementById("gurd").value = "";
    }
  }
   if(occup){
    console.log(occup.toString().length)
    if(!isNaN(occup) || occup.toString().length >30 )
    {
      alert("Invalid details, Number not allowed!");
      document.getElementById("occu").value = "";
    }
  }
   if(middle){
    console.log(middle.toString().length)
    if(!isNaN(middle) || middle.toString().length >30 )
    {
      alert("Invalid details, Number not allowed!");
      document.getElementById("middlename").value = "";
    }
  }
  if(last){
    console.log(last.toString().length)
    if(!isNaN(last) || last.toString().length >30 )
    {
      alert("Invalid details, Number not allowed!");
      document.getElementById("lastname").value = "";
    }
  }
  if(other){
    console.log(other.toString().length)
    if(!isNaN(other) || other.toString().length >30 )
    {
      alert("Invalid details, Number not allowed!");
      document.getElementById("others").value = "";
    }
  }
  if(country){
    console.log(country.toString().length)
    if(!isNaN(country) || country.toString().length >30 )
    {
      alert("Invalid details, Number not allowed!");
      document.getElementById("count").value = "";
    }
  }
  if(state){
    console.log(state.toString().length)
    if(!isNaN(state) || other.toString().length >30 )
    {
      alert("Invalid details, Number not allowed!");
      document.getElementById("states").value = "";
    }
  }
  if(dist){
    console.log(dist.toString().length)
    if(!isNaN(dist) || dist.toString().length >30 )
    {
      alert("Invalid details, Number not allowed!");
      document.getElementById("district").value = "";
    }
  }
  if(thalu){
    console.log(thalu.toString().length)
    if(!isNaN(thalu) || thalu.toString().length >30 )
    {
      alert("Invalid details, Number not allowed!");
      document.getElementById("thaluks").value = "";
    }
  }
  if(villa){
    console.log(villa.toString().length)
    if(!isNaN(villa) || villa.toString().length >30 )
    {
      alert("Invalid details, Number not allowed!");
      document.getElementById("villages").value = "";
    }
  }
  if(fath){
    console.log(fath.toString().length)
    if(!isNaN(fath) || fath.toString().length >30 )
    {
      alert("Invalid details, Number not allowed!");
      document.getElementById("fathname").value = "";
    }
  }
  if(month){
    console.log(month.toString().length)
    if(!isNaN(month) || month.toString().length >30 )
    {
      alert("Invalid details, Number not allowed!");
      document.getElementById("mothname").value = "";
    }
  }
}