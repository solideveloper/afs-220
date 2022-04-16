from django.urls import path
from . import views
app_name = "product"
urlpatterns = [
    path('', views.show_all_products),
    path('<int:prodid>', views.show_product),
    path('<str:catname>', views.show_category_products)
]