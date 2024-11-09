---
next:
  text: 'null'
  link: '/notes/android-development/'
---

# 3.4 Styling Widgets (Themes, Text, Colors)

> Explore how to apply consistent styling using themes and custom styles.

Styling widgets is an essential part of creating visually appealing and consistent apps in Flutter. This section focuses on how to style widgets, manage themes, customize text styles, and use colors to enhance the user interface. By mastering these concepts, you can create apps that not only function well but also provide an aesthetically pleasing experience for users.

::: details Overview of the Materials 📚

- **Themes in Flutter**: Use `ThemeData` in `MaterialApp` for global styling across the app and `Theme` widget for local styling in specific parts of the app.
- **Text Styling**: Customize text appearance with `TextStyle`, adjusting properties like `fontSize`, `fontWeight`, and `color`. Global text styles can be applied via the app's theme.
- **Colors in Flutter**: Use the `Colors` class for predefined colors or create custom ones. Modify opacity to create transparent effects.
- **Best Practices**: Maintain consistency using global themes, avoid repetitive styles, and consider responsive design for different screen sizes and branding needs.

:::

## 1. Themes in Flutter

In Flutter, a **theme** is a collection of properties that define the visual style of your entire app. It allows you to define common colors, font styles, and other visual properties in one central location, ensuring consistency across the app. You can apply themes globally to all widgets or locally to specific parts of the app.

### Global Theme

A global theme is typically defined in the `MaterialApp` widget, which applies the theme to all widgets in the app. The `ThemeData` class allows you to set the primary color, text styles, icon themes, and more.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      title: 'Styled App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        textTheme: TextTheme(
          bodyText1: TextStyle(fontSize: 18, color: Colors.black),
          bodyText2: TextStyle(fontSize: 16, color: Colors.grey),
        ),
      ),
      home: MyHomePage(),
    ),
  );
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Styling Widgets'),
      ),
      body: Center(
        child: Text(
          'Hello, Flutter!',
          style: Theme.of(context).textTheme.bodyText1,
        ),
      ),
    );
  }
}
```

### Local Theme

Sometimes, you may want to override the global theme for a specific part of the app. This can be done by using the `Theme` widget, which allows you to apply a new `ThemeData` only to its child widgets.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Local Theme Example'),
        ),
        body: Theme(
          data: ThemeData(
            primarySwatch: Colors.green,
            textTheme: TextTheme(
              bodyText1: TextStyle(fontSize: 18, color: Colors.white),
            ),
          ),
          child: Center(
            child: Text(
              'Local Theme Applied!',
              style: Theme.of(context).textTheme.bodyText1,
            ),
          ),
        ),
      ),
    );
  }
}
```

## 2. Text Styling in Flutter

Text is one of the most commonly used widgets in Flutter, and styling text is an important part of app design. You can modify the appearance of text by using the `TextStyle` class, which provides properties for changing the font size, weight, color, letter spacing, and more.

### TextStyle Class

The `TextStyle` class is used to define how the text should be displayed. It includes properties like `fontSize`, `fontWeight`, `color`, and `letterSpacing`. You can use `TextStyle` to apply custom styling directly to a `Text` widget or inherit styles from a global theme.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Text Styling Example'),
        ),
        body: Center(
          child: Text(
            'Styled Text Example',
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              color: Colors.blueAccent,
            ),
          ),
        ),
      ),
    );
  }
}
```

### Inherited Text Styles

When you set a text style in the app's theme, all text widgets within the app inherit that style unless you override it. This makes it easy to apply consistent text styling across your app.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      title: 'Text Inheritance Example',
      theme: ThemeData(
        textTheme: TextTheme(
          bodyText1: TextStyle(fontSize: 20, color: Colors.green),
        ),
      ),
      home: MyHomePage(),
    ),
  );
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Inherited Text Style'),
      ),
      body: Center(
        child: Text(
          'This is inherited text style',
          style: Theme.of(context).textTheme.bodyText1,
        ),
      ),
    );
  }
}
```

## 3. Colors in Flutter

Colors play a significant role in designing visually appealing apps. Flutter provides a built-in `Colors` class with predefined color constants, but you can also create custom colors using ARGB values. Colors can be applied to various widgets like `Container`, `Text`, `AppBar`, and more.

### Built-in Colors

Flutter includes a wide range of predefined colors, such as `Colors.blue`, `Colors.red`, `Colors.green`, and others. These are convenient to use, but you can also define your own custom colors.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Built-in Colors Example'),
          backgroundColor: Colors.blue,
        ),
        body: Center(
          child: Text(
            'This text uses a built-in color.',
            style: TextStyle(
              fontSize: 18,
              color: Colors.red, // Built-in color
            ),
          ),
        ),
      ),
    );
  }
}
```

### Custom Colors

If you need a specific color that isn't provided by the `Colors` class, you can define custom colors using the `Color` class, which takes an integer value representing ARGB (alpha, red, green, blue) components.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Custom Color Example'),
          backgroundColor: Color(0xFF42A5F5), // Custom Blue color
        ),
        body: Center(
          child: Text(
            'This text uses a custom color.',
            style: TextStyle(
              fontSize: 18,
              color: Color(0xFFAB47BC), // Custom Purple color
            ),
          ),
        ),
      ),
    );
  }
}
```

### Color Opacity

Flutter also allows you to modify the opacity of colors using the `withOpacity` method. This is useful for creating transparent effects or layers.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Opacity Example'),
        ),
        body: Center(
          child: Container(
            color: Colors.blue.withOpacity(0.5), // 50% opacity
            width: 200,
            height: 200,
            child: Center(
              child: Text(
                '50% opacity',
                style: TextStyle(color: Colors.white),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
```

## 4. Practical Styling Tips

Here are some practical tips for styling widgets in Flutter:

- **Use Global Themes**: Always define a global theme at the root of your app to maintain consistency and make styling easier.
- **Avoid Hardcoding Styles**: Instead of hardcoding colors and text styles throughout your widgets, define them in one central location (e.g., the app's theme) for easier maintenance.
- **Use MediaQuery for Responsiveness**: Adjust text size and layout based on screen size to ensure that your app looks good on all devices.
- **Custom Colors and Styles**: Use custom colors and text styles to match your app's branding and create a unique look.

## References

- [Flutter Theme Documentation](https://flutter.dev/docs/cookbook/design/themes)
