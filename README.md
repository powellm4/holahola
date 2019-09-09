# holahola


Setting up your development environment:

	Backend:
	
		----- Database -----
		
		-Install MySQL:
			Preferably, install MySQL Workbench (https://dev.mysql.com/downloads/workbench/), 
			this is a GUI that will make it easier to interact with the database. 
			MySQL can also be installed and interacted with via the command line.
		
		-Set up user 'root' with blank password ( password: '' )
		
		-Create database 'holahola'
		
		
		
		
		----- API: Python/Django -----
		
		-Install PyCharm ( not required, but a good IDE for Python development )
			(https://www.jetbrains.com/pycharm/download/)
			
		-Install python3 globally
		
		-Install pipenv globally
		
		-In the PyCharm Terminal ( or any terminal/command line ) navigate to
			holahola/apps/backend and run 'pipenv install'
		
			If you receive an error installing mysqlclient via pipenv on Mac, run the following command:
			env LDFLAGS="-L$(brew --prefix openssl)/lib" CFLAGS="-I$(brew --prefix openssl)/include" pipenv install mysqlclient
			
		-Initialize the data by running 'python manage.py migrate'
		
		-Test your backend by running 'python manage.py runserver'
			In your browser, navigate to http://127.0.0.1:8000/
