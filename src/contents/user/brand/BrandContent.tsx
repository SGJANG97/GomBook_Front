import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';

import { apiGetUserBrandList } from 'src/lib/api/apiPath';
import { Brand } from 'src/models/brand/Brand';
import { handleClickPreventDefault } from 'src/utils/commonHandler';
import { userProductPath } from 'src/routes/path';
import { useUserApiCallHandler } from 'src/hooks/useUserApiCall';

import noImage from 'src/assets/images/temp/brand_img0.png';

export default function BrandContent() {
  const navigate = useNavigate();

  //api call
  const apiCall = useUserApiCallHandler();

  //브랜드 목록
  const [brandList, setBrandList] = useState<Brand[] | null>();

  // 브랜드 목록 조회
  useEffect(() => {
    apiGetBrandList();
  }, []);

  //브랜드 목록 조회
  const apiGetBrandList = async () => {
    // API 호출: 목록 조회 ==================================//
    let result: { list: Brand[] } = await apiCall.userApiCall(
      'GET',
      apiGetUserBrandList(),
      {}
    );

    if (result) {
      //브랜드 목록 pageing X
      setBrandList(result?.list);
    }
  };

  //FN: 상품보기 - 상품 목록
  const handleClickProduct = handleClickPreventDefault(
    (productCode: string) => {
      navigate(`/${userProductPath}?code=${productCode}`);
    }
  );

  return (
    <div className="inner-content">
      <div className="sub-title-box show-pc">
        <h2 className="title-t ty2">브랜드</h2>
      </div>

      <div className="brand-wrap">
        {brandList?.map((item, idx) => (
          <div className="brand-item" key={idx}>
            <div className="brand-img">
              <img
                src={
                  item?.files && item?.files[0]?.file
                    ? item?.files[0]?.file
                    : noImage
                }
                alt=""
              />
              {/* <img
                src={
                  item.filePath
                    ? `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/${item?.filePath}`
                    : noImage
                }
                alt=""
              /> */}
            </div>
            <div className="brand-txt">
              <h6 className="title">{item.brandName}</h6>
              <h6 className="title-eng">{item.brandEnName}</h6>
              {/* <div className="img-box">
                <img src={brand_info_img} alt="" />
              </div> */}
              <p className="text">{parse(item.brandText || '')}</p>
              {item.brandCd !== '' && (
                <Link
                  to=""
                  className="btn ty4 bd-ty2"
                  onClick={(e) => handleClickProduct(e, item.brandCd)}
                >
                  <span>상품보기</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
