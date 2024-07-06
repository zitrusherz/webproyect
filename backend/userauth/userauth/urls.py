from django.contrib import admin
from django.urls import path, include
from datagames import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('datagames/api/games/', views.game_list, name='game-list'),
]
