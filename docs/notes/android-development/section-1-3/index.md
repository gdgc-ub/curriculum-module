---
next:
  text: '2.1 Setting up Flutter SDK and Development Environment'
  link: '/notes/android-development/section-2-1'
---

# 1.3 OOP Concepts (Classes, Objects, Inheritance, Encapsulation, and Polymorphism)

Object-Oriented Programming (OOP) is a programming paradigm centered around the concept of "objects," which encapsulate data and behavior. Dart, a modern programming language developed by Google, embraces OOP principles, making it suitable for building robust applications across various platforms. This section explores the fundamental OOP concepts in Dart: Classes, Objects, Inheritance, Encapsulation, and Polymorphism.

## Classes

A class in Dart serves as a blueprint for creating objects. It defines properties (attributes) and methods (functions) that the objects created from the class can use. Classes help organize code and represent real-world entities.

```dart
class Person {
  // Properties
  String name;
  int age;

  // Constructor
  Person(this.name, this.age);

  // Method
  void introduce() {
    print("Hello, my name is $name and I am $age years old.");
  }
}
```

### Key Components of a Class

- **Properties**: These are the attributes that hold the state of an object. In Dart, properties can be defined with various data types (e.g., `int`, `String`, `List`).

- **Constructor**: A constructor is a special method invoked when an object is created. It initializes the properties of the class. Dart allows for named constructors and factory constructors to provide more flexibility.

- **Methods**: These are functions defined within the class that can manipulate the class properties or perform specific tasks. Methods can take parameters and return values.

By using classes, developers can create modular code that mirrors real-world entities, making the codebase easier to maintain and extend.

## Objects

An object is an instance of a class. Once a class is defined, you can create multiple objects based on that class. Each object has its own set of property values and can invoke the methods defined in its class.

```dart
void main() {
  // Creating objects of the Person class
  Person person1 = Person("Alice", 30);
  Person person2 = Person("Bob", 25);

  // Calling methods
  person1.introduce(); // Output: Hello, my name is Alice and I am 30 years old.
  person2.introduce(); // Output: Hello, my name is Bob and I am 25 years old.
}
```

### Characteristics of Objects

- **State**: Each object can have its own unique state determined by the values of its properties. For instance, two `Person` objects can have different names and ages.

- **Behavior**: Objects can perform actions through their methods. Each object can independently call methods defined in its class, allowing for varied behavior.

Objects provide a way to encapsulate data and behavior together, enabling more organized and manageable code.

## Inheritance

Inheritance is a mechanism that allows one class to inherit properties and methods from another class. This promotes code reuse and establishes a hierarchical relationship between classes.

```dart
class Animal {
  String name;

  Animal(this.name);

  void makeSound() {
    print("$name makes a sound.");
  }
}

class Dog extends Animal {
  Dog(String name) : super(name);

  @override
  void makeSound() {
    print("$name barks.");
  }
}
```

### Types of Inheritance

- **Single Inheritance**: A class can inherit from only one parent class. Dart supports single inheritance directly.

- **Multilevel Inheritance**: A class can inherit from a class that is already derived from another class.

- **Hierarchical Inheritance**: Multiple classes can inherit from a single parent class.

### Advantages of Inheritance

- **Code Reusability**: Inheritance allows developers to reuse existing code, reducing redundancy.
- **Method Overriding**: Child classes can provide specific implementations of methods defined in parent classes.

This relationship allows for a more logical structure in code organization.

## Encapsulation

Encapsulation is the principle of bundling the data (properties) and methods that operate on that data within a single unit, or class. It restricts direct access to some of an object's components and can prevent the accidental modification of data.

```dart
class BankAccount {
  String _accountNumber; // Private property
  double _balance; // Private property

  BankAccount(this._accountNumber, this._balance);

  // Method to deposit money
  void deposit(double amount) {
    if (amount > 0) {
      _balance += amount;
      print("Deposited: \$${amount}");
    }
  }

  // Method to check balance
  double getBalance() {
    return _balance;
  }
}
```

### Access Modifiers

In Dart, you can control the visibility of class members (properties and methods) using access modifiers:

- **Public Members**: Accessible from anywhere in the program.
- **Private Members**: Denoted by a preceding underscore (`_`), these members are only accessible within the same library. This helps hide implementation details from the outside world.

### Benefits of Encapsulation

- **Data Hiding**: Encapsulation protects an object's internal state from unintended interference and misuse.
- **Controlled Access**: Through getter and setter methods, you can control how properties are accessed and modified.

## Polymorphism

Polymorphism allows methods to do different things based on the object they are acting upon, even if they share the same name. It enables a single interface to represent different underlying forms (data types).

```dart
void main() {
  Animal myDog = Dog("Buddy");
  myDog.makeSound(); // Output: Buddy barks.

  Animal myAnimal = Animal("Generic Animal");
  myAnimal.makeSound(); // Output: Generic Animal makes a sound.
}
```

### Types of Polymorphism

- **Compile-time Polymorphism**: Achieved through method overloading, where multiple methods have the same name but different parameters.

- **Run-time Polymorphism**: Achieved through method overriding, where a child class provides a specific implementation of a method already defined in its parent class.

### Advantages of Polymorphism

- **Flexibility**: Polymorphism allows for writing more flexible and reusable code. For instance, a function can take different object types, making the code adaptable to different scenarios.
- **Simplified Code**: Polymorphism can simplify code by allowing the same method name to be used for different types.

## Case Study

Coming soon...
