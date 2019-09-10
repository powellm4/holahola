from django.db import models

# Create your models here.
from django.db import models


class Language(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = "Language"
        verbose_name_plural = "Languages"

    def __unicode__(self):
        return self.name

    def __str__(self):
        return self.name


class Holero(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    languages = models.ManyToManyField(Language)

    class Meta:
        verbose_name = "Holero"
        verbose_name_plural = "Holeros"

    def __unicode__(self):
        return '%s %s' % (self.first_name, self.last_name)

    def __str__(self):
        return '%s %s' % (self.first_name, self.last_name)
