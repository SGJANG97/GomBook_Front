import { BarChart } from '@mui/x-charts/BarChart';

interface Props {
  dataset?: Array<any>;
  yAxis?: Array<any>;
  series?: Array<any>;
  width?: number;
  height?: number;
  chartSetting?: any;
}

export default function ChartBox(props: Props) {
  const { dataset } = props;

  const valueFormatter = (value: number | null) => {
    return `${value}mm`;
  };

  const chartSetting = {
    xAxis: [
      {
        label: 'rainfall (mm)',
      },
    ],
    width: 500,
    height: 400,
  };

  return (
    <>
      <BarChart
        dataset={[
          {
            london: 59,
            paris: 57,
            newYork: 86,
            seoul: 21,
            month: 'Jan',
          },
          {
            london: 50,
            paris: 52,
            newYork: 78,
            seoul: 28,
            month: 'Feb',
          },
        ]}
        // xAxis={[{ data: xLabels, scaleType: 'band' }]}
        yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
        layout="horizontal"
        {...chartSetting}
      />
    </>
  );
}
