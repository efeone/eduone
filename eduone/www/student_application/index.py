from __future__ import unicode_literals
import frappe, json
from frappe import _
from frappe.model.document import Document
from frappe.utils import get_url

def get_context(context):
    context.show_search = True

@frappe.whitelist(allow_guest=True)
def create_student_application(first_name, middle_name, last_name, prefered_course, gender, date_of_birth, aadhar_number, student_email_id, community_details, mobile, religion, address_line_1, address_line_2, pincode, district, thaluk, village, father_name, is_father_alive, mother_name, is_mother_alive, guardian_name, occupation_, scheme, month_pass, registration_number, year_pass, first_language_1, first_language_2, _english, hindi, social_science, biology, physics, chemistry, mathematics, information_technology, participation_in_sports, participation_in_arts, panchayat, other, state, student_mobile_number, boards_syllabus, country, language_1, language_2, mathematics_cbse, science_cbse, social_science_cbse):
    print("testtttttttttttttttt")
    application = frappe.new_doc('Student Applicant')
    application.first_name = first_name
    application.middle_name = middle_name
    application.last_name = last_name
    application.prefered_course = prefered_course
    application.gender = gender
    application.date_of_birth = date_of_birth
    application.aadhar_number = aadhar_number
    application.student_email_id = student_email_id
    application.community_details = community_details
    application.mobile = mobile
    application.religion = religion
    application.address_line_1 = address_line_1
    application.address_line_2 = address_line_2
    application.pincode = pincode
    application.district = district
    application.thaluk = thaluk
    application.village = village
    application.father_name = father_name
    application.is_father_alive = is_father_alive
    application.mother_name = mother_name
    application.is_mother_alive = is_mother_alive
    application.guardian_name = guardian_name
    application.occupation_ = occupation_
    application.scheme = scheme
    application.month_pass = month_pass
    application.registration_number = registration_number
    application.year_pass = year_pass
    application.first_language_1 = first_language_1
    application.first_language_2 = first_language_2
    application._english = _english
    application.hindi = hindi
    application.social_science = social_science
    application.biology = biology
    application.physics = physics
    application.chemistry = chemistry
    application.mathematics = mathematics
    application.information_technology = information_technology
    application.participation_in_sports = participation_in_sports
    application.participation_in_arts = participation_in_arts
    application.panchayat = panchayat
    application.other = other
    application.state = state
    application.student_mobile_number = student_mobile_number
    application.boards_syllabus = boards_syllabus
    application.country = country
    application.language_1 = language_1
    application.language_2 = language_2
    application.mathematics_cbse = mathematics_cbse
    application.science_cbse = science_cbse
    application.social_science_cbse = social_science_cbse
    application.flags.ignore_mandatory=True
    application.save(ignore_permissions=True)
    return 1
