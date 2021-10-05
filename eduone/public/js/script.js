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