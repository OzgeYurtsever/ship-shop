import constants from '../constants';
import Nav from './Nav';

const Header = () => {
  return (
    <div>
      <div>
        <a href="">{constants.name}</a>
      </div>
      <div>
        <Nav />
      </div>
      <div>
        <p>Search</p>
      </div>
      <div>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Header;
