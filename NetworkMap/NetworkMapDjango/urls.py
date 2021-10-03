from django.contrib import admin
from django.urls import path, include, re_path
from django.views.static import serve
from django.conf import settings
from django.shortcuts import render
from frontEnd.views import index

urlpatterns = [
    path('api/', include('Api.urls'), name='api'),
    path('', index, name='NetworkMap'),
]

if settings.DEBUG:
    urlpatterns.append(
        path('admin/', admin.site.urls, name='admin'),
    )
else:
    urlpatterns += (
        re_path(r'^static/(?P<path>.*)$', serve, { 'document_root': settings.STATIC_ROOT })
    )


