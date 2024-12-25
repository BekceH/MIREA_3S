
document.addEventListener('DOMContentLoaded', () => {
    const headerLinks = document.querySelectorAll('.header__link');

    headerLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#CDA274';
            link.style.transition = 'color 0.3s ease';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = ''; // Reset to default
        });
    });

    const buttons = document.querySelectorAll('.footer__link');

    buttons.forEach(button => {  
        button.addEventListener('mouseenter', function() {
            this.style.fontSize = '26px';   
        });
        button.addEventListener('mouseleave', function() {
            this.style.fontSize = '22px';   
        });
    });

    const homeZoneButton = document.querySelector('.home-zone__button');

    if (homeZoneButton) {
        homeZoneButton.addEventListener('mouseover', () => {
            homeZoneButton.style.animation = 'waveEffect 1s infinite, bounceEffect 1s ease-out, colorChange 3s infinite';
            homeZoneButton.style.perspective = '1000px';
            homeZoneButton.style.transformStyle = 'preserve-3d';
        });

        homeZoneButton.addEventListener('mouseout', () => {
            homeZoneButton.style.animation = 'none';
        });
    }

    // Adding keyframes for the complex animations dynamically
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        @keyframes waveEffect {
            0% {
                box-shadow: 0 0 0 0 rgba(205, 162, 116, 0.7);
            }
            50% {
                box-shadow: 0 0 20px 10px rgba(205, 162, 116, 0.5);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(205, 162, 116, 0.7);
            }
        }

        @keyframes bounceEffect {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px) rotateX(10deg);
            }
        }

        @keyframes colorChange {
            0% {
                background: linear-gradient(45deg, #CDA274, #ffffff);
            }
            50% {
                background: linear-gradient(45deg, #ffffff, #CDA274);
            }
            100% {
                background: linear-gradient(45deg, #CDA274, #ffffff);
            }
        }
    `;
    document.head.appendChild(style);
});
// Находим все кнопки с классом intro-section__buttonconst buttons = document.querySelectorAll('.intro-section__button');
// Проходимся по каждой кнопке и добавляем обработчики событий
