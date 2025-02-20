import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

interface Props {
  onClickCallback?: (addr: string, zipCode: string) => void;
}

export default function DaumAddressSearchBox(props: Props) {
  const { onClickCallback } = props;

  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    onClickCallback?.(fullAddress, data.zonecode);
  };

  return (
    <>
      <DaumPostcodeEmbed
        onComplete={handleComplete}
        {...props}
        style={{ width: '400px', height: '470px' }}
      />
    </>
  );
}
