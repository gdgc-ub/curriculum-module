---
next:
  text: '3.3 Handling User Input (Forms, TextField, Buttons)'
  link: '/notes/android-development/section-3-3'
---

# 3.2 Building Layouts

> Learn how to build advanced layouts in Flutter to create dynamic and responsive user interfaces.

Flutter offers a wide variety of layout widgets that provide great flexibility for building responsive, adaptive, and complex layouts. In this section, we will cover some advanced layout concepts like `Flexible`, `GridView`, `CustomMultiChildLayout`, `Expanded`, `Wrap`, and `Align`. These concepts allow for greater customization and efficiency when designing UIs for different screen sizes and use cases.

::: details Overview of the Materials 📚

- **Flexible:** Allows widgets to take up available space proportionally, making layouts responsive. The flex factor defines the space a child should occupy relative to others.
- **GridView:** Creates a 2D grid of items that can be scrolled, with customizable row and column sizes using SliverGridDelegate. Ideal for grid-based layouts like image galleries.
- **CustomMultiChildLayout:** Provides fine-grained control over the positioning of multiple children using a custom layout delegate, useful for complex, custom UIs.
- **Wrap & Align:** Wrap allows widgets to flow into new lines/columns when space is constrained, while Align positions a single child within a parent, offering flexible placement control.

:::

## Flexible Widget

The **Flexible** widget allows children of a `Row`, `Column`, or `Flex` to expand or contract based on available space. It provides a more refined control over how a widget should occupy the space compared to other layout widgets.

```dart
Row(
  children: <Widget>[
    Flexible(
      flex: 1,
      child: Container(
        color: Colors.blue,
        height: 100,
      ),
    ),
    Flexible(
      flex: 2,
      child: Container(
        color: Colors.green,
        height: 100,
      ),
    ),
  ],
)
```

### Key Properties

- **flex**: Defines the proportion of space that a child should take up in relation to other flexible children.
- **fit**: Controls how the child should fit within the space available (e.g., `FlexFit.tight` or `FlexFit.loose`).

::: tip Use Case

Use `Flexible` when you want children widgets to share space proportionally based on their `flex` factor. This is ideal for creating fluid and responsive layouts.

:::

## GridView Widget

The **GridView** widget is an advanced layout option that arranges children in a grid, which is perfect for creating two-dimensional layouts like photo galleries, item lists, or custom grid layouts.

```dart
GridView.builder(
  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 3, // 3 columns in the grid
    crossAxisSpacing: 10,
    mainAxisSpacing: 10,
  ),
  itemCount: 6,
  itemBuilder: (context, index) {
    return Container(
      color: index.isEven ? Colors.blue : Colors.orange,
      child: Center(child: Text('Item $index')),
    );
  },
)
```

### Key Properties

- **gridDelegate**: A delegate for managing the grid's layout, such as `SliverGridDelegateWithFixedCrossAxisCount` or `SliverGridDelegateWithMaxCrossAxisExtent`.
- **children**: The list of widgets to display inside the grid.

::: tip Use Case

`GridView` is ideal for displaying items in a grid, such as product catalogs or image galleries, where each grid cell may have dynamic content.

:::

## CustomMultiChildLayout Widget

The **CustomMultiChildLayout** widget allows you to create custom layouts with multiple children and precise control over their positioning. It is designed for complex layouts where the positions of children are based on dynamic calculations.

```dart
CustomMultiChildLayout(
  delegate: MyCustomLayoutDelegate(),
  children: [
    LayoutId(
      id: 1,
      child: Container(color: Colors.red, width: 100, height: 100),
    ),
    LayoutId(
      id: 2,
      child: Container(color: Colors.blue, width: 100, height: 100),
    ),
  ],
)
```

### Key Properties

- **delegate**: The `MultiChildLayoutDelegate` class that defines the custom logic for positioning the children.
- **children**: The child widgets that will be laid out according to custom rules.

::: tip Use Case

This widget is useful when you need to create highly complex or dynamic layouts, such as custom positioning for a photo grid with overlapping elements or interactive animations.

:::

## Expanded Widget

The **Expanded** widget is used to make a widget within a `Row`, `Column`, or `Flex` take up the remaining available space. It’s a shorthand for `Flexible` with `flex: 1`.

```dart
Row(
  children: <Widget>[
    Container(
      color: Colors.red,
      width: 100,
      height: 100,
      child: Center(child: Text('Box 1')),
    ),
    Expanded(
      flex: 2, // This box will take up twice the space of the others
      child: Container(
        color: Colors.green,
        height: 100,
        child: Center(child: Text('Box 2')),
      ),
    ),
    Expanded(
      flex: 1, // This box will take up equal space with Box 3
      child: Container(
        color: Colors.blue,
        height: 100,
        child: Center(child: Text('Box 3')),
        ),
    ),
  ],
),
```

### Key Properties

- **flex**: Defines how much space the child should take relative to other `Expanded` or `Flexible` widgets in the same `Row` or `Column`.

::: tip Use Case

Use `Expanded` when you want a widget to expand and fill available space, such as a text field or button that should occupy all remaining horizontal or vertical space.

:::

## Wrap Widget

The **Wrap** widget allows you to create layouts where children can automatically wrap onto the next line (or column) when there’s no more space. This is useful for cases like tags, chips, or buttons that need to be displayed in a flow-like manner.

```dart
Wrap(
  spacing: 10.0, // horizontal space between children
  runSpacing: 10.0, // vertical space between lines of children
  children: List.generate(10, (index) {
    return Chip(
      label: Text('Item $index'),
    );
  }),
)
```

### Key Properties

- **direction**: The main axis of the wrap, either `Axis.horizontal` or `Axis.vertical`.
- **spacing**: The space between children along the main axis.
- **runSpacing**: The space between lines of children along the cross axis.

::: tip Use Case

Use `Wrap` when you need to lay out widgets that should wrap to the next line or column when the available space is filled. For example, use `Wrap` for a set of tags, where each tag should go to the next row when the screen size shrinks.

:::

## Align Widget

The **Align** widget is used to align a child within a parent widget, allowing for precise control over where the child should be positioned. You can align widgets using values like `Alignment.topLeft`, `Alignment.center`, or `Alignment.bottomRight`.

```dart
Align(
  alignment: Alignment.bottomRight,
  child: Container(
    color: Colors.red,
    width: 100,
    height: 100,
    child: Center(child: Text('Aligned!')),
  ),
)
```

### Key Properties

- **alignment**: The alignment of the child widget within the parent. It accepts values like `Alignment.topLeft`, `Alignment.center`, and `Alignment.bottomRight`.
- **widthFactor** and **heightFactor**: Constraints for the size of the parent widget.

::: tip Use Case

Use `Align` when you need to position a child widget relative to the parent’s size. This is useful when building custom interfaces where specific elements need precise alignment (e.g., centering a button or text).

:::

## References

- [Flutter Layout Documentation](https://flutter.dev/docs/development/ui/layout)
- [Flutter GridView Widget](https://flutter.dev/docs/cookbook/lists/grid-list)
- [Flutter CustomMultiChildLayout](https://api.flutter.dev/flutter/widgets/CustomMultiChildLayout-class.html)
- [Flutter Wrap Widget](https://flutter.dev/docs/development/ui/widgets/layout#wrap)
- [Flutter Align Widget](https://flutter.dev/docs/development/ui/widgets/layout#align)
