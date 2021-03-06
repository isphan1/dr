from django.db import models
from django.db.models import fields
from rest_framework import serializers
from leads.models import Lead

from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.response import Response
from django.contrib.auth import authenticate


from .utils import jwt_response_payload_handler
from rest_framework_jwt.settings import api_settings

jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER


User = get_user_model()

class LeadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lead
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):

    username = serializers.CharField(style={'input_type':'text'},write_only=True)
    # email = serializers.CharField(style={'input_type':'text'},write_only=True)
    password = serializers.CharField(style={'input_type':'password'},write_only=True)
    token_response = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['username','password','token_response']
        extra_kwargs = {'passwrod':{'write_only':True}}

    def get_token_response(self,obj):
        user = obj
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        response = jwt_response_payload_handler(token,user,request=None)

        return response

    def validate_username(self,value):
        qs = User.objects.filter(username__iexact=value)
        print(value)
        if qs.exists():
            raise serializers.ValidationError('This username is already taken')
        return value

    # def validate_email(sefl,value):
    #     qs = User.objects.filter(email__iexact=value)
    #     if qs.exists():
    #         raise serializers.ValidationError('This email is already taken')
    #     return value

    def create(self,validate_data):
        username = validate_data.get('username')

        # email = validate_data.get('email')
        password = validate_data.get('password')
        user = User(username=username)
        # user = User(username=username,email=email)
        user.set_password(password)
        user.save()

        return user