"""
i = insertar
insertar registros con psycopg2
"""
import psycopg2
conexion = psycopg2.connect(user='postgres',password='admin',host='127.0.0.1',port='5432',database='test_db')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s,%s,%s)'
            valores = ('Carlos','Lara','clara@mail.com')
            cursor.execute(sentencia, valores)
            
            # conexion.commit()
            # Lo anterior no lo precisamos ya que el uso del with lo realiza

            registros_insertados = cursor.rowcount
            print(f'Los registros insertados son: {registros_insertados}')

            """
            Esto deberia arrojar:
            Los registros insertados son: 1
            """
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()
