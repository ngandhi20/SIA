from django.shortcuts import render
from .models import Event
# Create your views here.

def event_detail_view(request):
    events = Event.objects.all().order_by('time')  # Get ALL events, ordered by date
    context = {
        'events': events,  # Pass the queryset to template
    }
    return render(request, "event/event_detail.html", context)
