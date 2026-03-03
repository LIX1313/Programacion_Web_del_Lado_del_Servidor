#PARADIGMA FUNCIONAL
#Se centra en funciones puras, 
# evita estados globales y utiliza funciones como objetos.
# Función pura
def cuadrado(x):
    return x * x

numeros = [1,2,3,4,5]

# Uso de programación funcional
resultado = list(map(cuadrado, numeros))
print(resultado)

# Uso de lambda
pares = list(filter(lambda x: x % 2 == 0, numeros))
print(pares)

#3.1 Variables
nombre = "Luis"
edad = 20
activo = True
#3.2 Estructuras de Selección (if / switch)
if edad >= 18:
    print("Mayor de edad")
#3.3 Iteración (for y while)
for i in range(5):
    print(i)

contador = 0
while contador < 5:
    print(contador)
    contador += 1
#3.4 Funciones y Uso de Funciones
def sumar(a,b):
    return a+b

resultado = sumar(5,3)
print(resultado)

#1.3 Arreglos (Listas) – Uso Completo
#Declaración y acceso
numeros = [1,2,3,4]
print(numeros[0])
print(numeros[-1])  # Último elemento

#Slicing (sublistas)
print(numeros[1:3])
print(numeros[:2])
print(numeros[::2])

#Métodos principales
numeros.append(5)
numeros.insert(1,10)
numeros.remove(3)
numeros.pop()
numeros.sort()
numeros.reverse()

#Listas multidimensionales
matriz = [
    [1,2],
    [3,4]
]

print(matriz[0][1])

#List Comprehension
cuadrados = [x*x for x in numeros]

#Función simple
def saludar():
    print("Hola")

#Con parámetros y retorno
def suma(a,b):
    return a+b

#Parámetros por defecto
def potencia(base, exp=2):
    return base**exp

#Parámetros variables
def sumar_todo(*args):
    return sum(args)

#Funciones lambda
doble = lambda x: x*2

#Funciones de orden superior
numeros = [1,2,3]
resultado = list(map(lambda x: x*2, numeros))

saludar()
print(suma(8,9))
print(potencia(2,3))
print(sumar_todo(1,2,3,4))
