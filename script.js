const wrapper= document.querySelector('.wrapper');
const question= document.querySelector('.question');
const buttons= document.querySelector('.buttons');
const photo_container= document.querySelector('.photo_container');
const yesBtn = document.querySelector('.yes-btn');
const noBtn= document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I miss you tooooo!!';
    buttons.innerHTML = '';
    const img = document.createElement('img');
    img.src = 'ma.jpg?' + new Date().getTime();
    photo_container.innerHTML = ''; // Clear previous content of photo_container
    photo_container.appendChild(img);
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) +1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) +1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
