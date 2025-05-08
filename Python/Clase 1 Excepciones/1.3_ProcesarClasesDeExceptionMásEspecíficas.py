resultado = None
a = 7 
b = 5

try:
   resultado = a/b  #Modificamos  
except TypeError as e:                                      # Clase Hija
      print(f"TypeError Ocurrio un error: {type(e)}")      
except ZeroDivisionError as e:                              # Clase Hija
    print(f"ZeroDivisionError Ocurrio un error: {type(e)}")                     
except Exception as e:                                      # Clase Padre
    print(f"Exception Ocurrio un error: {type(e)}")

print(f"El resultado es : {resultado}")
print("seguimos .....")
