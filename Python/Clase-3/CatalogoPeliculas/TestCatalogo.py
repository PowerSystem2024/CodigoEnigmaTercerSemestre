from dominio.Pelicula import Pelicula
from servicio.CatalogoPeliculas import CatalogoPeliculas

opcion = None
while opcion != 4:
    try:
        print("Opciones: ")
        print("1 - Agregar película")
        print("2 - Listar películas")
        print("3 - Eliminar catálogo")
        print("4 - Salir")
        opcion = int(input("Escribe una opcion: "))

        if opcion == 1:
            nombre_pelicula = input("Proporciona el nombre de la película: ")
            pelicula = Pelicula(nombre_pelicula)
            CatalogoPeliculas.agregar_pelicula(pelicula)
        elif opcion == 2:
            CatalogoPeliculas.listar_peliculas()
        elif opcion == 3:
            CatalogoPeliculas.eliminar_peliculas()
    except Exception as e:
        print(f"Ocurrió un error: {e}")
        opcion = None
else:
    print("Programa cerrado")