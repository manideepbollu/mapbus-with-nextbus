import React from 'react';
import { footer } from './stylesheets/app.scss';

const Header = () => (
  <div className={footer}>
    © 2018 -&nbsp;
    <a
      href="https://manideepbollu.herokuapp.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Manideep Bollu
    </a>
    . App uses NextBus API
  </div>
);

export default Header;
