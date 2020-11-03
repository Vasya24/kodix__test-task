const btn = document.querySelector('.btn');
const cont = document.querySelector('.container');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close');
const form = document.querySelector('.tax-form');
const inp = document.querySelector('.tax-form__input');
const addButton = document.querySelector('.add-button');

window.onbeforeunload = () => {
  form.reset();
};

const taxCount = function (a) {
  a = inp.value;
  return (a * 12) * 0.13;
};

btn.onclick = () => {
  btn.style.opacity = 0;
  cont.style.background = 'rgba(0, 0, 0, 0.3)';
  modal.classList.add('active');
};

close.onclick = () => {
  form.reset();
  modal.classList.remove('active');
  btn.style.opacity = 1;
  cont.style.background = '';
};

const tags = document.getElementsByClassName('form-controls__tag');
for (const t of tags) {
  t.addEventListener('click', () => {
    t.classList.toggle('active');
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  taxCount();
  modal.classList.add('calculated');
  document.querySelector('.form-controls').insertAdjacentHTML('beforebegin', `
    <div class="calculated-box">
    <p>Итого можете внести в качестве досрочных:</p> 
    <ul class="calculated__list">
      <li class="calculated__list-item">
        <input type="checkbox" class="checkbox" id="cb1">
        <label for="cb1" class="label"><span>${taxCount()} рублей</span><span> в 1-й год</span></label>
      </li>
      <hr />
      <li class="calculated__list-item">
        <input type="checkbox" class="checkbox" id="cb2">
        <label for="cb2" class="label"><span>${taxCount()} рублей</span><span> в 2-й год</span></label>
      </li>
      <hr />
      <li class="calculated__list-item">
        <input type="checkbox" class="checkbox" id="cb3">
        <label for="cb3" class="label"><span>${taxCount()} рублей</span><span> в 3-й год</span></label>
      </li>
      <hr />
      <li class="calculated__list-item">
        <input type="checkbox" class="checkbox" id="cb4">
        <label for="cb4" class="label"><span>${taxCount() / 4} рублей</span><span> в 4-й год</span></label>
      </li> 
      <hr />
    </ul>
  </div>
    `);
});

addButton.onclick = () => {
  form.reset();
  modal.classList.remove('calculated');
  document.querySelector('.calculated-box').remove();
};
