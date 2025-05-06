resultado = None
a = 10 
b = 0

try:
    a/b  #Modificamos                        
except Exception as e:
    print(f"Ocurrio un error: {e}")

print(f"El resultado es : {resultado}")
print("seguimos .....")

resultado = None
a = 10 
b = 0


# Esto da error ya que tiene que ser entero y le estoy poniendo un string 
"""
 try:
    a/b  #Modificamos                        
except ZeroDivisionError as e:  
    print(f"Ocurrio un error: {e}")

print(f"El resultado es : {resultado}")
print("seguimos .....") 

"""