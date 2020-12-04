from django.urls import path
from .views import GetLeads,LeadDetailView,LeadCreateView
urlpatterns = [
    path('',GetLeads.as_view()),
    path('<int:id>',LeadDetailView.as_view()),
    path('create/',LeadCreateView.as_view()),

]