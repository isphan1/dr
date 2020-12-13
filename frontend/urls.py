from django.urls import path,re_path
from . import views

urlpatterns = [
    path('', views.index),
    re_path('.*',views.index)
    # path('', views.Assets.as_view()),
    # re_path('.*',views.Assets.as_view())
]