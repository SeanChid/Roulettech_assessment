from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'List': '/task-list'
    }
    return Response(api_urls)
# Create your views here.
