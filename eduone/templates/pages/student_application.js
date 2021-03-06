const baseUrl = (frappe.base_url || window.location.origin);
if(baseUrl.substr(baseUrl.length-1, 1)=='/') baseUrl = baseUrl.substr(0, baseUrl.length-1);

$(document).ready(function () {
	console.log("Student Application");
});

const submitForm = () => {
    console.log("on_submit");
    const firstname = document.getElementById("firstname").value;
    const middlename = document.getElementById("middlename").value;
    const lastname = document.getElementById("lastname").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value;
    const aadhar = document.getElementById("aadhar").value;
    const email = document.getElementById("email").value;
    const cast = document.getElementById("cast").value;
    const religion = document.getElementById("religion").value;
    const country = document.getElementById("country").value;
    const communinication = document.getElementById("communinication").value;
    const permanent = document.getElementById("permanent").value;
    const permanent_pin = document.getElementById("permanent_pin").value;
    const communinication_pin = document.getElementById("communinication_pin").value;
    const state = document.getElementById("state").value;
    const district = document.getElementById("district").value;
    const thaluk = document.getElementById("thaluk").value;
    const village = document.getElementById("village").value;
    const scheme = document.getElementById("scheme").value;
    const register_number = document.getElementById("register_number").value;
    const monthpass = document.getElementById("monthpass").value;
    const yearpass = document.getElementById("yearpass").value;
    const passedexam = document.getElementById("passedexam").value;
    console.log(firstname);
    frappe.msgprint(__('Document updated successfully'));
}
document.getElementById("submitBtn").addEventListener("click", submitForm);