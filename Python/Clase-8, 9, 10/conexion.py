from logger_base import log
from psycopg import connect
from psycopg_pool import ConnectionPool
import sys

class Conexion:
    _DATABASE = "test_db"
    _USERNAME = "postgres"
    _PASSWORD = "admin"
    _DB_PORT = 5432
    _HOST = "127.0.0.1"
    _MIN_CON = 1
    _MAX_CON = 5
    _pool = None

    @classmethod
    def obtenerPool(cls):
        if cls._pool is None:
            try:
                conninfo = (
                    f"host={cls._HOST} "
                    f"dbname={cls._DATABASE} "
                    f"user={cls._USERNAME} "
                    f"password={cls._PASSWORD} "
                    f"port={cls._DB_PORT}"
                )

                cls._pool = ConnectionPool(conninfo=conninfo, max_size=5)
                log.debug(f"Creación del pool exitosa: {cls._pool}")
                return cls._pool
            except Exception as e:
                log.error(f"Ocurrió un error al obtener el pool: {e}")
                sys.exit()

    @classmethod
    def obtenerConexion(cls):
        conexion = cls.obtenerPool().getconn()
        log.debug(f"Conexión obtenida del pool: {conexion}")
        return conexion



if __name__ == "__main__":
    conexion1 = Conexion.obtenerConexion()
    conexion2 = Conexion.obtenerConexion()