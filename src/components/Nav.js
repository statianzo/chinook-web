require('./Nav.css');
const delegate = require('../utils/delegate');

class Nav {
  constructor(el) {
    this.el = el;
    this.handleRunClick = this.handleRunClick.bind(this);
    delegate(el, 'click', '.Nav__Run', this.handleRunClick);
    this.render();
  }

  getValue() {
    return this.doc.getValue();
  }

  handleRunClick() {
    this.onRun && this.onRun();
  }

  render() {
    this.el.innerHTML = `
      <div class='Nav__Header'>
        Chinook
      </div>
      <div class='Nav__Links'>
      </div>
      <div class='Nav__Actions'>
        <button class='Nav__Run'>
          Run
        </button>
      </div>
    `;
  }
}

module.exports = Nav;
