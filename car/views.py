from django.shortcuts import render

def cars(request):
    return render(request, 'car/choose_car.html', {})
