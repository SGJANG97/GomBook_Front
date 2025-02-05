import { Input, InputAdornment } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  dateFormat?: string;
  date?: Date;
  onChangeCallBack?: (data?: any) => void;
}

export default function DatePickerBox(props: Props) {
  const {
    dateFormat = 'yyyy-MM-dd',
    date = new Date(),
    onChangeCallBack,
  } = props;
  return (
    <>
      <div>
        <DatePicker
          showPopperArrow={false} // 화살표 변경
          // minDate={new Date()} // 오늘 날짜 전은 선택 못하게
          dateFormat={dateFormat}
          dateFormatCalendar="yyyy년 MM월"
          selected={date}
          onChange={onChangeCallBack}
          customInput={
            // 날짜 뜨는 인풋 커스텀
            <Input
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
      <span style={{ color: 'red' }}>datepicker error message</span>
    </>
  );
}
