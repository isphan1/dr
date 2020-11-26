from django.urls import path
from .views import GetLeads,LeadDetailView
urlpatterns = [
    path('',GetLeads.as_view()),
    path('<int:id>',LeadDetailView.as_view()),

]