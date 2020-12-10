from django.urls import path
from rest_framework_jwt.views import refresh_jwt_token
from .views import (GetLeads,LeadDetailView,LeadCreateView,
                    UserCreateView,isUsernameExists,isUsernameInvalid, singIn)
urlpatterns = [
    path('',GetLeads.as_view()),
    path('<int:id>',LeadDetailView.as_view()),
    path('create/',LeadCreateView.as_view()),
    path('singup/',UserCreateView.as_view()),
    path('singin/',singIn),
    path('username/',isUsernameExists),
    path('invalid/',isUsernameInvalid),
    path('refresh/', refresh_jwt_token),


]