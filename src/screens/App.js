import {h, Component} from 'preact';
import Nav from './Nav';
import Schema from './Schema';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Schema
          dispatch={this.props.dispatch}
          state={this.props.state}
        />
      </div>
    );
  }
}

export default App;
