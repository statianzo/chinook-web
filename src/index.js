require('./index.css')
console.log('y')
const db = require('./db');
const Editor = require('./components/Editor');

const editorEl = document.getElementById('editor');
const editor = new Editor(editorEl);
