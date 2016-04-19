const CodeMirror = require('codemirror');
require('codemirror/mode/sql/sql')
require('./Editor.css');
const delegate = require('../utils/delegate');

class Editor {
  constructor(el) {
    this.el = el;
    this.render();
  }

  getValue() {
    return this.doc.getValue();
  }

  render() {
    this.el.innerHTML = `
      <div class='Editor__CodeMirror'></div>
    `;
    this.doc = CodeMirror(this.el.querySelector('.Editor__CodeMirror'), {
      lineNumbers: true,
      mode: 'text/x-sql',
      theme: 'railscasts'
    });
  }
}

module.exports = Editor;
