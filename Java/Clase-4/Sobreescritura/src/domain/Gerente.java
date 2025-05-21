/*
Clase Hija, continua de la clase padre Empleado.java
 */
package domain;

public class Gerente extends Empleado {
    private String departamento;
    
    public Gerente(String nombre, double sueldo, String departamento){
        super(nombre, sueldo);
        
        this.departamento = departamento;
    }
    
    //Sobreescribimos el metodo
    @Override
    public String obtenerDetalles(){
        return super.obtenerDetalles() + ", Departamento:  "+this.departamento;
    }
    // Desde aqui incluimos la sobreescritura para que sea visible el departamento desde la TestSobreescritura
    
    /*
    Entonces el output sería:
    run:
gerente1 = Nombre: Jose, Sueldo: 5000.0, Departamento:  Sistemas
BUILD SUCCESSFUL (total time: 0 seconds)
    */
}
