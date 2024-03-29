import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Details from './routes/Details';
import Home from './routes/Home';
import Detail from './routes/Detail';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>

        <Route path="/" element={<App />}>

          <Route index element={<Home />} />

          <Route path="details" element={<Details />}>
            <Route path=":country" element={<Detail />} />
          </Route>

        </Route>

      </Routes>

    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)