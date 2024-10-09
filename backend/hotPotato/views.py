from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def api_overview(request):
    return Response({"message": "Hellosssssssssssssssssss from Django"})
# Create your views here.
# views.py (Django)
from django.http import JsonResponse

def homepage_api(request):
    data = {
        "message": "Welcome to the Django and React App!",
        "features": [
            {"title": "Feature 1", "description": "Short description of feature 1."},
            {"title": "Feature 2", "description": "Short description of feature 2."},
            {"title": "Feature 3", "description": "Short description of feature 3."}
        ]
    }
    return JsonResponse(data)

