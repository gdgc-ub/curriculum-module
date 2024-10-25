---
next:
  text: '2.3 Layout Basics (Column, Row, Stack)'
  link: '/notes/android-development/section-2-3'
---

# 2.2 Widgets Overview (Stateless vs Stateful Widgets)

> Learn about the building blocks of Flutter apps—widgets—and how they differ.

In Flutter, the building blocks of the user interface are called **widgets**. Everything you see on the screen is a widget, from layout structures to interactive elements like buttons and text fields. Understanding the difference between **Stateless** and **Stateful** widgets is crucial for Flutter development, as it determines how your app responds to user interactions and changes in data.

## What are Widgets?

Widgets are the fundamental components used to create the user interface in Flutter. They describe how the application should look and behave. Widgets can be combined to create complex UIs, and they can be nested within each other.

Flutter categorizes widgets into two main types: **Stateless Widgets** and **Stateful Widgets**.

## Stateless Widgets

Stateless widgets are immutable, meaning their properties cannot change after they are built. They are ideal for situations where the UI does not depend on any changing data. Stateless widgets are typically used for static content that doesn’t need to be updated in response to user interactions.

```dart
import 'package:flutter/material.dart';

class MyStatelessWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        'Hello, Stateless Widget!',
        style: TextStyle(fontSize: 24),
      ),
    );
  }
}
```

### Key Characteristics of Stateless Widgets

- **Immutability**: Once a stateless widget is built, it cannot change its state.
- **Performance**: Since they do not rely on changing data, stateless widgets can be more efficient in terms of performance.
- **Use Cases**: Commonly used for displaying static content, icons, text, or other UI elements that do not change.

## Stateful Widgets

Stateful widgets, on the other hand, are mutable. They maintain state that can change over time, often in response to user interactions or other factors. A stateful widget is built using two classes: the widget itself and a separate state class that holds the state information.

```dart
import 'package:flutter/material.dart';

class MyStatefulWidget extends StatefulWidget {
  @override
  _MyStatefulWidgetState createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text(
            'You have pushed the button this many times:',
          ),
          Text(
            '$_counter',
            style: Theme.of(context).textTheme.headline4,
          ),
          ElevatedButton(
            onPressed: _incrementCounter,
            child: Text('Increment'),
          ),
        ],
      ),
    );
  }
}
```

### Key Characteristics of Stateful Widgets

- **Mutability**: Stateful widgets can change their appearance in response to user actions or events.
- **Lifecycle**: Stateful widgets have a lifecycle that includes initialization, building, updating, and disposal, which allows developers to manage state effectively.
- **Use Cases**: Ideal for forms, animations, and any UI that needs to react to user input.

## When to Use Stateless vs. Stateful Widgets

- Use **Stateless Widgets** when:
  - The UI does not depend on any mutable state.
  - You want a simpler and more performance-efficient widget.
- Use **Stateful Widgets** when:
  - The UI needs to change in response to user interactions.
  - You are working with animations, forms, or data that changes over time.

## References

- [Flutter Widgets Documentation](https://flutter.dev/docs/development/ui/widgets-intro)
- [Stateless vs Stateful Widgets](https://flutter.dev/docs/development/ui/widgets-intro#stateful-vs-stateless-widgets)
