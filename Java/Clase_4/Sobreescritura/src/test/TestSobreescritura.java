/*
Continuamos lo realizado en Empleado.java y Gerente.java
 */
package test;

import domain.Gerente;

public class TestSobreescritura {
    public static void main(String[] args) {
        Gerente gerente1 = new Gerente("Jose", 5000, "Sistemas");
        System.out.println("gerente1 = " +gerente1.obtenerDetalles());
        // esto arroja = gerente1 = Nombre: Jose, Sueldo: 5000.0
        //BUILD SUCCESSFUL (total time: 0 seconds)
        
        //Si aparece Departamento, esta incluida en la sobreescritura de Gerente.java
    }
}
