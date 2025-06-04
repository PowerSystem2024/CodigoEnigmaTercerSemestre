"""
uso de fetchAll parte 2
"""
import psycopg2
conexion = psycopg2.connect(user='postgres',password='admin',host='127.0.0.1',port='5432',database='test_db')

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s'
            # llaves_primarias = ((1,2,3),)
            entrada = input('Digite los id_pesona a buscar (separados por coma): ')
            llaves_primarias = (tuple(entrada.split(',')),)   
            # metodo split para separar con coma cada entrada
            cursor.execute(sentencia, llaves_primarias)
            registros = cursor.fetchall()   # Recuperamos registros
            for registro in registros:
                print(registro)
                # se ejecutará igual que el anterior sin problemas
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()

