# Countdown Timer

A simple countdown timer web application built using **HTML, CSS, and JavaScript**.  
This project allows users to enter time in seconds and start a countdown that decreases every second until it reaches zero.

---

## Features

- User can enter time in seconds
- Start the countdown timer
- Stop (pause) the timer
- Reset the timer
- Displays time in **MM:SS format**
- Prevents empty or invalid input
- Input clears automatically when timer finishes
- Clean and minimal user interface

---

## Technologies Used

- **HTML5** – Structure of the web page  
- **CSS3** – Styling and layout  
- **JavaScript (DOM Manipulation)** – Timer logic and interactivity

---

## How It Works

1. The user enters the time in seconds.
2. When the **Start Timer** button is clicked:
   - JavaScript reads the input value.
   - A countdown begins using `setInterval()`.
3. The timer decreases every **1 second**.
4. Time is converted into **MM:SS format** using a formatting function.
5. When the timer reaches **0**:
   - The countdown stops.
   - The input field resets.
   - The display shows completion.

---

## Project Structure
countdown-timer
│

├── index.html → Main HTML structure

├── style.css → Styling and layout

├── script.js → Timer logic and functionality

└── README.md → Project documentation

---

## Learning Outcomes

Through this project, the following JavaScript concepts were practiced:

- DOM selection (`querySelector`)
- Event handling (`addEventListener`)
- Timer functions (`setInterval`, `clearInterval`)
- Input validation
- Conditional logic
- String formatting
- Basic UI control

---

## Future Improvements

Possible enhancements:

- Add sound notification when timer finishes
- Add preset timers (Pomodoro 25/5 minutes)
- Add progress bar animation
- Add dark/light mode toggle

---

## Author

Harsh Kamble
