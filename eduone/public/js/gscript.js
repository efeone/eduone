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