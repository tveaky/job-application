# 🐛 Bugfix Challenge (Optional)

## Context
This function is supposed to return the second highest number in an array:

```js
function secondLargest(arr) {
  arr.sort();
  return arr[arr.length - 2];
}
```

But… it doesn’t always work. 😬  
The issue? JavaScript's `sort()` converts numbers to strings unless you give it a compare function. Try `[10, 5, 3, 9, 2]` — it breaks.

---

## 🎯 Your Task

Fix the function so it correctly returns the second largest number — for *any* valid numeric array.

> This challenge is **100% optional**. It won’t affect your application status, but we *will* enjoy reviewing it.

---

## 🧪 How to Submit

1. If you haven’t already, fork the repo and go through the normal [application process](../APPLYING.md)
2. Copy the file `challenges/bugfix.js`
3. Paste it into a new file under:
   ```
   solutions/yourname-bugfix.js
   ```
4. Fix the function and add a few test cases at the bottom
5. Commit your fix as part of your pull request

---

## 💡 Bonus Points

- Use clean, readable code
- Handle edge cases like short arrays or duplicates
- Add at least 2–3 example tests

---

## 🛑 Example Input / Output

```js
secondLargest([10, 5, 3, 9, 2]);     // → 9
secondLargest([42, 42, 13]);         // → 13
secondLargest([1]);                  // → undefined or error
```

---

Good luck — and enjoy the bug hunt! 🐞