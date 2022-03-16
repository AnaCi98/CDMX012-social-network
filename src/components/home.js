// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const home = () => {
  const containerStart = document.createElement('section');
  containerStart.setAttribute('class', 'containerStart');
  const logoHome = document.createElement('img');
  logoHome.setAttribute('class', 'logo');
  logoHome.setAttribute('src', 'img/Logo.png');
  const welcomeText = document.createElement('section');
  welcomeText.setAttribute('class', 'welcomeText');
  const welcomeParagraph = document.createElement('p');
  welcomeParagraph.textContent = ' ¡Bienvenida! ';
  const welcomeParagraphTwo = document.createElement('p');
  welcomeParagraphTwo.textContent = 'Conecta con tu mundo tech';
  const containerButtons = document.createElement('section');
  containerButtons.setAttribute('class', 'containerButtons');
  const buttonRegister = document.createElement('button');
  buttonRegister.setAttribute('class', 'button');
  buttonRegister.textContent = 'Registrate';
  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('class', 'button');
  buttonLogin.textContent = 'Iniciar sesión';
  containerButtons.appendChild(buttonRegister);
  containerButtons.appendChild(buttonLogin);
  welcomeText.appendChild(welcomeParagraph);
  welcomeText.appendChild(welcomeParagraphTwo);
  containerStart.appendChild(logoHome);
  containerStart.appendChild(welcomeText);
  containerStart.appendChild(containerButtons);
  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });
  return containerStart;
};
