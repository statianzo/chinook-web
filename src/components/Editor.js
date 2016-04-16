const CodeMirror = require('codemirror');
require('codemirror/mode/sql/sql')

class Editor {
  constructor(el) {
    this.el = el;
    this.doc = CodeMirror(el, {
      lineNumbers: true,
      mode: 'text/x-sql',
      theme: 'railscasts'
    });
  }

  getValue() {
    return this.doc.getValue();
  }
}

module.exports = Editor;
