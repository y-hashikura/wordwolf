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
    ("Beach", "Mountain"),
    ("Cat", "Dog"),
    ("Coffee", "Tea"),
    ("Summer", "Winter"),
    ("Pizza", "Burger"),
    ("Apple", "Orange"),
    ("Book", "Movie"),
    ("Car", "Bicycle"),
    ("Chocolate", "Vanilla"),
    ("Rainy Day", "Sunny Day"),
    ("Soccer", "Basketball"),
    ("Airplane", "Train"),
    ("Guitar", "Piano"),
    ("Spicy Food", "Sweet Food"),
    ("City", "Countryside"),
    ("Comedy", "Horror"),
    ("Morning Person", "Night Owl"),
    ("Ocean", "Lake"),
    ("Ice Cream", "Cake"),
    ("Smartphone", "Tablet"),
    ("Hiking", "Swimming"),
    ("Lion", "Tiger"),
    ("Rock Music", "Classical Music"),
    ("Sushi", "Pasta"),
    ("Sunrise", "Sunset"),
    ("Robots", "Aliens"),
    ("Kiss", "Hug"),
    ("Romantic Movie", "Thriller Movie"),
    ("Amazon", "Google"),
    ("Docter", "lawyer"),
    ("Police Officer", "Firefighter"),
    ("Doctor", "Nurse"),
    ("Manager", "Intern"),
    ("Pizza", "Pasta"),
    ("Introvert", "Extrovert"),
    ("Confident", "Shy"),
    ("First Crush", "Awkward Moment"),
    ("Awkward Silence", "Forgetting Someone's Name"),
    ("Sneezing", "Coughing"),
    ("Burping", "Farting"),
    ("Career Goals", "Life Goals"),
    ("Work-Life Balance", "Career Advancement"),
    ("Relationships", "Friendships"),
    ("Trapped in an Elevator", "Lost in a Foreign City"),
    ("Being Late to Your Own Wedding", "Having to Give a Speech Unexpectedly"),
    ("Running into an Ex at a Party", "Getting in wrong meeting room"),
    ("Finding Out You're Being Laid Off", "Handling a Customer Complaint"),
]