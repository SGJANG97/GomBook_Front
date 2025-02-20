export const handleCopyClipBoard = async (pathname: string) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  try {
    await navigator.clipboard.writeText(`${baseUrl}${pathname}`);
    console.log('클립보드에 링크가 복사되었습니다.');
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
