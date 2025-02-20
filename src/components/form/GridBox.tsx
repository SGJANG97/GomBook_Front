import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface Props {
  rowData?: GridRowsProp<any>;
  colDefs?: GridColDef<any>[];
  style?: React.CSSProperties;
}

export default function GridBox(props: Props) {
  const { rowData, colDefs = [], style } = props;
  return (
    <div style={style}>
      <DataGrid rows={rowData} columns={colDefs} />
    </div>
  );
}
