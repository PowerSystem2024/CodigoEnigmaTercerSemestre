try:
    10/0                           # Clase Padre
except Exception as e:
    print(f"Ocurrio un error: {e}")


try:
    10/0                           # Clase Hija
except ZeroDivisionError as e:
    print(f"Ocurrio un error: {e}")