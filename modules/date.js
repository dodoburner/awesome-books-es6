import { DateTime } from './luxon.js';

const createDate = () => {
  const now = DateTime.now().c;
  console.log(now);
  const dateBox = document.createElement('div');
  const listPage = document.querySelector('.list');
  dateBox.innerHTML = `${now.day}-${now.month}-${now.year}, ${now.hour}:${now.minute}`;
  document.body.insertBefore(dateBox, listPage);
  dateBox.classList.add('date-box');
};

export default createDate;