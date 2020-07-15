
const feedbackButton = document.querySelectorAll('.button__chat');
const callbackButton = document.querySelectorAll('.button__call');
const sidebarButton = document.querySelector('.button__menu');


const feedbackWindow = document.querySelector('.feedback');
const callbackWindow = document.querySelector('.callback');
const sidebarWindow = document.querySelector('.sidebar');
// оверфлоу
const mainBody = document.body;

sidebarButton.addEventListener('click', openPopup);
callbackButton.forEach( elem => elem.addEventListener('click', openPopup));
feedbackButton.forEach( elem => elem.addEventListener('click', openPopup));

function openPopup(evt) {
// переменные для закрытия окон по области вне окон
    const closeFeedbackButton = feedbackWindow.querySelector('.feedback_close');
    const closeCallbackButton = callbackWindow.querySelector('.callback_close');
    const closeSidebarButton = sidebarWindow.querySelector('.sidebar_close');
// взаимодействие с окном обратной связи
    if ( evt.target.classList.contains( 'button__chat') ) {

        feedbackWindow.classList.toggle('feedback_open');
        mainBody.classList.toggle('overflow');

        feedbackWindow.addEventListener('click', (e) => {

            if ( e.target.classList.contains('feedback_open')) {
                feedbackWindow.classList.toggle('feedback_open');
                mainBody.classList.toggle('overflow');
            }
        });

        closeFeedbackButton.addEventListener('click', () => {
            mainBody.classList.remove('overflow');
            feedbackWindow.classList.remove('feedback_open');
        })
    }
// взаимодействие с окном обратной звонка
    if ( evt.target.classList.contains( 'button__call') ) {
        callbackWindow.classList.toggle('callback_open');
        mainBody.classList.toggle('overflow');

        callbackWindow.addEventListener('click', (e) => {

            if ( e.target.classList.contains('callback_open')) {
                callbackWindow.classList.toggle('callback_open');
                mainBody.classList.toggle('overflow');
            }
        });

        closeCallbackButton.addEventListener('click', () => {
            mainBody.classList.remove('overflow');
            callbackWindow.classList.remove('callback_open');
        })
    }
// взаимодействие с окном сайдбара
    if ( evt.target.classList.contains( 'button__menu')) {

        sidebarWindow.classList.toggle('sidebar_open');
        mainBody.classList.toggle('overflow');

        sidebarWindow.addEventListener('click', (e) => {

            if ( e.target.classList.contains( 'sidebar_open')) {
                sidebarWindow.classList.toggle('sidebar_open');
                mainBody.classList.toggle('overflow');
            }

        });

        closeSidebarButton.addEventListener('click', () => {
            mainBody.classList.remove('overflow');
            sidebarWindow.classList.remove('sidebar_open');
        })
    }
}