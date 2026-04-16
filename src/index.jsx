/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import App from './App';

// Set a random Mii resident as the favicon on every page load
const randomMiiId = Math.floor(Math.random() * 20) + 1;
const faviconEl = document.querySelector("link[rel='icon']");
if (faviconEl) {
  faviconEl.href = `./assets/img/top/slide_residents_${randomMiiId}.webp`;
}

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute is misspelled?',
  );
}

render(() => <App />, root);
