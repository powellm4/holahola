# HolaHola

If you receive an error issues installing mysqlclient via pipenv on Mac run the following command, 
env LDFLAGS="-L$(brew --prefix openssl)/lib" CFLAGS="-I$(brew --prefix openssl)/include" pipenv install mysqlclient
