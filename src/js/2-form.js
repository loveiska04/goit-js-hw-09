const formData = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const savedData = JSON.parse(localStorage.getItem(localStorageKey));

if (savedData) {
  formData.email = savedData.email;
  formData.message = savedData.message;

  form.elements.email.value = savedData.email;
  form.elements.message.value = savedData.message;
}

const inputText = e => {
  const target = e.target;

  formData[target.name] = target.value.trim();

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

const handleSubmit = e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    return alert('Fill please all fields');
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();
  formData.email = '';
  formData.message = '';
};

form.addEventListener('input', inputText);
form.addEventListener('submit', handleSubmit);