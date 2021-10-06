function setAddress(){
  if ($("#homy").is(":checked")) {
    $('#communinication').val($('#permanent').val());
    $('#communinication').attr('disabled', 'disabled');
  } else {
    $('#communinication').removeAttr('disabled');
  }
}
    
$('#homy').click(function(){
  setAddress();
})

function disable()
          {
              document.getElementById("panchaya").disabled=true;
          }
          function enable()
          {
              document.getElementById("panchaya").disabled=false;
          }

$("#email").validate({
  wrapper: "div"
});