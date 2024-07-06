from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from .models import User
import json
from django.contrib.auth.hashers import make_password, check_password

@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if not (username and email and password):
            return JsonResponse({'message': 'Missing fields'}, status=400)

        if User.objects.filter(email=email).exists() or User.objects.filter(username=username).exists():
            return JsonResponse({'message': 'User or email already exists'}, status=400)

        encrypted_password = make_password(password)
        User.objects.create(username=username, email=email, password=encrypted_password)
        return JsonResponse({'message': 'User created successfully'})

@csrf_exempt
def user_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        if not (username and password):
            return JsonResponse({'error': 'Por favor, ingrese un nombre de usuario y contraseña'}, status=400)

        try:
            user = User.objects.get(username=username)
            if check_password(password, user.password):
                return JsonResponse({'message': 'Inicio de sesión exitoso', 'user': {'username': user.username, 'email': user.email}})
            else:
                return JsonResponse({'error': 'Nombre de usuario o contraseña incorrectos'}, status=400)

        except User.DoesNotExist:
            return JsonResponse({'error': 'Nombre de usuario o contraseña incorrectos'}, status=400)

    return JsonResponse({'error': 'Método no permitido'}, status=405)

@csrf_exempt
def delete_user(request):
    if request.method == 'DELETE':
        data = json.loads(request.body)
        username = data.get('username')

        if not username:
            return JsonResponse({'message': 'Username is required'}, status=400)

        try:
            user = User.objects.get(username=username)
            user.delete()
            return JsonResponse({'message': 'User deleted successfully'})
        except User.DoesNotExist:
            return JsonResponse({'message': 'User does not exist'}, status=404)

    return JsonResponse({'error': 'Método no permitido'}, status=405)

@csrf_exempt
def update_user(request):
    if request.method == 'PUT':
        data = json.loads(request.body)
        username = data.get('username')
        current_password = data.get('current_password')
        new_username = data.get('new_username')
        new_email = data.get('new_email')
        new_password = data.get('new_password')

        if not (username and current_password):
            return JsonResponse({'message': 'Username and current password are required'}, status=400)

        try:
            user = User.objects.get(username=username)

            if not check_password(current_password, user.password):
                return JsonResponse({'message': 'Current password is incorrect'}, status=400)

            if new_username and new_username != user.username:
                if User.objects.filter(username=new_username).exists():
                    return JsonResponse({'message': 'New username already exists'}, status=400)
                user.username = new_username

            if new_email:
                if User.objects.filter(email=new_email).exists() and new_email != user.email:
                    return JsonResponse({'message': 'New email already exists'}, status=400)
                user.email = new_email

            if new_password:
                user.password = make_password(new_password)

            user.save()
            return JsonResponse({'message': 'User updated successfully'})
        except User.DoesNotExist:
            return JsonResponse({'message': 'User does not exist'}, status=404)

    return JsonResponse({'error': 'Método no permitido'}, status=405)
