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
    if (this.error) {
      this.el.innerHTML = this.renderError();
    }
    else if (this.results && this.results.length > 0) {
      this.el.innerHTML = this.renderResults();
    }
    else if (this.results && this.rowsModified) {
      this.el.innerHTML = this.renderRowsModified();
    }
    else {
      this.el.innerHTML = this.renderEmpty();
    }
  }

  renderError() {
    return `
      <div>Error</div>
      <div>${this.error.message}</div>
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
    `;
  }

  renderResults() {
    return this.results.map((result) => {
      return this.renderTable(result);
    }).join('');
  }
}

module.exports = Result;
