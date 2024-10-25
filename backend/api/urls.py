# ルーティングに必要なモジュールをインポート
from django.urls import path, include
# REST FrameworkのDefaultRouterをインポート
from rest_framework.routers import DefaultRouter
# 作成したビューセットをインポート
# from .views import WordDataViewSet
from .views import WordDataView

# # ルーターを作成してビューセットを登録
# router = DefaultRouter()
# # 'words'というエンドポイントにWordDataViewSetを登録
# # ルーターにWordDataViewSetを登録し、/words/というURLパスでAPIにアクセスできるようにします
# router.register(r'words', WordDataViewSet)

urlpatterns = [
    # path('', include(router.urls)),
    path('wolfdata/', WordDataView.as_view())
]