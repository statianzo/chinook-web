require('./index.css')
const db = require('./db');
//Prime the database

const Editor = require('./components/Editor');
const Result = require('./components/Result');
const Schema = require('./components/Schema');

const editorEl = document.querySelector('.Editor');
const editor = new Editor(editorEl);

const resultEl = document.querySelector('.Result');
const result = new Result(resultEl);

const schemaEl = document.querySelector('.Schema');
const schema = new Schema(schemaEl);

db.schema().then(schema.setTables);
editor.onRun = (value) => {
  db.exec(value)
    .then(result.setResults, result.setError);
};

