"""
actualizar varios registros con psycopg2
"""
import psycopg2
conexion = psycopg2.connect(user='postgres',password='admin',host='127.0.0.1',port='5432',database='test_db')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'

            valores = (
                ('Juan','Perez','jperez@mail.com', 2),
                ('Toribia','Tinelli', 'ttinelli@mail.com', 3)
            )

            cursor.executemany(sentencia, valores)
            # recordar que si los elementos son varios, se debe agregar many siempre
            registros_actualizados = cursor.rowcount
            print(f'Los registros actualizados son: {registros_actualizados}')

            """
            Esto deberia arrojar:
            Los registros actualizados son: 2
            """
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()