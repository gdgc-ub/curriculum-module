---
next:
  text: '2.1 Setting up Flutter SDK and Development Environment'
  link: '/notes/android-development/section-2-1'
---

# 1.3 OOP Concepts (Classes, Objects, Inheritance, Encapsulation, and Polymorphism)

> Explore object-oriented programming, which is a core principle in Flutter app development.

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

## Case Study: Basic Bank Account Application

### Introduction

The goal of this case study is to develop a simple bank account application that allows users to create accounts, deposit money, withdraw money, and check account balances. We will utilize Object-Oriented Programming (OOP) principles to create a modular and maintainable application.

### Problem Statement

The Bank Account Application should allow:

1. Creating a new bank account.
2. Depositing funds into the account.
3. Withdrawing funds from the account.
4. Checking the current balance.
5. Implementing different types of accounts (e.g., Savings Account, Checking Account).

### Design

The application will consist of the following classes:

- `BankAccount`: A base class representing a generic bank account.
- `SavingsAccount`: A subclass that extends `BankAccount`, with additional features such as interest calculation.
- `CheckingAccount`: Another subclass that may include features specific to checking accounts (e.g., overdraft protection).
- `Customer`: A class representing a bank customer.

### Implementation

Below is the implementation of the basic bank account application in Dart:

```dart
// Base class for Bank Account
abstract class BankAccount {
  String accountNumber;
  String accountHolder;
  double _balance;

  BankAccount(this.accountNumber, this.accountHolder, this._balance);

  // Method to deposit money
  void deposit(double amount) {
    if (amount > 0) {
      _balance += amount;
      print('Deposited: \$${amount.toStringAsFixed(2)}');
    } else {
      print('Invalid deposit amount.');
    }
  }

  // Method to withdraw money
  bool withdraw(double amount) {
    if (amount > 0 && amount <= _balance) {
      _balance -= amount;
      print('Withdrawn: \$${amount.toStringAsFixed(2)}');
      return true;
    } else {
      print('Insufficient funds or invalid amount.');
      return false;
    }
  }

  // Method to check balance
  double getBalance() {
    return _balance;
  }

  // Method to display account information
  void displayInfo() {
    print('Account Number: $accountNumber');
    print('Account Holder: $accountHolder');
    print('Current Balance: \$${_balance.toStringAsFixed(2)}');
  }
}

// Subclass for Savings Account
class SavingsAccount extends BankAccount {
  double interestRate;

  SavingsAccount(String accountNumber, String accountHolder, double balance, this.interestRate)
      : super(accountNumber, accountHolder, balance);

  // Method to calculate interest
  void addInterest() {
    double interest = getBalance() * (interestRate / 100);
    deposit(interest);
    print('Interest added: \$${interest.toStringAsFixed(2)}');
  }
}

// Subclass for Checking Account
class CheckingAccount extends BankAccount {
  double overdraftLimit;

  CheckingAccount(String accountNumber, String accountHolder, double balance, this.overdraftLimit)
      : super(accountNumber, accountHolder, balance);

  @override
  bool withdraw(double amount) {
    if (amount > 0 && (getBalance() + overdraftLimit) >= amount) {
      return super.withdraw(amount);
    } else {
      print('Withdrawal exceeds overdraft limit.');
      return false;
    }
  }
}

// Customer class to hold account information
class Customer {
  String name;
  List<BankAccount> accounts = [];

  Customer(this.name);

  // Method to add account to customer
  void addAccount(BankAccount account) {
    accounts.add(account);
    print('${account.runtimeType} created for $name.');
  }

  // Method to display all accounts
  void displayAccounts() {
    print('$name\'s Accounts:');
    for (var account in accounts) {
      account.displayInfo();
      print('----------------------------------');
    }
}

void main() {
  // Create a customer
  Customer customer = Customer('John Doe');

  // Create accounts
  SavingsAccount savingsAccount = SavingsAccount('SA001', 'John Doe', 1000.0, 5.0);
  CheckingAccount checkingAccount = CheckingAccount('CA001', 'John Doe', 500.0, 200.0);

  // Add accounts to customer
  customer.addAccount(savingsAccount);
  customer.addAccount(checkingAccount);

  // Display accounts
  customer.displayAccounts();

  // Perform transactions
  savingsAccount.deposit(200.0);
  savingsAccount.withdraw(100.0);
  savingsAccount.addInterest();

  checkingAccount.withdraw(600.0); // Should succeed due to overdraft
  checkingAccount.withdraw(200.0); // Should fail due to insufficient funds

  // Display updated account balances
  customer.displayAccounts();
}
```

### Online Playground

You can run and test the code in this online playground: [JDoodle](https://www.jdoodle.com/execute-dart-online).
