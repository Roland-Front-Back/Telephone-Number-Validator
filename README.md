# 📞 Telephone Number Validator

A simple and responsive web application to validate U.S. phone numbers using regular expressions. Built with HTML, CSS, and Vanilla JavaScript.

---

## 🚀 Features

- Validates U.S. phone numbers using a robust regex pattern

- Real-time result display (valid/invalid)

- Keeps a history of checked numbers

- Option to clear history

- Responsive, mobile-friendly UI

- Custom scrollbar styling

---

## ✅ Valid Formats

Examples of valid U.S. phone number formats:

```scss
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
```

---

## 📁 Project Structure

```css
.
├── index.html
├── assets
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── script.js
│   └── img
│       └── smartphone.png
```

---

## 🛠️ Tech Stack

- HTML5

- CSS3

- JavaScript (ES6)

---

## 📄 How It Works

1. User enters a phone number into the input field.

2. Click Check to validate the number.

3. A list displays whether the number is valid or invalid.

4. Click Clear to reset the result history.

Validation is performed using the following regex:

```js
/^(?:1[ ]?)?(?:\(([0-9]{3})\)[ -]?|([0-9]{3})[ -]?)([0-9]{3})[ -]?([0-9]{4})$/;
```

---

## 📦 Getting Started

1. Clone the Repository

```bash
git clone https://github.com/your-username/telephone-validator.git
cd telephone-validator
```

2. Open in Browser

Just open index.html in your preferred browser.

---

📌 Responsive Design

Fully responsive layout using flexbox and media queries to ensure usability across devices.

---

🧼 Styling Highlights

- Google Fonts (Roboto)

- CSS custom properties (:root variables)

- Custom scrollbars

- Smooth buttons with hover and active states

---

## 🙌 Contributing

Contributions are welcome! Please fork the repo and submit a pull request.
