import React from "react";
import { useParams } from "react-router-dom";
import "src/assets/css/common.css";

const BookDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // URL에서 book id 가져오기

    return (
        <div className="book-detail">
            <h2>책 상세 정보</h2>
            <p>Book ID: {id}</p>
            {/* 여기서 book 데이터를 불러와서 상세 정보를 렌더링하면 됨 */}
        </div>
    );
};

export default BookDetail;
