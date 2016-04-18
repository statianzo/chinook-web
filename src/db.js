const SQL = require('sql.js');
let _db = null;
const load = () => {
  if (_db) return Promise.resolve(_db);
  return fetch('vendor/chinook.sqlite')
  .then((body) => body.arrayBuffer())
  .then((buf) => (
    _db = new SQL.Database(new Uint8Array(buf))
  ));
};

module.exports = {
  exec(query) {
    return load().then((db) => db.exec(query));
  },
  run(query) {
    return load().then((db) => db.run(query));
  }
};
