from rest_framework.mixins import RetrieveModelMixin,CreateModelMixin
from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView
from .serializers import LeadSerializer
from leads.models import Lead

class GetLeads(ListAPIView,RetrieveModelMixin):

    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class LeadDetailView(RetrieveAPIView):

    serializer_class = LeadSerializer
    queryset = Lead.objects.all()
    lookup_field = 'id'
class LeadCreateView(CreateAPIView,CreateModelMixin):
    
    serializer_class = LeadSerializer
    queryset = Lead.objects.all()