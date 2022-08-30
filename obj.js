// document.getElementById('s').onclick = function() {
//     document.getElementById('text').hidden = true;
// }

// let menuElem = document.getElementById('pets');
// let titleElem = menuElem.querySelector('.title');

// titleElem.onclick = function() {
//     menuElem.classList.toggle('open');
// }

field.onclick = function (event) {
  let fieldCor = this.getBoundingClientRect();

  let ballCor = {
    top: event.clientY - fieldCor.top - field.clientTop - ball.clientHeight / 2,
    left: event.clientX - fieldCor.left - field.clientLeft - ball.clientWidth / 2,
  };
  if (ballCor.top < 0) ballCor.top = 0;
  if (ballCor.left < 0) ballCor.left = 0;
  if (ballCor.left + ball.clientWidth > field.clientWidth) {
    ballCor.left = field.clientWidth - ball.clientWidth;
  }
  if (ballCor.top + ball.clientHeight > field.clientHeight) {
    ballCor.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCor.left + "px";
  ball.style.top = ballCor.top + "px";
};

let panes = document.querySelectorAll(".pane");

for (let pane of panes) {
  pane.insertAdjacentHTML(
    "afterbegin", '<button class="remove-button">[x]</button>'
  );
  // кнопка становится первым потомком плитки (pane)
  pane.firstChild.onclick = () => pane.remove();
}
let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
let links = document.querySelectorAll(selector);

links.forEach(link => link.style.color = 'orange')

let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>ПРивет</strong>";
document.body.append(div);


li.before("before");
li.after("after");
let olList = document.createElement("ol");
olList.innerHTML = 'prepend';
li.prepend(olList);
