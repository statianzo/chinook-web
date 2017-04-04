import {h, Component} from 'preact';
import Nav from './Nav';
import Schema from './Schema';
import Editor from './Editor';
import Result from './Result';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="App__Top">
          <Schema dispatch={this.props.dispatch} state={this.props.state} />
          <Editor dispatch={this.props.dispatch} state={this.props.state} />
        </div>
        <div className="App__Result">
          <Result dispatch={this.props.dispatch} state={this.props.state} />
        </div>
      </div>
    );
  }
}

export default App;
