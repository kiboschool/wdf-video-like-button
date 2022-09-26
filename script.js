/* Regular solution */

document.querySelector('button').addEventListener('click', () => {
  document.querySelector('.like-count').innerText = "1024";
  document.querySelector('button').disabled = true;
})

/* LocalStorage Solution */

var likes = localStorage.getItem('likes') || 0;
document.querySelector('.like-count').innerText = likes;

document.querySelector('button').addEventListener('click', () => {
  var count = parseInt(likes) + 1;
  document.querySelector('.like-count').innerText = count;
  localStorage.setItem('likes', count);
  document.querySelector('button').disabled = true;
})