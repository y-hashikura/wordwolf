from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from .models import WordData
import random

class WordDataView(APIView):
    """
    ワードウルフデータ取得クラスベースビュー
    """
    def get(self, request: Request , *args: tuple, **kwargs: dict):
        
        wolf_count = request.GET.get('wolf')
        normal_count = request.GET.get('normal')

        # ランダムに1レコードを取得
        random_record = WordData.objects.order_by('?').first()

        if random_record is None:
            return Response({"error": "No data found"}, status=404)
        
        if wolf_count and normal_count:
            wolf_list = [random_record.wolf_word for _ in range(int(wolf_count))]
            normal_list = [random_record.normal_word for _ in range(int(normal_count))]
            combined_list = wolf_list + normal_list
            random.shuffle(combined_list)

            return Response(combined_list)
        else:
            return Response(["test", "test", "test"])