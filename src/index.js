require('./index.css')
const db = require('./db');
//Prime the database
db.schema();

const Editor = require('./components/Editor');
const Result = require('./components/Result');

const editorEl = document.querySelector('.Editor');
const editor = new Editor(editorEl);

const resultEl = document.querySelector('.Result');
const result = new Result(resultEl);

editor.onRun = (value) => {
  db.exec(value)
    .then(result.setResults, result.setError);
};

