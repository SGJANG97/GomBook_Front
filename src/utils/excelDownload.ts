import * as XLSX from 'xlsx';

export const handleExcelDownload = (fileName: string, data: any) => {
  const datas = data?.length ? data : []; // data가 없으면 빈 배열
  const worksheet = XLSX.utils.json_to_sheet(datas); // JSON 데이터를 시트로 변환
  const workbook = XLSX.utils.book_new(); // 엑셀 파일 생성하기

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1'); // 생성된 엑셀 파일에 'Sheet1' 시트 추가
  XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : 'data.xlsx'); // 엑셀 파일로 저장 후 fileName 이름으로 저장
};
