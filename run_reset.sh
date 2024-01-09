rm -f "db.sqlite3"

python manage.py makemigrations
python manage.py migrate

echo "from usersmodels import CustomUser; CustomUser.objects.create_superuser('nataliechan', 'natkuma@outlook.com, '1234')" | python manage.py shell

python manage.py generate_dummy_data