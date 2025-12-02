# Models are defined in octofitapp/models.py
from djongo import models


class Team(models.Model):
    name = models.CharField(max_length=100, unique=True)
    def __str__(self):
        return self.name
    class Meta:
        app_label = 'octofitapp'


class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    class Meta:
        app_label = 'octofitapp'


class Activity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=50)
    duration = models.IntegerField()  # minutes
    def __str__(self):
        return f"{self.user.name} - {self.type}"
    class Meta:
        app_label = 'octofitapp'


class Workout(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    def __str__(self):
        return self.name
    class Meta:
        app_label = 'octofitapp'


class Leaderboard(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    points = models.IntegerField()
    def __str__(self):
        return f"{self.team.name}: {self.points}"
    class Meta:
        app_label = 'octofitapp'
