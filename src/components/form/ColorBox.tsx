import { useState } from 'react';

import { Button } from '@mui/material';
import { ColorResult, CompactPicker } from 'react-color';

interface Props {
  buttonName?: string;
  color?: string;
  onChange?: (data?: any) => void;
}

export default function ColorBox(props: Props) {
  const { buttonName, color = '#fff', onChange } = props;

  const [open, setClose] = useState<boolean>(false);

  const handleChangeButton = () => {
    setClose(!open);
  };

  const handleChangeComplete = (colorValue: ColorResult) => {
    setClose(false);
    onChange?.(colorValue.hex);
  };

  return (
    <>
      <div>
        <Button
          variant="contained"
          onClick={handleChangeButton}
          sx={{ color: color }}
        >
          {buttonName}
        </Button>
      </div>

      {open && (
        <CompactPicker color={color} onChangeComplete={handleChangeComplete} />
      )}
    </>
  );
}
