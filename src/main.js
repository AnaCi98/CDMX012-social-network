// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-cycle
import { home } from './components/home.js';
import { login } from './components/login.js';
import { register } from './components/register.js';

const rootDiv = document.getElementById('root');
const routes = {
  '/': home,
  '/register': register,
  '/login': login,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};
window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};
const component = routes[window.location.pathname];
rootDiv.appendChild(component());
