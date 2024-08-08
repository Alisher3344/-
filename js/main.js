alert(`password == "3344" !!!!!!`);
const pass = "3344";
let a;
let sum = 0;
do {
  sum++;
  a = prompt("Enter the password");
} while (a != pass);
alert(`Siz parolni ${sum} martta kirittingiz`);
 AOS.init();