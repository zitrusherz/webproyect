from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    path('register/', csrf_exempt(views.register), name='register'),
    path('login/', csrf_exempt(views.user_login), name='user_login'),
    path('delete_user/', csrf_exempt(views.delete_user), name='delete_user'),
    path('update_user/', csrf_exempt(views.update_user), name='update_user'),
]
