const baseUrl = (frappe.base_url || window.location.origin);
if(baseUrl.substr(baseUrl.length-1, 1)=='/') baseUrl = baseUrl.substr(0, baseUrl.length-1);

// OCR Get Text
(function () {
    console.log("before");
    const firstname = document.getElementById("firstname");
    // const middlename = document.getElementById("middlename");
    const lastname = document.getElementById("lastname");
    const gender = document.getElementById("gender");
    const date = document.getElementById("date");
    const aadhar = document.getElementById("aadhar");
    const email = document.getElementById("email");
    const cast = document.getElementById("cast");
    const mobiles = document.getElementById("mobiles");
    const religions = document.getElementById("religions");
    const permanent = document.getElementById("permanent");
    const communinication = document.getElementById("communinication");
    const permanent_pin = document.getElementById("permanent_pin");
    const district = document.getElementById("district");
    const thaluk = document.getElementById("thaluk");
    const village = document.getElementById("village");
    const fathname = document.getElementById("fathname");
    const fathalive = document.getElementById("fathalive");
    const mothname = document.getElementById("mothname");
    const motalive = document.getElementById("motalive");
    const gurd = document.getElementById("gurd");
    const occu = document.getElementById("occu");
    const schem = document.getElementById("schem");
    const monthpass = document.getElementById("monthpass");
    const register_number = document.getElementById("register_number");
    const yearpass = document.getElementById("yearpass");
    const firstlang = document.getElementById("firstlang");
    const secondlang = document.getElementById("secondlang");
    const engli = document.getElementById("engli");
    const hind = document.getElementById("hind");
    const social = document.getElementById("social");
    const biolo = document.getElementById("biolo");
    const physi = document.getElementById("physi");
    const chemi = document.getElementById("chemi");
    const maths = document.getElementById("maths");
    const infotec = document.getElementById("infotec");
    const partsports = document.getElementById("partsports");
    const partfest = document.getElementById("partfest");
    const panchaya = document.getElementById("panchaya");
    const others = document.getElementById("others");
    const states = document.getElementById("states");
    const dob = document.getElementById("dob");

    // placeText();
})();

// Submit
const submitForm = () => {
    console.log("DDDDD")
    // var file_data = {};
    // $("[type='file']").each(function(i){
    //   file_data[$(this).attr("id")] = $('#'+$(this).attr("id")).prop('filedata');
    // });
    frappe.call({
      method: 'eduone.www.student_application.index.create_student_application',
      args: {
        first_name: $('#firstname').val(),
        // middle_name: $('#middlename').val(),
        last_name: $('#lastname').val(),
        gender: $('#gender').val(),
        date_of_birth: $('#date').val(),
        aadhar_number: $('#aadhar').val(),
        student_email_id: $('#email').val(),
        community_details: $('#cast').val(),
        mobile: $('#mobiles').val(),
        religion: $('#religions').val(),
        address_line_1: $('#permanent').val(),
        address_line_2: $('#communinication').val(),
        pincode: $('#permanent_pin').val(),
        district: $('#district').val(),
        thaluk: $('#thaluks').val(),
        village: $('#villages').val(),
        father_name: $('#fathname').val(),
        is_father_alive: $('#fathalive').val(),
        mother_name: $('#mothname').val(),
        is_mother_alive: $('#motalive').val(),
        guardian_name: $('#gurd').val(),
        occupation_: $('#occu').val(),
        scheme: $('#schem').val(),
        month_pass: $('#monthpass').val(),
        registration_number: $('#register_number').val(),
        first_language_1: $('#firstlang').val(),
        first_language_2: $('#secondlang').val(), 
        _english: $('#engli').val(),
        hindi: $('#hind').val(),
        social_science: $('#social').val(),
        biology: $('#biolo').val(),
        physics: $('#physi').val(),
        chemistry: $('#chemi').val(),
        mathematics: $('#maths').val(),
        information_technology: $('#infotec').val(),
        year_pass: $('#yearpass').val(),
        participation_in_sports: $('#partsports').val(),
        participation_in_youth_festival: $('#partfest').val(),
        panchayat: $('#panchaya').val(),
        other: $('#others').val(),
        state: $('#states').val()

      },
      callback: function (r) {
        if (r) {
          if (r.message == 1) {
            frappe.msgprint(__('Your Application has been Successfully Submitted'));
          } else {
             frappe.msgprint(__('Failed to Submit Application!'));
          }
        }
      }
    });
}
document.getElementById("submitBtn").addEventListener("click", submitForm);