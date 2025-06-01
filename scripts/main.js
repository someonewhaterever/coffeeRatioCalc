import Header from './Header.js';
import './calculator.js';

new Header();

if (window.location.pathname === ('calculator.html')) {
    import('./calculator.js')
}