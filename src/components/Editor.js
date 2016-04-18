const CodeMirror = require('codemirror');
require('codemirror/mode/sql/sql')
require('./Editor.css');
const delegate = require('../utils/delegate');

class Editor {
  constructor(el) {
    this.el = el;
    this.handleRunClick = this.handleRunClick.bind(this);
    delegate(el, 'click', '.Editor__Run', this.handleRunClick);
    this.render();
  }

  getValue() {
    return this.doc.getValue();
  }

  handleRunClick() {
    this.onRun && this.onRun(this.getValue());
  }

  render() {
    this.el.innerHTML = `
      <div class='Editor__CodeMirror'></div>
      <div class='Editor__Actions'>
        <button class='Editor__Run'>
          Run
        </button>
      </div>
    `;
    this.doc = CodeMirror(this.el.querySelector('.Editor__CodeMirror'), {
      lineNumbers: true,
      mode: 'text/x-sql',
      theme: 'railscasts'
    });
  }
}

module.exports = Editor;
