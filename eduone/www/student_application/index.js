const baseUrl = (frappe.base_url || window.location.origin);
if(baseUrl.substr(baseUrl.length-1, 1)=='/') baseUrl = baseUrl.substr(0, baseUrl.length-1);
const listOfLanguages = [];
const listOfSkills = [];

// $(document).ready(function () {
//  console.log("Job Application");
//   set_menu();
//   $(".nationality_details_menu").hide();
//   $(".nationality-details").hide();
//   $('.current_employment_menu').hide();
//   $('.current-employment').hide();
//   $('.visa_and_residency_details').hide();
  // set_jobs_info_to_application();
  // set_masters_to_application();
  // $('#required_docs').on('change', ':file', function() {
  //   var $input = $(this);
  //   var file_input = $input.get(0);
  //   if (file_input.files[0].size > 5242880) {
  //     alert('max upload size is 5 Mega Byte');
  //   }
  //   if(file_input.files.length) {
  //     file_input.filedata = { "files_data" : [] };
  //   }
  //   window.file_reading = true;
  //   //this will handle multi files input
  //   $.each(file_input.files, function(key, value) {
  //     setupReader(value, file_input);
  //   });
  //   window.file_reading = false;
  // });
// });

// function setupReader(file, input) {
//  let name = file.name;
//  var reader = new FileReader();
//  reader.onload = function(e) {
//    input.filedata.files_data.push({
//      "__file_attachment": 1,
//      "filename": file.name,
//      "dataurl": reader.result
//    })
//  }
//  reader.readAsDataURL(file);
// }

// var set_menu = () => {
//   var menus = ['Applicant Personal Details', 'Contact Details', 'Language', 'Nationality Details', 'Passport',
//     'Visa and Residency', 'Current Employment', 'Educational Qualification', 'Work Details', 'Basic Skill',
//     'Documents Required'];
//   var menu_html = '';
//   menus.forEach((menu, i) => {
//     menu_html += `<a href="#${menu.toLowerCase().replace(/ /g, '-')}" class="sidebar-item list-group-item ${menu.toLowerCase().replace(/ /g, '_')+'_menu'}">
//         <div class="sidebar-item-text">
//             ${menu}
//         </div>
//     </a>`;
//   });
//   document.getElementById('sidebar-application-menu').innerHTML += menu_html;
// };

// function onchange_nationality() {
//   var x = document.getElementById("nationality").value;
//   if(x=='Kuwaiti'){
//     $(".nationality-details").show();
//     $(".nationality_details_menu").show();
//   }
//   else{
//     $(".nationality_details_menu").hide();
//     $(".nationality-details").hide();
//   }

//   frappe.call({
//     method: 'one_fm.templates.pages.job_application.get_country_from_nationality',
//     args: {nationality: x},
//     callback: function(r) {
//       if(r && r.message){
//         document.getElementById("passportHolderOf").value = r.message;
//       }
//       else{
//         document.getElementById("passportHolderOf").value = '';
//       }
//     }
//   });

//   set_required_docs();
// };

// function onchange_visa_type() {
//   set_required_docs();
// };

// function onclick_do_you_have_perv_work_exp() {
//   var x = document.getElementById("do_you_have_perv_work_exp").checked;
//   if(x){
//     $('.current_employment_menu').show();
//     $('.current-employment').show();
//   }
//   else{
//     $('.current_employment_menu').hide();
//     $('.current-employment').hide();
//   }
// };

// function onclick_valid_visa() {
//   var x = document.getElementById("ValidVisa").checked;
//   if(x){
//     $('.visa_and_residency_details').show();
//   }
//   else{
//     $('.visa_and_residency_details').hide();
//   }
//   set_required_docs();
// };

// function set_masters_to_application() {
//   frappe.call({
//     method: "one_fm.templates.pages.job_application.get_master_details",
//     callback: function(r) {
//       var data = r.message?r.message:[];
//       set_options_from_master(data);
//     }
//   });
// };

// var set_options_from_master = function(data) {
//   var keys = ['gender', 'nationality', 'passportHolderOf', 'country_of_employment', 'visaType'];
//   keys.forEach((key, i) => {
//     var options_html = `<option></option>`;
//     if(key in data && data[key]){
//       data[key].forEach((item, i) => {
//         options_html += `<option>${item.name}</option>`;
//       });
//     }
//     document.getElementById(key).innerHTML += options_html;
//   });
// }

// function set_jobs_info_to_application() {
//   const job = localStorage.getItem("currentJobOpening");
//   if(!job){
//       alert("Please Select a Job Posting before continuing");
//       window.location = "job_opening";
//   }
//   frappe.call({
//     method: "one_fm.templates.pages.job_application.get_job_details",
//     args: {'job': job},
//     callback: function (r) {
//       if(r.message){
//         var erf = r.message;
//         window.localStorage.setItem("erf", erf.name);
//         erf.designation_skill.map(a=>{
//           listOfSkills.push({
//             skill: a.skill,
//             proficiency: ""
//           })
//           set_basic_skill_ratings(a.skill);
//         })
//         erf.languages.map(a=>{
//           listOfLanguages.push({
//             language: a.language,
//             language_name: a.language_name,
//             speak: 0,
//             read: 0,
//             write: 0
//           });
//           set_language_section_ratings(a.language_name)
//         })
//         starEffects();
//         set_work_details_section(erf)
//       }
//     }
//   });
// };

// var set_required_docs = function() {
//   var filters = {};
//   var nationality = $("#nationality option:selected").text();
//   var valid_visa = document.getElementById("ValidVisa").checked;
//   var visa_type = false;
//   if(valid_visa){
//     visa_type = $("#visaType").val();
//     filters['valid_kuwait_visa'] = valid_visa;
//     if(visa_type){
//       filters['visa_type'] = visa_type;
//     }
//   }
//   if(nationality){
//     filters['nationality'] = nationality;
//   }

//   frappe.call({
//     method: 'one_fm.templates.pages.job_application.get_required_documents',
//     args: filters,
//     callback: function(r) {
//       var required_docs_html = '';
//       document.getElementById('required_docs').innerHTML = "";
//       if(r && r.message && r.message.recruitment_documents){
//         var required_docs = r.message.recruitment_documents;
//         required_docs.forEach((item, i) => {
//           if(item.required_when == "Pre Interview"){
//             required_docs_html += `<div class="row">
//                 <div class="form-group col-md-4">
//                     <label>${item.document_required}</label>
//                 </div>
//                 <div class="form-group col-md-8">
//                     <input class="${item.document_required.toLowerCase().replace(/ /g, '-')}" type="file"
//                      id="${item.document_required.replace(/ /g, '-')}"/>
//                 </div>
//             </div>`
//           }
//         });
//       }
//       document.getElementById('required_docs').innerHTML += required_docs_html;
//     }
//   });
// };

// var set_work_details_section = function(erf) {
//   var exists_a_field = false;
//   if(erf.shift_working){
//     exists_a_field = true;
//     $('.rotationalShift').show();
//   }
//   else{
//     $('.rotationalShift').hide();
//   }
//   if(erf.night_shift){
//     exists_a_field = true;
//     $('.nightShift').show();
//   }
//   else{
//     $('.nightShift').hide();
//   }
//   if(erf.travel_required){
//     exists_a_field = true;
//     $('.canYouTravel').show();
//   }
//   else{
//     $('.canYouTravel').hide();
//   }

//   var options_html = `<option></option>`;
//   if(erf.travel_required && erf.type_of_travel){
//     let options = ['I Will Travel '+erf.type_of_travel, 'I Cant Travel '+erf.type_of_travel];
//     options.forEach((option, i) => {
//       options_html += `<option>${option}</option>`;
//     });
//   }
//   document.getElementById('canYouTravel').innerHTML += options_html;
//   if(!exists_a_field){
//     $('.work-details').hide();
//     $('.work_details_menu').hide();
//   }
//   else{
//     $('.work-details').show();
//     $('.work_details_menu').show();
//   }
// };

// var set_basic_skill_ratings = (skill) => {
//   var skills_html =`<div class="form-group col-md-6"><p>${skill}</p></div><div class="form-group col-md-6">
//     <div class='rating-stars'><ul class='stars'>`;
//   for (var i = 1; i <= 5; i++) {
//     skills_html += `<li class='star' data-skill='${skill}' title='skill' data-value='${i}'>
//       <i class='fa fa-star fa-fw'></i></li>`
//   }
//   skills_html += `</ul></div></div>`;
//   document.getElementById('basic-skills').innerHTML += skills_html;
// }

// var set_language_section_ratings = function(language) {
//   var srw = ['speak', 'read', 'write'];
//   var language_section_html = `<div class="form-group col-md-4"><p>${language}</p></div><div class="form-group col-md-2">`;
//   srw.forEach((item, i) => {
//     let mt_3_class = (i > 0)?'mt-3':'';
//     language_section_html += `<div class='${mt_3_class}'>${titleCase(item)}</div>`
//   });
//   language_section_html += `</div><div class="form-group col-md-6">`;
//   srw.forEach((item, j) => {
//     language_section_html += `<div class='rating-stars'> <ul class='stars'>`;
//     for (var i = 1; i <= 5; i++) {
//       language_section_html += `<li class='star' data-language='${language}' title='${item}' data-value='${i}'>
//           <i class='fa fa-star fa-fw'></i></li>`
//     }
//     language_section_html += `</ul></div>`;
//   });
//   language_section_html += `</div>`;
//   document.getElementById('language-rating').innerHTML += language_section_html;
// };

// function titleCase(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return word.replace(word[0], word[0].toUpperCase());
//   }).join(' ');
// }

// // Auto complete scripts
// $(function() {
//     let availableTags = [
//       "Married"
//     ];
//     $( "#tags" ).autocomplete({
//       source: availableTags
//     });
// });

// // Star Component
// const starEffects = () =>{
//     /* 1. Visualizing things on Hover - See next part for action on click */
//     $('.stars li').on('mouseover', function(){
//       var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
//       // Now highlight all the stars that's not after the current hovered star
//       $(this).parent().children('li.star').each(function(e){
//         if (e < onStar) {
//           $(this).addClass('hover');
//         }
//         else {
//           $(this).removeClass('hover');
//         }
//       });
//     }).on('mouseout', function(){
//       $(this).parent().children('li.star').each(function(e){
//         $(this).removeClass('hover');
//       });
//     });

//     /* 2. Action to perform on click */
//     $('.stars li').on('click', function(){
//       var onStar = parseInt($(this).data('value'), 10); // The star currently selected
//       var stars = $(this).parent().children('li.star');
//       for (i = 0; i < stars.length; i++) {
//         $(stars[i]).removeClass('selected');
//       }
//       for (i = 0; i < onStar; i++) {
//         $(stars[i]).addClass('selected');
//       }
//       // RESPONSE
//       var ratingValue = parseInt($('.stars li.selected').last().data('value'), 10);
//       if(this.title != "skill"){
//         listOfLanguages.map(a=> {
//           if(a.language_name == this.getAttribute('data-language')){
//             a[this.title] = ratingValue;
//           }
//         })
//       }
//       else {
//         listOfSkills.map(a=> {
//           if(a.skill == this.getAttribute('data-skill'))
//             a.proficiency = ratingValue;
//         })
//       }
//     });
// }

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
        participation_in_youth_festival: $('#partfest').val(),
        panchayat: $('#panchaya').val(),
        other: $('#others').val(),
        state: $('#states').val(),
        student_mobile_number: $('#phone').val(),
        boards_syllabus: $('#board').val(),
        country: $('#count').val()

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