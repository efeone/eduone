frappe.pages['student-application'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Student Application',
		single_column: true
	});
}