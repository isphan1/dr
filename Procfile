release: python manage.py migrate
web: gunicorn dr.wsgi --log-file -
web: python manage.py runserver
