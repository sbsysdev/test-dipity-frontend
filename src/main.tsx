/* react */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
/* App */
import App from './App';
/* styles */
import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);
