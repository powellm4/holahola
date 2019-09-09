# Setting up your development environment (Backend):


### Database 

1. Install MySQL:
Preferably, install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/), 
this is a GUI that will make it easier to interact with the database. 
MySQL can also be installed and interacted with via the command line.

2. Set up user 'root' with blank password ( password: '' )

3. Create database 'holahola'


----------------------------------------------------


### API: Python/Django 

1. Install [PyCharm](https://www.jetbrains.com/pycharm/download/) ( not required, but a good IDE for Python development )

2. Install [python3](https://realpython.com/installing-python/) globally

3. Install [pipenv](https://docs.pipenv.org/en/latest/install/) globally

4. In the PyCharm Terminal ( or any terminal/command line ) navigate to
  holahola/apps/backend and run `pipenv install`

    - If you receive an error installing mysqlclient via pipenv on Mac, run the following command:
  `env LDFLAGS="-L$(brew --prefix openssl)/lib" CFLAGS="-I$(brew --prefix openssl)/include" pipenv install mysqlclient`

5. Initialize the data by running `python manage.py migrate`

6. Test your backend by running `python manage.py runserver`
  In your browser, navigate to http://127.0.0.1:8000/
