import { ColDefs } from 'src/components/form/grid/GridTableBox';

//등록/수정 > 노출설정 > 거래처
export const ShowTargetColDefs: ColDefs[] = [
  {
    field: 'code',
    headerName: '',
    type: 'checkbox',
    colStyle: { width: '4%' },
    className: '',
  },
  {
    field: '',
    headerName: 'No',
    type: 'pageNumber',
    colStyle: { width: '6%' },
    className: '',
  },
  {
    field: 'code',
    headerName: '거래처코드',
    type: '',
    colStyle: { width: 'auto' },
    className: '',
  },
  {
    field: 'name',
    headerName: '거래처명',
    type: '',
    colStyle: { width: 'auto' },
    className: '',
  },
];

//등록/수정 > 노출설정 > 단가그룹, 거래처그룹
export const ShowTargetGroupColDefs: ColDefs[] = [
  {
    field: 'code',
    headerName: '',
    type: 'checkbox',
    colStyle: { width: '4%' },
    className: '',
  },
  {
    field: '',
    headerName: 'No',
    type: 'pageNumber',
    colStyle: { width: '6%' },
    className: '',
  },
  {
    field: 'name',
    headerName: '그룹명',
    type: '',
    colStyle: { width: 'auto' },
    className: '',
  },
];
