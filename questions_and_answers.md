# JavaScript Quiz Answers

## Question 1

**The correct answer is:** B: ReferenceError: greetign is not defined

**Explanation:** In the code provided, you are trying to assign an empty object `{}` to a variable named `greetign`. However, there is a typo in the variable name; it should be `greeting` (with two 'e's), but you have written it as `greetign` (with 'i' instead of 'e'). As a result, JavaScript will throw a ReferenceError because it cannot find a variable named `greetign`.

## Question 2

**The correct answer is:** C: "12"

**Explanation:** In JavaScript, when you use the `+` operator with one or both operands being strings, it performs string concatenation. In the given function call, `sum(1, "2")`, the first operand `1` is a number, and the second operand `"2"` is a string. JavaScript implicitly converts the number `1` to a string and then concatenates it with the string `"2"`, resulting in the string `"12"`.

## Question 3

**The correct answer is:** A: ['🍕', '🍫', '🥑', '🍔']

**Explanation:** The code first assigns the value of `food[0]` (which is "🍕") to `info.favoriteFood`. Later, it changes the value of `info.favoriteFood` to "🍝," but this change does not affect the `food` array. Therefore, when you `console.log(food)`, it will still output the original `food` array, which is `['🍕', '🍫', '🥑', '🍔']`.

## Question 4

**The correct answer is:** B: Hi there, undefined

**Explanation:** In the function `sayHi(name)`, the `name` parameter is not provided with a default value, so when you call `sayHi()` without passing any argument, the `name` variable inside the function is `undefined`. As a result, the function returns "Hi there, undefined," where `undefined` represents the missing argument.

## Question 5

**The correct answer is:** B: 2

**Explanation:** The `forEach` method iterates over each element in the `nums` array. In JavaScript, `0` is considered a falsy value when used in a conditional context. Therefore, when `num` is `0`, the condition `if (num)` evaluates to `false`, and the `count` variable is not incremented. However, for the other elements in the array (1, 2, and 3), the condition evaluates to `true`, and the `count` variable is incremented by 1 for each of them. So, the final value of `count` is 2.
