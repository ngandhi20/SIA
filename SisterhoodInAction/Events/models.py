from django.db import models

# Create your models here.

class Event(models.Model):
    title       = models.CharField(max_length = 30)
    time        = models.DateTimeField(blank = True, null = True)
    price       = models.DecimalField(decimal_places=2, max_digits=100)
    description = models.TextField(blank = True, null = True)
    location    = models.TextField(null = True)
    capacity    = models.PositiveIntegerField()
    confirmed   = models.BooleanField(default = False)