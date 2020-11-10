from rest_framework.mixins import RetrieveModelMixin
from rest_framework.generics import ListAPIView
from .serializers import LeadSerializer
from leads.models import Lead

class GetLeads(ListAPIView,RetrieveModelMixin):

    queryset = Lead.objects.all()
    serializer_class = LeadSerializer