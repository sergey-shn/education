// document.getElementById('s').onclick = function() {
//     document.getElementById('text').hidden = true;
// }

// let menuElem = document.getElementById('pets');
// let titleElem = menuElem.querySelector('.title');

// titleElem.onclick = function() {
//     menuElem.classList.toggle('open');
// }

// field.onclick = function (event) {
//   let fieldCor = this.getBoundingClientRect();

//   let ballCor = {
//     top: event.clientY - fieldCor.top - field.clientTop - ball.clientHeight / 2,
//     left: event.clientX - fieldCor.left - field.clientLeft - ball.clientWidth / 2,
//   };
//   if (ballCor.top < 0) ballCor.top = 0;
//   if (ballCor.left < 0) ballCor.left = 0;
//   if (ballCor.left + ball.clientWidth > field.clientWidth) {
//     ballCor.left = field.clientWidth - ball.clientWidth;
//   }
//   if (ballCor.top + ball.clientHeight > field.clientHeight) {
//     ballCor.top = field.clientHeight - ball.clientHeight;
//   }

//   ball.style.left = ballCor.left + "px";
//   ball.style.top = ballCor.top + "px";
// };

// let panes = document.querySelectorAll(".pane");

// for (let pane of panes) {
//   pane.insertAdjacentHTML(
//     "afterbegin", '<button class="remove-button">[x]</button>'
//   );
//   // кнопка становится первым потомком плитки (pane)
//   pane.firstChild.onclick = () => pane.remove();
// }
// let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
// let links = document.querySelectorAll(selector);

// links.forEach(link => link.style.color = 'orange')

// let div = document.createElement('div');
// div.className = "alert";
// div.innerHTML = "<strong>ПРивет</strong>";
// document.body.append(div);

// li.before("before");
// li.after("after");
// let olList = document.createElement("ol");
// olList.innerHTML = 'prepend';
// li.prepend(olList);

// const person = {
//   name: 'Gena',
//   age: 25,
//   greet: function(){
//     console.log("Greeeet!");
//   }

// }

// Object.prototype.sayHello = function() {
//   console.log('Hello');

// }
// const lena = Object.create(person)
// lena.name = "Elena"

function hello() {
  console.log("Hello!", this);
}

const person = {
  name: "Svatlana",
  age: 25,
  male: "female",
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Male is ${this.male}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

const gena = {
  name: "Gena",
  age: 23,
  male: "male",
};

// person.logInfo.bind(gena, 'Frontend', '8-999-293-22-33')()  // Bind позволяет задавать контекст и возвращает функцию, функцию можно вызвать в любое время.

person.logInfo.call(gena, "Frontend", "8-999-293-22-33"); // Call позволяет задвать контекст, но вызывает функцию сразу.

person.logInfo.apply(gena, ["Frontend", "8-999-293-22-33"]); // Apply то же самое что и call, но принимает только 2 аргумента и 2 аргумент всегда массив.
// =================================

const array = [2, 8, 4, 4, 5, 7];


const array2 = [2, 4, 5, 6, 7, 1, 2];
// function sortt(arr, n) {
//   return array.map(function(i){
//     return i * n;
//   })
// }

Array.prototype.Sorrt = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};


console.log(array.Sorrt(28));
console.log(array2.Sorrt(100));