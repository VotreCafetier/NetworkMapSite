from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from frontEnd.views import index
from django.conf.urls.static import  static

urlpatterns = [
    path('api/', include('Api.urls'), name='api'),
    path('', index, name='NetworkMap')
]

if settings.DEBUG:
    urlpatterns.append(
        path('admin/', admin.site.urls, name='admin')
    )
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)