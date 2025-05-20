"""
Transacciones - parte2
"""

import psycopg2 as bd

conexion = bd.connect(user='postgres',password='admin',host='127.0.0.1',port='5432',database='test_db')
try:
    # conexion.autocommit = False ==> esto no deberia estar
    # con commit se guardan los cambios
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre,apellido,email) VALUES (%s,%s,%s)'
    valores = ('Maria','Esparza','mesparza@mail.com')
    cursor.execute(sentencia,valores)
    print('Termina la transacción')
    conexion.commit()   #Hacemos el commit manualmente
    print('Aqui se guardaron los cambios')
    
except Exception as e:
    conexion.rollback()
    # Si se ejecuta mal lo anterior, hará un rollback y dejara la base como estaba
    print(f'Fallo, Se hizo un rollback, ocurrio un error: {e}')
finally:
    conexion.close()

