const CodeMirror = require('codemirror');
require('codemirror/mode/sql/sql')
require('./index.css')
const db = require('./db');
db.exec('SELECT COUNT(*) FROM Artist')
  .then(console.log.bind(console), console.log.bind(console));

const el = document.getElementById('editor');
CodeMirror(el, {
  lineNumbers: true,
  mode: 'text/x-sql',
  theme: 'railscasts'
});
