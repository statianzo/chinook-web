require('./Schema.css');

class Schema {
  constructor(el) {
    this.el = el;
    this.tables = null;
    this.setTables = this.setTables.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.renderColumn = this.renderColumn.bind(this);
  }

  setTables(tables) {
    this.tables = tables;
    this.render();
  }

  renderColumn(column) {
    return `
      <tr>
        <td>${column.name}</td>
        <td class='Schema__ColumnType'>${column.type}</td>
      </tr>
    `;
  }

  renderTable(table) {
    return `
      <div class='Schema__Table'>
        <div>${table.name}</div>
        <table class='Schema__TableColumns'>
          ${table.columns.map(this.renderColumn).join('')}
        </table>
      </div>
    `;
  }

  render() {
    this.el.innerHTML = `
      <div class='Schema__Tables'>
        ${this.tables.map(this.renderTable).join('')}
      </div>
    `;
  }
}

module.exports = Schema;
