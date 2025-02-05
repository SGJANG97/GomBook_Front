export const handleIsMobile = () => {
  const userAgent = navigator.userAgent;
  // 모바일 장치의 User-Agent 문자열을 검사
  const mobile =
    /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

  return mobile;
};
