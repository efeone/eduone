from __future__ import unicode_literals
import frappe, json
from frappe import _
from frappe.model.document import Document
from frappe.utils import get_url

def get_context(context):
    context.show_search = True

@frappe.whitelist(allow_guest=True)
def create_student_applicantion(arg):
    print("xxxxxxxxxxxxxxxxxxxxxxx")
    pass