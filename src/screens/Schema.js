import './Schema.css';
import {loadSchema} from '../state/actions';
import mapProps from '../utils/mapProps';
import {h, Component} from 'preact';

const SchemaColumn = ({column}) => (
  <tr>
    <td>{column.name}</td>
    <td className="Schema__ColumnType">{column.type}</td>
  </tr>
);

const SchemaTable = ({table}) => (
  <div className="Schema__Table">
    <div>{table.name}</div>
    <table className="Schema__TableColumns">
      {table.columns.map(column => <SchemaColumn column={column} />)}
    </table>
  </div>
);

class Schema extends Component {
  componentDidMount = () => {
    this.props.loadSchema();
  };

  render = () => (
    <div className="Schema">
      <div className="Schema__Tables">
        {this.props.schema.map(table => <SchemaTable table={table} />)}
      </div>
    </div>
  );
}

export default mapProps(({dispatch, state}) => ({
  loadSchema: loadSchema(dispatch),
  schema: state.schema,
}))(Schema);
