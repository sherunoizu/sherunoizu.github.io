// require('dotenv').config();

const circle = document.querySelector(`.progress-ring__circle`);
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = ` ${circumference} ${circumference} `;
circle.style.strokeDashoffset = circumference;

function setProgress (percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}



function changeProgress () {
    const btn = document.querySelector(`.play_btn`);
    const closeBtn = document.querySelector(`.btn_close`);
    btn.addEventListener(`mouseover`, () => {
        circle.style.strokeDashoffset = 0;
        showVideoTimeout = setTimeout(showVideo, 1900);
        btn.addEventListener(`mouseout`, () => {
            circle.style.strokeDashoffset = circumference;
            clearTimeout(showVideoTimeout);
            return;
        });
        
    });
    btn.addEventListener(`click`, () => {
        showVideo();
    });

    closeBtn.addEventListener(`click`, () => {
        hideVideo();
    });
   
}



function showVideo () {
    const video = document.querySelector(`.companyVideo__video`);
    const sectionContent = document.querySelector(`.companyVideo__wrapper`);
    const closeBtn = document.querySelector(`.btn_close`);
    sectionContent.style.opacity = `0`;

    setTimeout(() => {
        sectionContent.style.display = `none`;
    }, 600);
    
    video.style.transform = `translateX(-50%)`;
    closeBtn.style.transform = `translate(0px,25px)`;

}

function hideVideo () {
    const video = document.querySelector(`.companyVideo__video`);
    const sectionContent = document.querySelector(`.companyVideo__wrapper`);
    const closeBtn = document.querySelector(`.btn_close`);
    
    video.style.transform = `translateX(-200%)`;
    // video.style.display = `none`;
    closeBtn.style.transform = `translate(30px,25px)`;

    setTimeout(() => {
        sectionContent.style.opacity = `1`;
    }, 600);

    sectionContent.style.display = `flex`;
    
    
    
}



changeProgress();


function focusedInput() {
    const label = document.querySelectorAll(`.input-wrapper`);
    const input = document.querySelectorAll(`.text`);
    
    for (let i = 0; i < input.length; i++) {
       
        input[i].addEventListener(`focus`, () => {
            label[i].classList.add(`not-empty`);
        });
        input[i].addEventListener(`blur`, () => {
            if (input[i].value == ``) {
                
                label[i].classList.remove(`not-empty`);
            }
                
        });
                
    }
}

focusedInput();

function maskedInput() {
    // const telIput = document.querySelector(`input[name=phone]`);
    // telIput.mask("+7 (999) 999-99-99");
    var phoneMask = IMask(
        document.getElementById('phone-mask'), {
        mask: '+{7}(000)000-00-00'
     });
}

maskedInput();

// function mailer() {
//     const nodemailer = require('nodemailer');

//     console.log(process.env.EMAIL);

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD
//         }
//     });

//     const mailOptions = {
//         from: 'n79161418450@gmail.com',
//         to: 'n79161418450@gmail.com',
//         subject: 'Письмо отправленное через 1231234',
//         text: 'Текст самого письма'
//     };

//     transporter.sendMail(mailOptions);
// }

// function sendForm() {
//     const submitBtn = document.querySelector(`consultation-form__button`);
//     submitBtn.addEventListener(`click`, (e) => {
//         e.preventDefault();
//         mailer();
//     });
// }

// sendForm();




function flipCard() {
    const flippingCard = document.querySelectorAll(`.flip-card`);

    const front = document.querySelectorAll(`.flip-card-front`);
    const back = document.querySelectorAll(`.flip-card-back`);


    for (let i =0; i < flippingCard.length; i++) {
        front[i].addEventListener(`click`, () => {
            flippingCard[i].classList.add(`flipped`);
        });
        back[i].addEventListener(`click`, () => {
            flippingCard[i].classList.remove(`flipped`);
        });
    }

}
flipCard();

function toggleHeader(humburger) {
    const hidingElement = document.querySelectorAll(`.hiding`);

    if (humburger.classList.contains(`active`)) {
        for (let i = 0; i < hidingElement.length; i++) {
            // hidingElement[i].style.opacity = '0';
            hidingElement[i].style.opacity = '0';
        }
    } else {
        for (let i = 0; i < hidingElement.length; i++) {
            hidingElement[i].style.opacity = '1';
        }
    }

    
}



function menu() {
    const humburger = document.querySelector(`.humburger`);
    const overlay = document.querySelector(`.overlay`);
    const menu = document.querySelector(`.header__menu-item`);
    console.log(menu);
    humburger.addEventListener(`click`, () => {
        humburger.classList.toggle(`active`);
        overlay.classList.toggle(`active`);
        toggleHeader(humburger);
        return;
    });
    overlay.addEventListener(`click`, () => {
        humburger.classList.remove(`active`);
        overlay.classList.remove(`active`);
    });
}

menu();


