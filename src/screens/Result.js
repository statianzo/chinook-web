import './Result.css';
import mapProps from '../utils/mapProps';
import {h, Component} from 'preact';

const ResultRow = ({row}) => (
  <tr class="Result__Row">
    {row.map((cell, i) => <td class="Result__Cell" key={i}>{cell}</td>)}
  </tr>
);

const ResultTable = ({result}) => (
  <div>
    <div class="Result__RowCount">
      {result.values.length} Rows
    </div>
    <table class="Result__Table">
      <thead>
        <tr>
          {result.columns.map((column, i) => (
            <th key={i} class="Result__Header">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {result.values.map((row, i) => <ResultRow key={i} row={row} />)}
      </tbody>
    </table>
  </div>
);

class Result extends Component {
  shouldComponentUpdate = nextProps => this.props.results !== nextProps.results;

  render() {
    switch (this.props.resultState) {
      case 'NO_RESULTS':
        return <div>No Results</div>;
      case 'RESULTS':
        return (
          <div>
            {this.props.results.map((result, i) => (
              <ResultTable key={i} result={result} />
            ))}
          </div>
        );
      case 'MODIFICATION':
        return <div>x rows modified</div>;
      case 'DDL':
        return <div>ddl</div>;
      case 'ERROR':
        return <div>Oh no</div>;
      default:
        return null;
    }
  }

  renderDate() {
    const time = new Date().toTimeString().slice(0, 8);
    return `
      <div class="Result__Date">${time}</div>
    `;
  }
}

export default mapProps(({state}) => ({
  resultState: state.resultState,
  results: state.results,
}))(Result);
