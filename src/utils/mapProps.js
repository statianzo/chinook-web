import {h} from 'preact';

const mapProps = mapper => (Component) => props =>
  <Component {...props} {...mapper(props)} />

export default mapProps;
