"""
Transacciones

Una transaccion es cuando queremos ejecutar multiples transacciones a la base de datos
Estas consultas, pueden modificar el estado de la base de datos


"""

import psycopg2 as bd

conexion = bd.connect(user='postgres',password='admin',host='127.0.0.1',port='5432',database='test_db')
try:
    conexion.autocommit = False
    # con commit se guardan los cambios
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre,apellido,email) VALUES (%s,%s,%s)'
    valores = ('Maria','Esparza','mesparza@mail.com')
    cursor.execute(sentencia,valores)
    print('Termina la transacción')

    """
    ESTO ARROJARA EL PRINT PERO NO GUARDARÁ CAMBIOS EN LA BASE POR EL AUTOCOMMIT
    """
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()

