from django.db import models


# Create your models here.
class User(models.Model):
	id = models.IntegerField(primary_key=True)
	first_name = models.TextField()
	last_name = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return '%s %s' % (self.first_name, self.last_name)