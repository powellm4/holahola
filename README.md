# Setting up your development environment (Backend):

### Database

1. Install MySQL:
   Preferably, install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/),
   this is a GUI that will make it easier to interact with the database.
   MySQL can also be installed and interacted with via the command line.

2. Set up user 'root' with blank password ( password: '' )

3. Create database 'holahola'

---

### API: Python/Django

1. Install [PyCharm](https://www.jetbrains.com/pycharm/download/) ( not required, but a good IDE for Python development )

2. Install [python3](https://realpython.com/installing-python/) globally

3. Install [pipenv](https://docs.pipenv.org/en/latest/install/) globally

4. In the PyCharm Terminal ( or any terminal/command line ) navigate to
   holahola/apps/backend and run `pipenv install`

   - If you receive an error installing mysqlclient via pipenv:
     - Mac: run the following command:
       `env LDFLAGS="-L$(brew --prefix openssl)/lib" CFLAGS="-I$(brew --prefix openssl)/include" pip install mysqlclient`
     - Windows: (hacky, but necessary for some reason)
       - [download the binary for mysqlclient](https://www.lfd.uci.edu/~gohlke/pythonlibs/#mysqlclient)
         - download "mysqlclient-1.4.4-cp37-cp37m-win32.whl"
       - navigate to where you installed it and run :`pip install mysqlclient-1.4.4-cp37-cp37m-win32.whl`

5. Initialize the data by running `python manage.py migrate`\*

6. Test your backend by running `python manage.py runserver`\*
   In your browser, navigate to http://127.0.0.1:8000/

\* - It may be necessary to run any `python ..` commands as `python3 ..` depending on
how you have python installed and setup in your environment variables

### Frontend: Angular / Nx Workspace

1. Run 'git submodule update --init --recursive'
2. Run 'npm install'
3. Run 'ng serve'
4. Navigate to 'localhost:4200'
