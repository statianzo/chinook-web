import './Editor.css';
import {h, Component} from 'preact';
import CodeMirror from 'codemirror';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/comment/comment';

class Editor extends Component {
  componentDidMount = () => {
    this.doc = CodeMirror(this.editorEl, {
      lineNumbers: true,
      mode: 'text/x-sql',
      theme: 'railscasts',
    });
    this.doc.on('keydown', this.handleKeydown);
  };

  handleKeydown = (cm, e) => {
    if ((e.ctrlKey || e.metaKey) && e.code === 'Enter') {
      this.props.onRun && this.props.onRun();
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
export default Editor;
