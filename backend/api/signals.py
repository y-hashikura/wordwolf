# app_name/signals.py
from django.db.models.signals import post_migrate
from django.dispatch import receiver
from .models import WordData

@receiver(post_migrate)
def add_fixed_data(sender, **kwargs):
    for wolf_word, nornal_word in get_wolf_ant_normal():
        WordData.objects.update_or_create(wolf_word=wolf_word, normal_word=nornal_word)
        
def get_wolf_ant_normal():
    return [
        ("ジェラート", "アイスクリーム"),
        ("プール", "海"),
        ("新幹線", "飛行機"),
        ("ラーメン", "スパゲッティ"),
        ("カナダ", "アメリカ"),
        ("ハイボール", "ビール"),
        ("ディズニーランド", "ユニバ"),
        ("ドラえもん", "アンパンマン"),
        ("クリスマス", "ハロウィン"),
        ("焼肉", "ステーキ"),
    ]