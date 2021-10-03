from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.shortcuts import render
from frontEnd.views import index

urlpatterns = [
    path('api/', include('Api.urls'), name='api'),
    path('', index, name='NetworkMap')
]

if settings.DEBUG:
    urlpatterns.append(
        path('admin/', admin.site.urls, name='admin'),
    )
else:
    urlpatterns.append(
        path('static/', admin.site.urls, name='admin'),
    )


