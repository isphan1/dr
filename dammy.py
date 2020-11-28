import os,django
# import requests,json,random

os.environ.setdefault('DJANGO_SETTINGS_MODULE','dr.settings')
django.setup()

from leads.models import Lead
from faker import Faker

def leads(N):
    fake = Faker()
    for _ in range(N):
        for _ in range(N):
            title = fake.sentence()
            body = fake.text()
            Lead.objects.create(title=title,body=body)


leads(20)