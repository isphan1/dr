from django.shortcuts import render
from django.http.response import HttpResponse,HttpResponseNotFound
from django.views import View

def index(request):
    return HttpResponse("<h1>Myupwork Backend<h1>")

# class Assets(View):
    
#     def get(self, _request, filename):
#         path = os.path.join(os.path.dirname(__file__), 'build', filename)

#         if os.path.isfile(path):
#             with open(path, 'rb') as file:
#                 return HttpResponse(file.read(), content_type='application/javascript')
#         else:
#             return HttpResponseNotFound()