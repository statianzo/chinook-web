require('./Result.css');

class Result {
  constructor(el) {
    this.el = el;
    this.results = null;
    this.rowsModified = 0;
    this.setResults = this.setResults.bind(this);
    this.setError = this.setError.bind(this);
    this.render();
  }

  setRowsModified(rowsModified) {
    this.rowsModified = rowsModified;
  }

  setResults(results) {
    this.error = null;
    this.results = results;
    this.render();
  }

  setError(error) {
    this.error = error;
    this.results = null;
    this.rowsModified = null;
    this.render();
  }

  render() {
    let content;
    if (this.error) {
      content = this.renderError();
    }
    else if (this.results && this.results.length > 0) {
      content = this.renderResults();
    }
    else if (this.results && this.rowsModified) {
      content = this.renderRowsModified();
    }
    else {
      content = this.renderEmpty();
    }

    this.el.innerHTML = `
      ${this.renderDate()}
      ${content}
    `;
  }

  renderDate() {
    const time = new Date().toTimeString().slice(0,8);
    return `
      <div class="Result__Date">${time}</div>
    `;
  }

  renderError() {
    return `
      <div>Error: ${this.error.message}</div>
    `;
  }
  renderRowsModified() {
    return `
      <div>${this.rowsModified} rows modified</div>
    `;
  }
  renderEmpty() {
    return `
      <div>No Results</div>
    `;
  }

  renderValues(result) {
    return result.values.map((row) => {
      return `
        <tr class='Result__Row'>
          ${row.map((value) => `<td class='Result__Value'>${value}</td>`).join('')}
        </tr>
      `
    }).join('');
  }

  renderHeaders(result) {
    return result.columns.map((column) => {
      return `<th class='Result__Header'>${column}</th>`
    }).join('');
  }

  renderTable(result) {
    return `
      <div>
        <div class="Result__RowCount">
          ${result.values.length} Rows
        </div>
        <table class='Result__Table'>
          <thead>
            <tr>
              ${this.renderHeaders(result)}
            </tr>
          </thead>
          <tbody>
              ${this.renderValues(result)}
          </tbody>
        </table>
      </div>
    `;
  }

  renderResults() {
    return this.results.map((result) => {
      return this.renderTable(result);
    }).join('');
  }
}

module.exports = Result;
