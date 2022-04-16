from django.db import models

# Create your models here.
class Category(models.Model):
    categoryid = models.IntegerField
    name = models.TextField(max_length=50)
    
    def __str__(self):
        return self.name
    
class Product(models.Model):
    productid = models.IntegerField
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    unitprice = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.CharField(max_length=500)
    unitmeasurement = models.CharField(max_length=20)
    categoryid = models.ForeignKey(Category, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name
    
    def getCategoryId(self):
        return self.categoryId