import { forwardRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import { Company } from 'src/models/company/Company';
// import { storeUser } from 'src/lib/store/userStore';
// import { useLoginStatusHandler } from 'src/hooks/useLoginStatus';
// import { handleClickPreventDefault } from 'src/utils/commonHandler';
// import {
//   userContactUsFaqPath,
//   userContactUsPath,
//   userContactUsReturnPath,
//   userContactUsSamplePath,
//   userEBankingPath,
//   userPolicyPath,
//   userPrivacyPolicyPath,
// } from 'src/routes/path';

// import logo from 'src/assets/images/icon_logo_w.svg';
// import instagram from 'src/assets/images/icon_instagram.svg';
// import facebook from 'src/assets/images/icon_facebook.svg';

interface Props {
  ref?: React.Ref<HTMLDivElement>;
}

const UserFooter = forwardRef<HTMLDivElement, Props>((props, ref) => {
  // const user = storeUser();
  //
  // const [company, setCompany] = useState<Company>();
  //
  // const useLoginStatus = useLoginStatusHandler();

  // useEffect(() => {
  //   setCompany({
  //     id: '1',
  //     name: '김남경',
  //     addr: '서울특별시 성동구 성수이로 65 협성빌딩 202호', //주소
  //     fax: '02-529-4132', //팩스번호
  //     employerIdNumber: '129-81-77565', //사업자등록번호
  //     telNumber: '1577-6227', //대표 전화번호
  //   });
  // }, []);

  //FN: 로그인 상태별 router
  // const handleClickLink = handleClickPreventDefault((path: string) => {
  //   useLoginStatus.handleClickLoginStatus(user, path);
  // });

  // const quickMenu = [
  //   { id: '01', name: 'FAQ', path: userContactUsFaqPath },
  //   { id: '02', name: '문의하기', path: userContactUsPath },
  //   { id: '03', name: '반품신청', path: userContactUsReturnPath },
  //   { id: '04', name: '샘플신청', path: userContactUsSamplePath },
  // ];

  return (
    <>
      <footer className="footer" ref={ref}>
        <div className="inner-content">
          {/*<div className="logo">*/}
          {/*  /!*<Link to="/">*!/*/}
          {/*  /!*  <img src={logo} alt="대한제분" />*!/*/}
          {/*  /!*</Link>*!/*/}
          {/*</div>*/}
          <div className="box">
            <div className="ft-left">
              <ul>
                {/*<li>*/}
                {/*  <Link to={userPolicyPath}>이용약관</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*  <Link to={userEBankingPath}>전자금융거래이용약관</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*  <Link to={userPrivacyPolicyPath}>개인정보처리방침</Link>*/}
                {/*</li>*/}
              </ul>
              <div className="info">
                <span>정보혁신팀</span>
              </div>
            </div>
            <div className="ft-right">
              <p>

              </p>

              {/*<ul>*/}
              {/*  {quickMenu.map((item, idx) => (*/}
              {/*    <li key={idx}>*/}
              {/*      <Link to="" onClick={(e) => handleClickLink(e, item.path)}>*/}
              {/*        {item.name}*/}
              {/*      </Link>*/}
              {/*    </li>*/}
              {/*  ))}*/}
              {/*</ul>*/}
            </div>
          </div>
          <div className="ft-bottom">
            <p>Copyright ⓒ 2025 대한제분 All rights reserved.</p>
            <ul>
              <li>
                {/*<a href="https://www.instagram.com/chefsfoodkr" target="_blank">*/}
                {/*  <img src={instagram} alt="인스타그램" />*/}
                {/*</a>*/}
              </li>
              <li>
                {/*<a*/}
                {/*  href="https://www.facebook.com/chefsfoodkorea"*/}
                {/*  target="_blank"*/}
                {/*>*/}
                {/*  <img src={facebook} alt="페이스북" />*/}
                {/*</a>*/}
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
});

export default UserFooter;
