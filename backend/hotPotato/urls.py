from django.urls import path
from .views import api_overview  # Import your view function

urlpatterns = [
    path('api/', api_overview),  # Define your endpoint here
]