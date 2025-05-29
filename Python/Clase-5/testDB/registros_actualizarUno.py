"""
actualizar un registro con psycopg2
"""
import psycopg2
conexion = psycopg2.connect(user='postgres',password='admin',host='127.0.0.1',port='5432',database='test_db')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'

            valores = ('Juan Carlos','Roldan','rcarlos@mail.com',1)

            cursor.execute(sentencia, valores)
            registros_actualizados = cursor.rowcount
            print(f'Los registros actualizados son: {registros_actualizados}')

            """
            Esto deberia arrojar:
            Los registros actualizados son: 1
            """
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()