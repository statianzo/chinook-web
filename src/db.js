const SQL = require('sql.js');
let _db = null;
const load = () => {
  if (_db) return _db;
  return _db = fetch('vendor/chinook.sqlite')
  .then((body) => body.arrayBuffer())
  .then((buf) => (
    new SQL.Database(new Uint8Array(buf))
  ));
};

module.exports = {
  exec(query) {
    return load().then((db) => db.exec(query));
  },
  run(query) {
    return load().then((db) => db.run(query));
  },
  schema() {
    return load().then((db) => {
      const result = db.exec(`SELECT name FROM sqlite_master WHERE type = 'table';`)
      const tables = Array.prototype.concat.apply([], result[0].values);
      return tables.map((table) => {
        const rawColumns = db.exec(`pragma table_info("${table}");`)[0].values;
        return {
          name: table,
          columns: rawColumns.map(([cid, name, type, notnull, dflt, pk]) => ({cid, name, type, notnull, dflt, pk}))
        }
        return memo;
      });
    });
  }
};
