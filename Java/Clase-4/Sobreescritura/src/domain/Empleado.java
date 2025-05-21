/*
 Metodos de sobreescritura
La sobreescritura ocurre cuando la clase hija crea una escritura sobre el comportamiento de la clase padre.
 
Esta es la clase padre Empleado
*/
package domain;

//import java.security.ProtectionDomain;


public class Empleado {
    protected String nombre; 
    protected double sueldo;
    
    public Empleado(String nombre,double sueldo){
        this.nombre = nombre;
        this.sueldo= sueldo;
        }
    
    //Metodo para la sobreescritura
    public String obtenerDetalles(){
        return "Nombre: "+ this.nombre + ", Sueldo: "+this.sueldo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getSueldo() {
        return sueldo;
    }

    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }
    
    
}
