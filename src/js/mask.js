import IMask from 'imask';

const element = document.getElementById('user-tel');
const maskOptions = {
  mask: '+{380}-00-000-00-00'
};
const mask = IMask(element, maskOptions);