from django.urls import path
from .views import GetLeads
urlpatterns = [
    path('',GetLeads.as_view()),

]