import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import "src/assets/css/common.css";

import { apiPostUserLogin } from "src/lib/api/apiPath";
import {
    getLocalStorage,
    removeStorage,
    setLocalStorage,
    setLocalStorageAuth,
} from "src/utils/localStorage";
import { userMainPath } from "src/routes/path";
import { handleClickPreventDefault } from "src/utils/commonHandler";
import { storeUserModalActions } from "src/lib/store/userModalStore";

// import UserIdSearchContent from "./UserIdSearchContent";
// import UserPasswordSearchContent from "src/contents/user/login/UserPasswordSearchContent";
import InputBox from "src/components/form/InputBox";

// import icon_logo from "src/assets/images/icon_logo.svg";
import { useUserApiCallHandler } from "src/hooks/useUserApiCall";
import { storeUserActions } from "src/lib/store/userStore";
import { AuthUser } from "src/models/user/AuthUser";

export default function UserLoginContent() {
    const { search } = useLocation();
    const navigate = useNavigate();
    const apiCall = useUserApiCallHandler();

    // store 상태 관리
    const userAction = storeUserActions();
    const userModalAction = storeUserModalActions();

    const [userId, setUserId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loginStayYn, setLoginStayYn] = useState<string>("N");
    const [idSaveCheck, setIdSaveCheck] = useState<boolean>(false);
    const [idError, setIdError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    // 저장된 아이디 및 로그인 상태 불러오기
    useEffect(() => {
        const savedId = getLocalStorage("id");
        if (savedId) {
            setUserId(savedId);
            setIdSaveCheck(true);
        }
        const loginStatusKeep = getLocalStorage("loginStatusKeep");
        if (loginStatusKeep === "Y") {
            setLoginStayYn("Y");
        }
    }, []);

    // 로그인 상태 유지 체크
    const handleChangeLoginStatusKeep = (e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setLoginStayYn(checked ? "Y" : "N");
        checked ? setLocalStorage("loginStatusKeep", "Y") : removeStorage("loginStatusKeep");
    };

    // 아이디 저장 체크
    const handleChangeIdSave = (e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setIdSaveCheck(checked);
        checked ? setLocalStorage("id", userId) : removeStorage("id");
    };

// 로그인 유효성 검사
    const handleValidation = () => {
        let isValid = true;

        if (!userId) {
            setIdError("아이디를 입력해 주세요.");
            isValid = false;
        } else {
            setIdError("");
        }

        if (!password) {
            setPasswordError("비밀번호를 입력해 주세요.");
            isValid = false;
        } else {
            setPasswordError("");
        }

        return isValid;
    };

    // 로그인 요청
    const handleClickLogin = async () => {
        if (!handleValidation()) return;

        // 아이디 저장
        if (idSaveCheck) {
            setLocalStorage("id", userId);
        }

        const params = { userId, password, loginStayYn };
        const result = await apiCall.userApiCall("POST", apiPostUserLogin(), params, "아이디/비밀번호 오류");

        if (result) {
            setLocalStorageAuth("userAuth", result);
            const userInfo = localStorage.getItem("userInfo") || "";
            const user: AuthUser = JSON.parse(userInfo);
            userAction.setUser(user);

            // 리디렉션 처리
            const redirectPath = new URLSearchParams(search).get("redirectPath");
            navigate(redirectPath || userMainPath);
        }
    };

    // 아이디 찾기
    // const handleUserIdSearch = handleClickPreventDefault(() => {
    //     userModalAction.setUserModal({
    //         type: "popup",
    //         modalOpen: true,
    //         headerTitle: "아이디 찾기",
    //         content: <UserIdSearchContent onClickCallback={(e) => setUserId(e)} />,
    //     });
    // });
    //
    // // 비밀번호 찾기
    // const handlePasswordSearch = handleClickPreventDefault(() => {
    //     userModalAction.setUserModal({
    //         type: "popup",
    //         modalOpen: true,
    //         headerTitle: "비밀번호 찾기",
    //         content: <UserPasswordSearchContent />,
    //     });
    // });

    return (
        <div className="login-wrap">
            <div className="inner-content">
                <div className="logo">
                    <img src={require("src/assets/images/image_logo.png")} alt="로고" />
                </div>
                <div className="login-box">
                    {/* 아이디 입력 */}
                    <div className="inp-cont">
                        <InputBox
                            inputClassName="t-inp"
                            value={userId}
                            onChangeCallback={(e) => {
                                if (e) setIdError("");
                                setUserId(e);
                            }}
                            onKeyDownCallback={() => handleValidation() && handleClickLogin()}
                            placeholder="아이디를 입력해 주세요."
                        />
                        {idError && <p className="t-text ty3 c-red fw-4">{idError}</p>}
                    </div>

                    {/* 비밀번호 입력 */}
                    <div className="inp-cont">
                        <InputBox
                            type="password"
                            inputClassName="t-inp"
                            value={password}
                            onChangeCallback={(e) => {
                                if (e) setPasswordError("");
                                setPassword(e);
                            }}
                            onKeyDownCallback={() => handleValidation() && handleClickLogin()}
                            placeholder="비밀번호를 입력해 주세요."
                        />
                        {passwordError && <p className="t-text ty3 c-red fw-4">{passwordError}</p>}
                    </div>
                </div>

                {/* 로그인 유지 & 아이디 저장 */}
                <div className="login-save-box">
                    <label>
                        <input type="checkbox" onChange={handleChangeLoginStatusKeep} checked={loginStayYn === "Y"} />
                        <span className="text">로그인 상태유지</span>
                    </label>
                    <label>
                        <input type="checkbox" onChange={handleChangeIdSave} checked={idSaveCheck} />
                        <span className="text">아이디 저장</span>
                    </label>
                </div>

                {/* 로그인 버튼 */}
                <div className="btn-area">
                    <Link to="#" className="btn ty1 c-black w-full" onClick={handleClickLogin}>
                        <span>로그인</span>
                    </Link>
                </div>

                {/* 아이디/비밀번호 찾기 */}
                {/*<div className="login-link-box">*/}
                {/*    <Link to="#" onClick={handleUserIdSearch}>아이디 찾기</Link>*/}
                {/*    <Link to="#" onClick={handlePasswordSearch}>비밀번호 찾기</Link>*/}
                {/*</div>*/}

                {/*<p className="copyright">Copyright ⓒ 2025 대한제분 All rights reserved.</p>*/}
            </div>
        </div>
    );
}
