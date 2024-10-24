---
next:
  text: '1.3 OOP Concepts (Classes, Objects, Inheritance)'
  link: '/notes/android-development/section-1-3'
---

# 1.2 Control Flow (if-else, switch, loops)

In any programming language, control flow statements allow you to dictate how the program moves from one point to another based on conditions or repetitive actions. Dart, like most languages, offers several control flow constructs including **`if-else` statements**, **`switch` statements**, and various types of **loops** (for, while, do-while). This section will cover the basic usage of each in Dart.

## if-else Statements

The **`if-else`** statement is a basic control flow structure used to execute code conditionally. If the condition evaluates to `true`, the code inside the `if` block is executed. If the condition is `false`, the code inside the `else` block (if provided) will run.

The `else-if` ladder allows you to check multiple conditions. This is useful when there are several potential outcomes that require different actions.

```dart
int number = 10;

if (number > 0) {
  print('The number is positive');
} else if (number < 0) {
  print('The number is negative');
} else {
  print('The number is zero');
}
```

## switch Statements

The **`switch`** statement is an alternative to `if-else` for handling multiple possible values of a variable. It is particularly useful when a variable or expression is being compared to multiple constant values. Dart's `switch` statement works with types such as `int`, `String`, and `enum`.

In a `switch` statement, each `case` represents a value that the expression can be matched with. The `break` statement ensures that no other `case` blocks are executed after a match is found. If no matches are found, the `default` block (if provided) is executed.

```dart
String grade = 'B';

switch (grade) {
  case 'A':
    print('Excellent');
    break;
  case 'B':
    print('Good');
    break;
  case 'C':
    print('Average');
    break;
  default:
    print('Invalid grade');
}
```

## Loops in Dart

Loops allow code to be executed repeatedly as long as a specified condition holds true. Dart provides three types of loops: **for loops**, **while loops**, and **do-while loops**.

### For Loop

A **for loop** is commonly used when the number of iterations is known beforehand. It repeats a block of code a specified number of times, making it ideal for iterating over lists or performing a task repeatedly.

```dart
for (int i = 0; i < 5; i++) {
  print('This is iteration number $i');
}
```

### While Loop

The **`while`** loop continues to execute as long as the condition provided remains `true`. The condition is evaluated before each iteration of the loop, and the loop will stop once the condition becomes `false`.

```dart
int counter = 0;

while (counter < 5) {
  print('Counter is $counter');
  counter++;
}
```

### Do-While Loop

The **`do-while`** loop is similar to the `while` loop, but the condition is checked after the code block is executed. This ensures that the loop runs at least once, even if the condition is initially `false`.

```dart
int counter = 0;

do {
  print('Counter is $counter');
  counter++;
} while (counter < 5);
```

### Loop Control: break and continue

- **`break`**: Used to exit the loop prematurely when a specific condition is met.
- **`continue`**: Used to skip the current iteration and move to the next iteration of the loop.

```dart
for (int i = 0; i < 10; i++) {
  if (i == 5) {
    break;  // Exit loop when i equals 5
  }
  if (i % 2 == 0) {
    continue;  // Skip even numbers
  }
  print(i);
}
```

## Case Study: Number Guessing Game

### Introduction

In this case study, we will develop a simple number guessing game using Dart. The game will allow the player to guess a randomly generated number within a specified range. This project will illustrate the practical application of **loops**, **conditional statements**, and user input handling in Dart.

### Problem Statement

The program must:

- Generate a random number between 1 and 100.
- Prompt the user to guess the number.
- Provide feedback on whether the guess is too low, too high, or correct.
- Allow the user to continue guessing until they find the correct number.
- Count the number of attempts taken by the player.

### Requirements

1. Generate a random number between 1 and 100 at the start of the game.
2. Prompt the user for their guess.
3. Provide feedback for each guess:
   - If the guess is too low, display "Too low! Try again."
   - If the guess is too high, display "Too high! Try again."
   - If the guess is correct, display "Congratulations! You've guessed the number in X attempts."
4. Allow the user to play multiple rounds until they choose to exit.

### Design

The program will:

- Use a loop to allow repeated guessing until the user gets the correct answer.
- Utilize conditionals to provide feedback based on the user's guess.
- Implement random number generation to create a new number for each game round.

### Implementation

Here’s the Dart code for the number guessing game:

```dart
import 'dart:io';
import 'dart:math';

void main() {
  Random random = Random();

  while (true) {
    // Generate a random number between 1 and 100
    int numberToGuess = random.nextInt(100) + 1;
    int attempts = 0;
    bool hasGuessedCorrectly = false;

    print('Welcome to the Number Guessing Game!');
    print('I have selected a number between 1 and 100. Try to guess it!');

    while (!hasGuessedCorrectly) {
      print('Enter your guess (or type "exit" to quit):');
      String? input = stdin.readLineSync();

      if (input?.toLowerCase() == 'exit') {
        print('Thanks for playing! Goodbye!');
        return;
      }

      int? guess = int.tryParse(input!);

      if (guess == null || guess < 1 || guess > 100) {
        print('Invalid input. Please enter a number between 1 and 100.');
        continue;
      }

      attempts++;

      if (guess < numberToGuess) {
        print('Too low! Try again.');
      } else if (guess > numberToGuess) {
        print('Too high! Try again.');
      } else {
        hasGuessedCorrectly = true;
        print('Congratulations! You\'ve guessed the number $numberToGuess in $attempts attempts.');
      }
    }

    print('Do you want to play again? (yes/no)');
    String? playAgain = stdin.readLineSync();

    if (playAgain?.toLowerCase() != 'yes') {
      print('Thanks for playing! Goodbye!');
      break;
    }
  }
}
```

### Online Playground

You can run and test the code in this online playground: [JDoodle](https://www.jdoodle.com/execute-dart-online).
