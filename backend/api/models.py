from django.db import models

class WordData(models.Model):
    wolf_word = models.CharField(max_length=100)
    normal_word = models.CharField(max_length=100)
    
    def __str__(self):
        return f'{self.normal_word}:{self.wolf_word}'

