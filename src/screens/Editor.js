import './Editor.css';
import {h, Component} from 'preact';
import CodeMirror from 'codemirror';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/comment/comment';
import mapProps from '../utils/mapProps';
import {changeText, execSql} from '../state/actions';

class Editor extends Component {
  componentDidMount = () => {
    this.doc = CodeMirror(this.editorEl, {
      lineNumbers: true,
      mode: 'text/x-sql',
      theme: 'railscasts',
    });
    this.doc.on('keydown', this.handleKeydown);
    this.doc.on('change', this.handleChange);
  };

  handleChange = doc => {
    this.props.changeText(doc.getValue());
  };

  shouldComponentUpdate = nextProps => nextProps.text !== this.doc.getValue();

  componentDidUpdate = () => {
    this.doc.setValue(this.props.text);
  };

  handleKeydown = (doc, e) => {
    if ((e.ctrlKey || e.metaKey) && e.code === 'Enter') {
      this.props.execSql(this.props.text);
    }
    if ((e.ctrlKey || e.metaKey) && e.code === 'Slash') {
      this.doc.toggleComment();
    }
  };

  render = () => (
    <div class="Editor">
      <div ref={ref => this.editorEl = ref} class="Editor__CodeMirror" />
    </div>
  );
}
export default mapProps(({dispatch, state}) => ({
  changeText: changeText(dispatch),
  execSql: execSql(dispatch),
  text: state.text,
}))(Editor);
