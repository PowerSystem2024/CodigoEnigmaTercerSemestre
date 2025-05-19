"""
Uso de with y psycopg2

www.psycopg.org/docs/usage.html
"""
import psycopg2

conexion = psycopg2.connect(user='postgres',password='admin',host='127.0.0.1',port='5432',database='test_db')

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona'
            cursor.execute(sentencia)   #  ejecutamos sentencia
            registros = cursor.fetchall()   # Recuperamos todos los registros que serán una lista
            print(registros)
except Exception as e:
    print(f'Ocurrio un error: {e}')
# cursor.close()    --> se cierra el llamado
finally:
    conexion.close()