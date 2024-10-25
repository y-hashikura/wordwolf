# シリアライザの作成

# Django REST Frameworkのシリアライザをインポート
from rest_framework import serializers
# 既存のWordDataモデルをインポート
from .models import WordData

# モデルシリアライザを定義
class WordDataSerializer(serializers.ModelSerializer):
    # ModelSerializerを継承
    # ModelSerializerは、Djangoモデルのフィールドをそのままシリアライズするための簡便なシリアライザ 
    class Meta:
        # シリアライズ対象のモデルを指定
        model = WordData 
        # ウルフワードと通常ワードをフィールド指定
        fields = ['wolf_word', 'normal_word']