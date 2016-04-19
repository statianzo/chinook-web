const CodeMirror = require('codemirror');
require('codemirror/mode/sql/sql')
require('codemirror/addon/comment/comment')
require('./Editor.css');

class Editor {
  constructor(el) {
    this.el = el;
    this.handleKeydown = this.handleKeydown.bind(this);
    this.render();
  }

  handleKeydown(cm, e) {
    console.log(e.code)
    if ((e.ctrlKey || e.metaKey) && e.code === 'Enter') {
      this.onRun && this.onRun();
    }
    if ((e.ctrlKey || e.metaKey) && e.code === 'Slash') {
      this.doc.toggleComment();
    }
  }

  getValue() {
    return this.doc.getValue();
  }

  setValue(val) {
    return this.doc.setValue(val);
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

    this.doc.on('keydown', this.handleKeydown);
  }
}

module.exports = Editor;
