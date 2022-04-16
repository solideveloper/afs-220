from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

from .models import Product
def show_all_products(request):
    products = Product.objects.all()
    return HttpResponse(products)

def show_category_products(request,catname):
    try: 
        products = Product.objects.filter(categoryid_name_iexact = catname)
        print(products.query)
        for product in products:
            print(product)
        if products.count() > 0:
            return HttpResponse(f'<h1>Display all the products of type {catname}<h1/>')
        else:
            return HttpResponse(f'<h1>Unable to locate in database of {catname}<h1/>')
    except:
        return HttpResponse(f'<h1>Unable to locate {catname}<h1/>')

def show_product(request,prodid):
    try: 
        product = Product.objects.get(id=prodid)
        return HttpResponse(f'<h1> Showing more details for "{product}"<h1/>')
    except Product.DoesNotExist:
        return HttpResponse(f'<h1>Unable to locate product id no. {prodid}<h1/>')