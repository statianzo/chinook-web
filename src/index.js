require('./index.css')
const db = require('./db');

const Nav = require('./components/Nav');
const Editor = require('./components/Editor');
const Result = require('./components/Result');
const Schema = require('./components/Schema');

const navEl = document.querySelector('.Nav');
const nav = new Nav(navEl);

const editorEl = document.querySelector('.Editor');
const editor = new Editor(editorEl);

const resultEl = document.querySelector('.Result');
const result = new Result(resultEl);

const schemaEl = document.querySelector('.Schema');
const schema = new Schema(schemaEl);

db.schema().then(schema.setTables);
nav.onRun = () => {
  db.exec(editor.getValue())
    .then(result.setResults, result.setError);
};

