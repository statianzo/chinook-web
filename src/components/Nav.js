require('./Nav.css');
const delegate = require('../utils/delegate');

const samples = [
  {
    name: 'Hello World',
    script: `-- Hello World: As simple as it gets
SELECT 'Hello World!';`
  },
  {
    name: 'SELECT',
    script: `-- Select: Grab Customer Names
SELECT FirstName, LastName
FROM Customer;`
  },
  {
    name: 'WHERE',
    script: `-- WHERE: Only customers in the USA
SELECT FirstName, LastName
FROM Customer
WHERE Country = 'USA';`
  },
  {
    name: 'Joins Simple',
    script: `-- Joins: Combine Artists with Albums
SELECT *
FROM Artist ar
JOIN Album al ON ar.ArtistId = al.ArtistId;`
  },
  {
    name: 'Joins Filtered',
    script: `-- Joins: Which artist made the album 'Let There Be Rock'?
SELECT ar.Name
FROM Artist ar
JOIN Album al ON ar.ArtistId = al.ArtistId
WHERE al.Title = 'Let There Be Rock';`
  },
  {
    name: 'Joins Advanced',
    script: `-- Joins Advanced: What is the total length of all Queen tracks?
SELECT SUM(t.Milliseconds)
FROM Artist ar
JOIN Album al ON ar.ArtistId = al.ArtistId
JOIN Track t ON t.AlbumId = al.AlbumId
WHERE ar.Name = 'Queen';`
  },
  {
    name: 'Foreign Keys Inserting',
    script: `-- Foreign Keys: Insert an Album with an unknown Artist
INSERT INTO Album(ArtistId, Title) VALUES(999999, 'Hot New Mixtape');`
  }, 
  {
    name: 'Foreign Keys Deleting',
    script: `-- Foreign Keys: Delete an Artist with existing albums
DELETE FROM Album WHERE ArtistId = 2;`
  }, 
  {
    name: 'Transactions',
    script: `-- Transactions: Create a new Artist and Album without a Title
BEGIN;
INSERT INTO Artist(Name) VALUES('Loose Cannons');
INSERT OR ROLLBACK INTO Album(AlbumId) VALUES(last_insert_rowid());
COMMIT;
/*SELECT * FROM Artist WHERE Name = 'Loose Cannons'; */`

  }, 
];

class Nav {
  constructor(el) {
    this.el = el;
    this.handleRunClick = this.handleRunClick.bind(this);
    this.handleSampleChange = this.handleSampleChange.bind(this);
    this.renderSample = this.renderSample.bind(this);
    this.renderSamplePicker = this.renderSamplePicker.bind(this);
    delegate(el, 'click', '.Nav__Run', this.handleRunClick);
    delegate(el, 'change', '.Nav__SamplePicker', this.handleSampleChange);
    this.render();
  }

  getValue() {
    return this.doc.getValue();
  }

  handleRunClick() {
    this.onRun && this.onRun();
  }

  handleSampleChange(e) {
    const sample = samples[e.target.value];

    if (sample && this.onSampleChange) {
      this.onSampleChange(sample.script);
    }
  }

  renderSample(sample, index) {
    return `<option value='${index}'>${sample.name}</option>`;
  }

  renderSamplePicker() {
    return `
      <select class='Nav__SamplePicker'>
        <option disabled selected>Samples</option>
        ${samples.map(this.renderSample).join('')}
      </select>
    `
  }

  render() {
    this.el.innerHTML = `
      <div class='Nav__Header'>
        Chinook
      </div>
      <div class='Nav__Links'>
        ${this.renderSamplePicker()}
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
