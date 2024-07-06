from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Game
import json

@csrf_exempt
def game_list(request):
    if request.method == 'GET':
        games = Game.objects.all()
        data = list(games.values())
        return JsonResponse(data, safe=False)
    
    elif request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        category = data.get('category')
        price = data.get('price')
        if not (name and category and price):
            return JsonResponse({'message': 'Campos faltantes'}, status=400)

        game_id = f"{name[:3].lower()}{str(price)[:2]}{category[-1].lower()}"

        Game.objects.create(name=name, category=category, price=price, game_id=game_id)

        return JsonResponse({'message': 'Juego añadido correctamente'})

    elif request.method == 'DELETE':
        ids_to_delete = [171]

        try:
            deleted_count, _ = Game.objects.filter(id__in=ids_to_delete).delete()
            return JsonResponse({'message': f'Se eliminaron {deleted_count} juegos correctamente'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Método no permitido'}, status=405)
