document.getElementById('join-btn')
  .addEventListener('click', () => window.open('https://w3.org'));

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.welcome-txt');
for (let elm of elements) {
  observer.observe(elm);
}

function onEntryTwo(entryTwo) {
  entryTwo.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show2');
    }
  });
}
let options1 = { threshold: [0.5] };
let observer1 = new IntersectionObserver(onEntryTwo, options1);
let elements1 = document.querySelectorAll('.the-madmetaverse-txt');
for (let elm1 of elements1) {
  observer1.observe(elm1);
}

