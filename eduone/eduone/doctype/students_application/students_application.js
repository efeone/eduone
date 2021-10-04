// Copyright (c) 2021, efeone and contributors
// For license information, please see license.txt

frappe.ui.form.on('Students Application', {
	// refresh: function(frm) {
		aadhar_number: function(frm){
		if(isNaN(frm.doc.aadhar_number || frm.doc.aadhar_number.toString().length >12 )){
			frm.set_value('aadhar_number', '');
			frm.refresh_field('aadhar_number');
			frappe.throw(__('Aadhar Number is Invalid!'))
		}
	},
	mobile: function(frm){
		if(isNaN(frm.doc.mobile) || frm.doc.mobile.toString().length >10){
			frm.set_value('mobile', '');
			frm.refresh_field('mobile');
			frappe.throw(__('Mobile number is Invalid!'))
				
		}
	}

	// }
});
