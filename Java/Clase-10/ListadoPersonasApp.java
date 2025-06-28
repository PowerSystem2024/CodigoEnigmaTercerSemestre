import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Persona> personas = new ArrayList<>();

        var salir = false;
        while(!salir){
            mostrarMenu();
            try {
                salir = ejecutarOperacion(entrada, personas);
            } catch (Exception e) {
                System.out.println("Error: " + e.getMessage());
            }
        }

    }

    private static void mostrarMenu() {
        System.out.print( """
                ***** Listado de Personas *****
                1. Agregar
                2. Listar 
                3. Salir
                """
        );
        System.out.print("Seleccione una opción: ");
    }

    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas) {
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;

        switch (opcion) {
            case 1 -> {
              System.out.print("Digite el nombre: ");
              var nombre = entrada.nextLine();
              
              System.out.print("Digite el teléfono: ");
                var telefono = entrada.nextLine();

                System.out.print("Digite el correo: ");
                var correo = entrada.nextLine();

                var persona = new Persona(nombre, telefono, correo);

                personas.add(persona);
                System.out.println("La lista tiene " + personas.size() + " personas.");
            }

            case 2 -> {
                System.out.println("Listado de Personas:");
                personas.forEach(System.out::println);
                }

            case 3 -> {
                System.out.println("Saliendo de la aplicación...");
                salir = true;
            }
            default -> System.out.println("Opción no válida. Intente de nuevo.");
        }
        return salir;
    }

}
