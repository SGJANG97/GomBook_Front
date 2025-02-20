import { Input, InputAdornment } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  className?: string;
  dateFormat?: string;
  startDate?: any;
  endDate?: any;
  onChangeCallBack?: (data?: any) => void;
}

export default function DateRangePickerBox(props: Props) {
  const {
    className,
    dateFormat = 'yyyy-MM-dd',
    startDate = new Date(),
    endDate = new Date(),
    onChangeCallBack,
  } = props;

  return (
    <>
      <div>
        <DatePicker
          className={className}
          selectsRange={true}
          dateFormat={dateFormat}
          dateFormatCalendar="yyyy년 MM월"
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          showPopperArrow={false} // 화살표 변경
          // minDate={new Date()} // 오늘 날짜 전은 선택 못하게
          onChange={onChangeCallBack}
          customInput={
            // 날짜 뜨는 인풋 커스텀
            <Input
              value={`${startDate} - ${endDate}`}
              style={{ width: '250px' }}
              endAdornment={
                <InputAdornment position="end">
                  <CalendarTodayIcon />
                </InputAdornment>
              }
            />
          }
        />
      </div>
      <span style={{ color: 'red' }}>daterangepicker error message</span>
    </>
  );
}
