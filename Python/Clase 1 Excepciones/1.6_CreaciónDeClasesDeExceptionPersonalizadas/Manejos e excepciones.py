from NumerrosIgualesException import NumerosIgualesException
resultado = None
 
try:
   a= int(input("Ingrese el primer numero:"))
   b= int(input("Ingrese el segundo numero:"))
   if a == b:
       raise NumerosIgualesException("Son numeros iguales")  #raise Permite arojar cualñquier tipo de exception
   resultado = a/b  #Modificamos  
except TypeError as e:                                      # Clase Hija
      print(f"TypeError Ocurrio un error: {type(e)}")      
except ZeroDivisionError as e:                              # Clase Hija
    print(f"ZeroDivisionError Ocurrio un error: {type(e)}")                     
except Exception as e:                                      # Clase Padre
    print(f"Exception Ocurrio un error: {type(e)}")
else:
    print("No se arrojo ninguna excepcion")
finally: # Siempre se va a ejecutar
    print("Ejecuccion de este bloque fanally")

print(f"El resultado es : {resultado}")
print("seguimos .....")