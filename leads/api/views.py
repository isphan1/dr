from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.mixins import RetrieveModelMixin,CreateModelMixin
from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView
from .serializers import LeadSerializer, UserSerializer
from leads.models import Lead
from django.contrib.auth.models import Permission, User
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny,IsAuthenticated,IsAuthenticatedOrReadOnly
from django.core.exceptions import ValidationError
from .utils import jwt_response_payload_handler
from rest_framework_jwt.settings import api_settings


jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER

class GetLeads(ListAPIView,RetrieveModelMixin):
    
    permission_classes = [IsAuthenticated]
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class LeadDetailView(RetrieveAPIView):

    serializer_class = LeadSerializer
    queryset = Lead.objects.all()
    lookup_field = 'id'
    
class LeadCreateView(CreateAPIView,CreateModelMixin):
    
    permission_classes = [IsAuthenticated]
    serializer_class = LeadSerializer
    queryset = Lead.objects.all()

class UserCreateView(CreateAPIView,CreateModelMixin):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]

    def post(self,request,*args,**kwargs):
        return self.create(request,*args,**kwargs)


@api_view(['POST'])
def isUsernameExists(request):

    data = JSONParser().parse(request)
    serializer = UserSerializer(data=data)
    val = User.objects.filter(username__iexact=data['username'])

    if val: 
            return Response({'username':'This username is already taken'})
    else:
        return Response({'username':'Available'})


@api_view(['POST'])
def isUsernameInvalid(request):

    data = JSONParser().parse(request)
    val = User.objects.filter(username__iexact=data['username'])

    if not val: 
            return Response({'username':'Oops! Username is incorrect'})
    else:
            return Response({'username':'This username is valid'})

@api_view(['POST'])
def singIn(request):

    data = JSONParser().parse(request)

    username  = data['username']
    password  = data['password']

    user = authenticate(username=username,password=password)

    if user:
    
            payload = jwt_payload_handler(user)
            token = jwt_encode_handler(payload)
            response = jwt_response_payload_handler(token,user,request=request)

            return Response(response)

    else:
        return Response({"msg":'Incorrect username or password. please try again !'},status=401)
