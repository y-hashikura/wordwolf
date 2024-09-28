from rest_framework import viewsets
from .models import Product  # モデルをインポート
from .serializers import ProductSerializer  # シリアライザをインポート

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer