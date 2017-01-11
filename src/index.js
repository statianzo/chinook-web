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

const refreshSchema = () => (
  db.schema().then(schema.setTables)
);

const execute = () => {
  db.exec(editor.getValue())
    .then(({isDDL, results, rowsModified}) => {
      result.setRowsModified(rowsModified);
      result.setResults(results);
      return isDDL ? refreshSchema() : null;
    }, result.setError);
};

db.exec('PRAGMA foreign_keys = on;')
refreshSchema();

nav.onRun = execute;
editor.onRun = execute;

nav.onSampleChange = (script) => {
  editor.setValue(script);
};
