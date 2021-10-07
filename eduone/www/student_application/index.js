const baseUrl = (frappe.base_url || window.location.origin);
if(baseUrl.substr(baseUrl.length-1, 1)=='/') baseUrl = baseUrl.substr(0, baseUrl.length-1);
const listOfLanguages = [];
const listOfSkills = [];


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
    const phone = document.getElementById("phone");
    const board = document.getElementById("board");
    const count = document.getElementById("count");
    const cbselangfirst = document.getElementById("cbselangfirst");
    const cbselangsecon = document.getElementById("cbselangsecon");
    const cbsemaths = document.getElementById("cbsemaths");
    const cbsescience = document.getElementById("cbsescience");
    const cbsesocial = document.getElementById("cbsesocial");
    const civilIdElement = document.getElementById("civilId");
    const civilValidTill = document.getElementById("civilValidTill");
    const dob = document.getElementById("dob");
    const passport = document.getElementById("PassportNumber");
    console.log("after", civilIdElement);
    var patternForCivilIdNumber = new RegExp("^\\d{12}$");
    var patternForPassportNumber = new RegExp("([A-Z])\w+");
    const placeText = () => {
        if (window.localStorage.getItem("civilId")) {
            const civilId = window.localStorage.getItem("civilId");
            console.log("extracted civil id", civilId);
            let splited = civilId.split(" ");
            var filtered = splited.filter(function (el) {
                return el != null && el != "";
            });
            console.log(filtered);
            filtered.reduce((acc, cur, currentIndex, array) => {
                let loweredCurrent = cur.toLocaleLowerCase();
                if (cur.match(patternForCivilIdNumber)) {
                    civilIdElement.value = cur;
                }
                if (loweredCurrent.includes("name")) {
                    console.log(cur.slice(4).split('\n')[0]);
                    firstName.value = cur.slice(4).split('\n')[0];
                }
                if (loweredCurrent.includes("passport") || loweredCurrent.includes("passportno") || loweredCurrent.includes("pass") || loweredCurrent.includes("tno") || loweredCurrent.includes("assport")) {
                    let passportNumber = array[currentIndex + 1];
                    if (passportNumber.toLocaleLowerCase() == "no")
                        passportNumber = array[currentIndex + 2];
                    passportNumber = passportNumber.replace(/[^A-Za-z0-9]/g, "");
                    console.log(passportNumber);
                    passport.value = passportNumber;
                }
                if (loweredCurrent.includes("birth") || loweredCurrent.includes("bith") || loweredCurrent.includes("brth") || loweredCurrent.includes("hdate") || loweredCurrent.includes("BithDate")) {
                    let dateOfBirth = array[currentIndex + 1];
                    if (dateOfBirth.charAt(0) == "(") {
                        dateOfBirth = dateOfBirth.slice(1);
                        dateOfBirth = `0${dateOfBirth}`;
                    }
                    let newdate = dateOfBirth.split("/").reverse().join("-");
                    dob.defaultValue = newdate;
                }
                if (loweredCurrent.includes("expiryDate") || loweredCurrent.includes("expiry") || loweredCurrent.includes("exp") || loweredCurrent.includes("ydate")) {
                    console.log(array[currentIndex + 1]);
                    let dateOfCivilIdExpiry = array[currentIndex + 1];
                    if (dateOfCivilIdExpiry.charAt(0) == "(") {
                        dateOfCivilIdExpiry = dateOfCivilIdExpiry.slice(1);
                        dateOfCivilIdExpiry = `0${dateOfCivilIdExpiry}`;
                    }
                    let newdate = dateOfCivilIdExpiry.split("/").reverse().join("-");
                    civilValidTill.defaultValue = newdate;
                }
                // console.log("accumulator", acc);
                // console.log("current", cur);
                // console.log("currentIndex", currentIndex);
                // console.log("array", array);
            });
        }
        if (localStorage.getItem("gName") && localStorage.getItem("gEmail")) {
            let name = localStorage.getItem("gName").split(" ");
            console.log("Google Details", name);
            email.value = localStorage.getItem("gEmail");
            firstName.value = name[0] ? name[0] : "";
            secondName.value = name[1] ? name[1] : "";
            thirdName.value = name[2] ? name[2] : "";
            thirdName.value += " " + (name[3] ? name[3] : "");
            thirdName.value += " " + (name[4] ? name[4] : "");
        }
        if (localStorage.getItem("linkedInData")) {
            let data = JSON.parse(localStorage.getItem("linkedInData"));
            console.log("linkedin data",data);
        if(!data.data.error){
            firstName.value = data.data.firstName?.localized.en_US;
            thirdName.value = data.data.lastName?.localized.en_US;
        }
        }
    };


    placeText();
})();

// Submit
const submitForm = () => {
    console.log("DDDDD")
    var file_data = {};
    $("[type='file']").each(function(i){
      file_data[$(this).attr("id")] = $('#'+$(this).attr("id")).prop('filedata');
    });
    frappe.call({
      method: 'eduone.www.student_application.index.create_student_application',
      args: {
        first_name: $('#firstname').val(),
        middle_name: $('#middlename').val(),
        last_name: $('#lastname').val(),
        prefered_course: $('#pref').val(),
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
        participation_in_arts: $('#partfest').val(),
        panchayat: $('#panchaya').val(),
        other: $('#others').val(),
        state: $('#states').val(),
        student_mobile_number: $('#phone').val(),
        boards_syllabus: $('#board').val(),
        country: $('#count').val(),
        language_1: $('#cbselangfirst').val(),
        language_2: $('#cbselangsecon').val(),
        mathematics_cbse: $('#cbsemaths').val(),
        science_cbse: $('#cbsescience').val(),
        social_science_cbse: $('#cbsesocial').val()

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