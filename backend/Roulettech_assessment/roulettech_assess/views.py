from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Todo
from .serializers import TodoSerializer

@api_view(['GET'])
def get_todos(request):
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_todo(request):
    serializer = TodoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        todos = Todo.objects.all()
        all_todos_serializer = TodoSerializer(todos, many=True)
        return Response(all_todos_serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['PUT'])
def update_todo(request, pk):
    todo = get_object_or_404(Todo, pk=pk)
    serializer = TodoSerializer(todo, data=request.data)
    if serializer.is_valid():
        serializer.save()
        todos = Todo.objects.all()
        all_todos_serializer = TodoSerializer(todos, many=True)
        return Response(all_todos_serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_todo(request, pk):
    todo = get_object_or_404(Todo, pk=pk)
    todo.delete()
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)