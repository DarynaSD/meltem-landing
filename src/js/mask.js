import IMask from 'imask';

export const createCustomMask = () => {
  const element = document.getElementById('user-tel');
  console.log("mask element" >> element)
  const maskOptions = {
    mask: '+{380}-00-000-00-00'
  };
  const mask = IMask(element, maskOptions);
  console.log("mask" >> mask)
}
