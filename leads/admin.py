from django.contrib import admin
from .models import Lead
# Register your models here.
from django_summernote.admin import SummernoteModelAdmin

@admin.register(Lead)
# class LeadAdmin(admin.ModelAdmin):

#     list_display = ['title','created_at','updated_at']

class LeadAdmin(SummernoteModelAdmin):
    
    list_display = ['title','created_at','updated_at']