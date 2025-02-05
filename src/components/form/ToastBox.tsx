import { Button, Snackbar, Stack } from '@mui/material';

export type verticalType = 'top' | 'bottom';
export type horizontalType = 'left' | 'center' | 'right';

export interface ToastData {
  message: string;
  open: boolean; //false,
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

interface Props {
  data: ToastData;
  onClick?: (data?: any) => void;
}

export default function ToastBox(props: Props) {
  const { data, onClick } = props;

  const { horizontal, vertical } = data;

  return (
    <>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <div>
          <Button onClick={onClick} variant="contained">
            toastPopup
          </Button>
        </div>

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={data?.open}
          autoHideDuration={2000}
          onClose={onClick}
          message={data?.message}
          key={vertical + horizontal}
          // severity="success"
          // action={action}
        />
      </Stack>
    </>
  );
}
