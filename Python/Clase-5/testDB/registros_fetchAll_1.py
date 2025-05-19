"""
uso de fetchAll parte 1
"""
import psycopg2
conexion = psycopg2.connect(user='postgres',password='admin',host='127.0.0.1',port='5432',database='test_db')

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona WHERE id_persona IN (1,2)'
            id_persona = input('Digite un numero para el id_persona: ')
            cursor.execute(sentencia,(id_persona,))   #  ejecutamos sentencia
            registros = cursor.fetchall()   # Recuperamos registros
            for registro in registros:
                print("Mostrará todas las tuplas 2 veces: ",registros)
                print("Mostrara cada tupla ordenada: ",registro)

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()