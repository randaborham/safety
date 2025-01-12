import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'flowbite/dist/flowbite.css';
// import {QureyClient , QueryClientProvider}
import {QueryClient,QueryClientProvider} from "react-query"

const root = ReactDOM.createRoot(document.getElementById('root'));
let query= new QueryClient()
root.render(
<QueryClientProvider client={query}>
    <App />
    </QueryClientProvider>
  
);


reportWebVitals();

