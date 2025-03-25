# 📌 String Calculator (TDD)
> A **Test-Driven Development (TDD)** implementation of a String Calculator in **TypeScript**, using **Jest** for unit testing.

---

## 🚀 Overview
This project demonstrates **Test-Driven Development (TDD)** by building a **String Calculator** that supports:
- Handling an empty string (`""`) as input.
- Adding numbers separated by **commas (`,`)** and **newlines (`\n`)**.
- Supporting **custom single and multi-character delimiters**.
- Throwing errors for **negative numbers**.
- Ignoring numbers greater than **1000**.

---

## 🛠 Technologies Used
- **TypeScript** – For strong type safety and maintainability.
- **Jest** – For unit testing, ensuring reliability.
- **Node.js** – JavaScript runtime for execution.

---

## 📂 Project Structure
```
string-calculator-tdd/
│── src/
│   ├── stringCalculator.ts   # Main logic of the calculator
│── tests/
│   ├── stringCalculator.test.ts   # Jest test cases
│── package.json               # Project dependencies and scripts
│── README.md                  # Project documentation
│── tsconfig.json               # TypeScript configuration
```

---

## 🏗 Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/Khervyngupta/string-calculator-tdd
cd string-calculator-tdd
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Run Tests
```sh
npm test
```

---

## 📜 String Calculator Implementation
The `add()` function parses a string of numbers, applies custom delimiters, and returns their sum.

### ✅ Supported Features

| Feature | Example Input | Expected Output |
|---------|--------------|----------------|
| Empty String | `""` | `0` |
| Single Number | `"5"` | `5` |
| Two Numbers | `"1,2"` | `3` |
| Multiple Numbers | `"1,2,3"` | `6` |
| Newline as Separator | `"1\n2,3"` | `6` |
| Custom Delimiter | `"//;\n1;2;3"` | `6` |
| Multi-Character Delimiters | `"//[***]\n1***2***3"` | `6` |
| Multiple Delimiters | `"//[*][%]\n1*2%3"` | `6` |
| Negative Numbers | `"1,-2,3,-4"` | Error: `"Negative numbers not allowed: -2, -4"` |
| Ignore >1000 | `"2,1001"` | `2` |

---

## 🧪 Test-Driven Development (TDD) Approach
This project follows the **Red-Green-Refactor** cycle:
1. **Write a failing test** (`Red` phase) 🔴
2. **Implement the code to pass the test** (`Green` phase) 🟢
3. **Refactor the code for optimization** (`Refactor` phase) 🔄

All test cases are written in `tests/stringCalculator.test.ts` using **Jest**.


## 🏆 Future Enhancements
- [ ] Add support for **decimal numbers**.
- [ ] Implement an **interactive CLI version**.
- [ ] Extend for **REST API** integration.



### 🌟 Like this project? Give it a star ⭐ on GitHub!
🚀 **Happy Coding!**