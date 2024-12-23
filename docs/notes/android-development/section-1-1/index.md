---
next:
  text: '1.2 Control Flow (if-else, switch, loops)'
  link: '/notes/android-development/section-1-2'
---

# 1.1 Syntax (Variables, Data Types, Functions)

> Learn how to declare variables, define functions, and work with different data types.

Dart, the programming language designed by Google, has a clean, modern syntax that is easy to understand and use. In this article, we will explore the foundational concepts of Dart syntax, focusing on **variables**, **data types**, and **functions**. Understanding these basics is essential for anyone looking to develop mobile applications using Dart, especially in combination with Flutter for Android development.

::: details Overview of the Materials 📚

- **Variables:** Declare using var, final, or const. final is for once-set values, const for compile-time constants.
- **Data Types:** Includes int, double, String, bool, List, and Map.
- **Functions:** Can have optional parameters (positional or named), and support arrow functions for concise syntax.
- **Calculator Case Study:** A Dart-based program that performs basic arithmetic operations (addition, subtraction, multiplication, division) with error handling.

:::

## Variables in Dart

In Dart, variables are used to store data. Variables can be declared with either the `var`, `final`, or `const` keywords, depending on how the variable is going to be used.

### Declaring Variables

Variables in Dart can be declared without specifying the data type. Dart will infer the type based on the assigned value. Alternatively, you can explicitly specify the type.

```dart
var name = 'Alice'; // The type is inferred as String
var age = 25;       // The type is inferred as int
```

```dart
String name = 'Alice';
int age = 25;
```

::: details DartPad Output
<br>
<img src="../../../public/assets/android-development/dartpad_1.1.1.png" width="400"/>
:::

### `final` and `const`

- **`final`**: A `final` variable can only be set once. After it is assigned, the value cannot be changed.

  ```dart
  final name = 'Alice';
  name = 'Bob'; // Error: Cannot change the value of a final variable
  ```

- **`const`**: A `const` variable is similar to `final`, but it is also **compile-time constant**, meaning that its value is determined at compile time and cannot change at runtime.

  ```dart
  const pi = 3.14159;
  const area = pi * 5 * 5; // Using constant values for calculation
  ```

::: details DartPad Output
<br>
<img src="../../../public/assets/android-development/dartpad_1.1.2.png" width="600"/>
:::

::: tip Additional Information
The main difference between `final` and `const` is that `const` variables must have their value known at compile time, while `final` variables can be initialized at runtime but not modified afterward.
:::

## Data Types in Dart

Dart is a **strongly-typed** language, meaning every variable has a type. However, Dart supports both **explicit** and **implicit** typing through type inference. Common data types in Dart include:

### 1. **Numbers**

- **`int`**: Represents integer values, like whole numbers.

  ```dart
    int age = 30;
  ```

- **`double`**: Represents floating-point numbers (i.e., numbers with a decimal point).

  ```dart
    double height = 5.9;
  ```

### 2. **Strings**

Strings are sequences of characters, and they can be defined using either single or double quotes. Dart also supports string interpolation, allowing you to include variables directly in strings.

```dart
String firstName = 'John';
String lastName = "Doe";
```

```dart
String greeting = 'Hello, $firstName $lastName';
```

::: details DartPad Output
<br>
<img src="../../../public/assets/android-development/dartpad_1.1.3.png" width="400"/>
:::

### 3. **Booleans**

Booleans represent values that are either `true` or `false`. They are used in conditions and logic.

```dart
bool isStudent = true;
```

### 4. **Lists**

A list is an ordered collection of items. In Dart, lists are zero-indexed, meaning the first item has an index of 0. You can use `var` and let Dart infer the type of the list.

```dart
List<String> fruits = ['Apple', 'Banana', 'Orange'];
```

```dart
var numbers = [1, 2, 3, 4, 5]; // Dart infers it as List<int>
```

::: details DartPad Output
<br>
<img src="../../../public/assets/android-development/dartpad_1.1.4.png" width="600"/>
:::

### 5. **Maps**

A `Map` is a collection of key-value pairs. It is similar to a dictionary in other programming languages. You can access values by their keys.

```dart
Map<String, int> ages = {
  'Alice': 30,
  'Bob': 25,
};
```

```dart
int aliceAge = ages['Alice']; // 30
```

::: details DartPad Output
<br>
<img src="../../../public/assets/android-development/dartpad_1.1.5.png" width="400"/>
:::

## Functions in Dart

Functions are a central part of Dart programming. A function is a block of reusable code that can be called to perform a specific task.

### Declaring Functions

A basic function is declared by specifying the return type, the function name, and the parameters it takes.

```dart
int add(int a, int b) {
  return a + b;
}
```

::: details DartPad Output
<br>
<img src="../../../public/assets/android-development/dartpad_1.1.6.png" width="400"/>
:::

### Function Without Return Type

If a function does not return a value, you can either specify the return type as `void` or leave it unspecified.

```dart
void printMessage(String message) {
  print(message);
}
```

### Optional Parameters

Dart functions can have optional parameters. These parameters can be either positional or named.

#### 1. **Positional Optional Parameters**

Positional parameters can be made optional by enclosing them in square brackets.

```dart
String greet(String name, [String title = 'Mr./Ms.']) {
  return 'Hello, $title $name';
}

void main() {
  print(greet('John'));             // Outputs: Hello, Mr./Ms. John
  print(greet('John', 'Dr.'));      // Outputs: Hello, Dr. John
}
```

::: details DartPad Output
<br>
<img src="../../../public/assets/android-development/dartpad_1.1.7.png" width="600"/>
:::

#### 2. **Named Optional Parameters**

Named parameters are enclosed in curly braces and can be marked as optional by providing default values.

```dart
void describe({String name = 'Unknown', int age = 0}) {
  print('Name: $name, Age: $age');
}

void main() {
  describe();                         // Outputs: Name: Unknown, Age: 0
  describe(name: 'Alice', age: 30);   // Outputs: Name: Alice, Age: 30
}
```

::: details DartPad Output
<br>
<img src="../../../public/assets/android-development/dartpad_1.1.8.png" width="600"/>
:::

### Arrow Functions

For functions that contain a single expression, Dart provides a shorthand syntax called **arrow functions**. Arrow functions are a more concise way to declare simple functions.

```dart
int multiply(int a, int b) => a * b;
```

::: details DartPad Output
<br>
<img src="../../../public/assets/android-development/dartpad_1.1.9.png" width="600"/>
:::

### Anonymous Functions

Dart also supports **anonymous functions** (functions without a name), which are often used in scenarios where a function needs to be passed as an argument to another function.

```dart
var fruits = ['Apple', 'Banana', 'Orange'];

fruits.forEach((fruit) {
  print(fruit);
});
```

## Case Study: Simple Calculator Program in Dart

### Introduction

In this case study, we will design and implement a simple calculator program using Dart. This calculator will perform basic arithmetic operations, including addition, subtraction, multiplication, and division. The goal is to provide users with an interactive command-line interface to input numbers and choose operations.

::: details Problem Statement

The calculator needs to perform the following operations based on user input:

- Addition
- Subtraction
- Multiplication
- Division

:::

::: details Requirements

1. The program should prompt the user to enter two numbers.
2. The user should select an arithmetic operation (addition, subtraction, multiplication, or division).
3. The program should display the result of the operation.
4. It should handle invalid input gracefully, informing the user of any errors.

:::

::: details Design

The calculator will be designed with the following components:

- A function to perform the chosen arithmetic operation.
- A function to display the menu and get user input.
- A main function to drive the application and handle control flow.

:::

### Implementation

Below is the Dart code implementing the calculator:

```dart
import 'dart:io';

double add(double a, double b) {
  return a + b;
}

double subtract(double a, double b) {
  return a - b;
}

double multiply(double a, double b) {
  return a * b;
}

double divide(double a, double b) {
  if (b == 0) {
    throw Exception('Cannot divide by zero');
  }
  return a / b;
}

void showMenu() {
  print('Select an operation:');
  print('1. Addition (+)');
  print('2. Subtraction (-)');
  print('3. Multiplication (*)');
  print('4. Division (/)');
  print('5. Exit');
}

void main() {
  while (true) {
    showMenu();
    String? choice = stdin.readLineSync();

    if (choice == '5') {
      print('Exiting the calculator. Goodbye!');
      break;
    }

    print('Enter the first number:');
    double? num1 = double.tryParse(stdin.readLineSync()!);
    print('Enter the second number:');
    double? num2 = double.tryParse(stdin.readLineSync()!);

    if (num1 == null || num2 == null) {
      print('Invalid input. Please enter valid numbers.');
      continue;
    }

    double result;

    switch (choice) {
      case '1':
        result = add(num1, num2);
        print('Result: $num1 + $num2 = $result');
        break;
      case '2':
        result = subtract(num1, num2);
        print('Result: $num1 - $num2 = $result');
        break;
      case '3':
        result = multiply(num1, num2);
        print('Result: $num1 * $num2 = $result');
        break;
      case '4':
        try {
          result = divide(num1, num2);
          print('Result: $num1 / $num2 = $result');
        } catch (e) {
          print(e);
        }
        break;
      default:
        print('Invalid choice. Please select a valid operation.');
    }
  }
}
```

### Online Playground

You can run and test the code in this online playground: [JDoodle](https://www.jdoodle.com/execute-dart-online).
