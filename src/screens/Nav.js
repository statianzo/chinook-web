import './Nav.css';
import {h} from 'preact';

const Nav = (props) => (
  <div className='Nav'>
    <div className='Nav__Header'>
      Chinook
    </div>
    <div className='Nav__Links'>
    </div>
    <div className='Nav__Actions'>
      <button className='Nav__Run'>
        Run
      </button>
    </div>
  </div>
);

export default Nav;
