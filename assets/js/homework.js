// 1. Вивести квадрати чисел від 1 до 10
console.log("1. Квадрати чисел від 1 до 10:");
for (let i = 1; i <= 10; i++) {
  console.log(`${i}^2 = ${i * i}`);
}

// 2. Запит пароля до правильного
const CORRECT_PASSWORD = '12345';
while (true) {
  let userInput = prompt('2. Введіть пароль:');
  if (userInput === CORRECT_PASSWORD) {
    console.log('Ви успішно увійшли в систему');
    break;
  } else {
    console.log('Невірний пароль, спробуйте ще раз');
  }
}

// 3. Сума чисел від 1 до 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("3. Сума чисел від 1 до 100 =", sum);

// 4. Числа від 10 до 50, кратні 5
console.log("4. Числа від 10 до 50, кратні 5:");
for (let i = 10; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// 5. Малюємо трикутник із зірочок
let size = Number(prompt('5. Введіть розмір трикутника:'));
console.log(`Трикутник розміру ${size}:`);
for (let i = 1; i <= size; i++) {
  console.log('*'.repeat(i));
}

// 6.Пустий квадрат з діагоналлю 
let size6 = Number(prompt("6. Введіть розмір квадрату для діагоналі:"));
console.log("Порожній квадрат з діагоналлю:");

for (let row = 0; row < size6; row++) {
  let line = '';
  for (let col = 0; col < size6; col++) {
    if (row === 0 || row === size6 - 1 || col === 0 || col === size6 - 1 || row === col) {
      line += '*';
    } else {
      line += ' ';
    }
  }
  console.log(line);
}
