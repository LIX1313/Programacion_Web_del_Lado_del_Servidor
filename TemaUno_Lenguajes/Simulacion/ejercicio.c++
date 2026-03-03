#include <iostream>
#include <cmath>
#include <string> //Para función con string
#include <vector>
using namespace std;

// Parte 7 Funciones
// Prototitpo de Función
void nombre(string valor);
int sumar(int a, int b);

int main()
{
    /*
    // Parte 1 Inicio
    cout << "2 + 2" << endl
         << 2 + 2 << endl;
    int numero_entero = 8;
    float numero_flotante = 10.5;
    char ejemplo = 'a';
    cout << "Número entero:" << numero_entero << endl
         << "Numéro flotante: " << numero_flotante;
    cout << endl
         << "Letra: " << ejemplo;
    // Parte 2 Operadores

    int a = 8, b = 2, suma;
    suma = a + b;
    cout << endl
         << "El resultado es: " << a + b;
    cout << endl
         << "La suma es: " << suma;

    int c = 10;
    int resultado_c_mas, resultado_c_menos;

    // Incremento a la variable a
    resultado_c_mas = ++c;
    resultado_c_menos = --c;
    cout << endl
         << "Ahora la variable es: " << resultado_c_mas << endl
         << "La resta es:" << resultado_c_menos;
    // Ingreso de datos
    int n1, n2, suma2;
    cout << endl << "Ingrese un numero: ";
    cin >> n1;
    cout << endl
         << "Ingrese otro numero: ";
    cin >> n2;
    suma2 = n1 + n2;
    cout << endl
         << "La suma es: " << suma2 << endl;
    // Area de triangulo
    int base, altura, area;
    cout << "Ingrese la base del triangulo: ";
    cin >> base;
    cout << "Ingrese la altura del triangulo: ";
    cin >> altura;
    area = (base * altura) / 2;
    cout << endl
         << "El area del Triangulo es: " << area;
    //Radio y volumen
    int radio, volumen;
    const float PI = 3.1416;
    cout<< endl << "Ingrese el radio: ";
    cin >>radio;
    volumen = (4 * PI * pow(radio, 3))/3;
    cout<< endl << "El volumen es: " <<volumen;
    */
    // Parte 3 condicionales
    /*int numero;

    cout << "Ingrese un numero: ";
    cin>> numero;

    if (numero > 0)
    {
        cout << "El numero es positivo";
    }
    else if (numero == 0){
        cout << "El numero es 0";
    }
    else{
        cout << "El numero es negativo";
    } */

    /*

    int numero1;
    cout<< "Ingrese un numero ";
    cin >> numero1;

    if (numero1 % 2 == 1){
        cout<< "El numero es impar " << numero1;
    }else{
        cout<< "El numero es par " << numero1;
    }
    */
    // Parte 4 Uso de for
    /*for(int a = 0; a < 8; a++){
        cout << "Contador: " << a << endl;
    }*/
    // Numero factorial
    /*
    int i, numero, factorial = 1;

    cout << "Ingrese un numero: ";
    cin >> numero;

    for (int i = 1; i < numero; i++)
    {
        factorial = factorial * i;
    }

    cout << endl
         << "El factorial es: " << factorial;
    */
    // Numeros impar
    /*
    for (int a = 1; a < 40; a = a + 2)
    {
        cout<< "Los numeros impares: " << a <<endl;
    }*/
    // Numero primo
    /*
    int num, e = 0;
    cout<< "Ingrese un numero: ";
    cin>> num;

    for(int x = 1; x <= num; x++){
        if( num % x == 0){
            e++;
        }
    }
    if( e == 2){
        cout<< endl <<"Numero primo";
    }
    else{
        cout<< endl << "No es un numero primo";
    }
    */
    // Parte 5 While
    /*
    int numero, suma = 0;
    cout << "Ingrese un numero ";
    cin >> numero;

    while (numero >= 0){
         suma += numero;
         cout << "Ingrese mas numeros: " << endl;
         cin>> numero;
    }

    cout << "La suma es: " << suma;
    */
    // Parte 6 Array
    /*
    int edad[5] = {19, 20, 56, 34, 25};

    for (int i = 0; i < 5; i++)
    {
        cout << "La edad es: " << edad[i] << endl;
    }

    int array[8];

    for (int i = 0; i < 8; i++)
    {
        cout << "Posicion: " << i << " : ";
        cin >> array[i];
    }

    for (int i = 0; i < 8; i++)
    {
        cout << "El numero es: " << array[i] << endl;
    }*/

    char texto[20];
    cout << "Ingrese sus datos: ";
    cin.getline(texto, 20); // Para ingresar cadenas con espacios
    cout << "Datos ingresados: " << texto << endl;
    // Parte 7 Funciones
    nombre("Luis");
    int resultado = sumar(9, 98);
    cout << "El resultado es: " << resultado;

    //Parte 8 Arreglos
    // Arreglo estático
    int numeros[5] = {1, 2, 3, 4, 5};
    cout << numeros[0];

    // Recorrido
    for (int i = 0; i < 5; i++)
    {
        cout << numeros[i] << endl;
    }

    // Arreglos bidimensionales
    int matriz[2][2] = {{1, 2}, {3, 4}};
    cout << matriz[0][1];

// Uso de vector (dinámico)

    /*vector<int> nums = {1, 2, 3};
    nums.push_back(4); */

    return 0;
}

// Definición de Función
void nombre(string valor)
{
    cout << "El nombre es: " << valor;
}
int sumar(int a, int b)
{
    return a + b;
}