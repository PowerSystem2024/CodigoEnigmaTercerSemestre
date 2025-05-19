"""
uso de fetchOne
"""
import psycopg2
conexion = psycopg2.connect(user='postgres',password='admin',host='127.0.0.1',port='5432',database='test_db')

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT id_persona, nombre FROM persona'
            cursor.execute(sentencia)   #  ejecutamos sentencia
            registros = cursor.fetchone()   # Recuperamos todos los registros que serán una lista
            print("Soy un registro: ",registros)
            sentencia2 = 'SELECT * FROM persona WHERE id_persona = 1'
            cursor.execute(sentencia2)   # ejecutamos sentencia
            registros2 = cursor.fetchone()   # Recuperamos todos los registros que serán una lista
            print("Soy un registro distinto: ",registros2)
            sentencia3 = 'SELECT * FROM persona WHERE id_persona = %s'  #placeholder
            id_persona = 1
            cursor.execute(sentencia3,(id_persona,))   # ejecutamos sentencia y la variable establecida en el placeholder
            registros3 = cursor.fetchone()   # Recuperamos todos los registros en una lista
            print("Soy parametro establecido por un placeholder ",registros2)
            sentencia4 = 'SELECT * FROM persona WHERE id_persona = %s'  #placeholder
            id_persona = input('Digite un numero para el id_persona: ')
            cursor.execute(sentencia4,(id_persona,))   # lo mismo pero con input
            registros4 = cursor.fetchone()   # Recuperamos todos los registros en una lista
            print("Soy parametro establecido por un placeholder ",registros2)
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()

