#include <iostream>
#include <cmath>
using namespace std;

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
    //Parte 3 condicionales
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

    int numero1;
    cout<< "Ingrese un numero ";
    cin >> numero1;

    if (numero1 % 2 == 1){
        cout<< "El numero es impar " << numero1;
    }else{
        cout<< "El numero es par " << numero1;
    }
    
    return 0;
}