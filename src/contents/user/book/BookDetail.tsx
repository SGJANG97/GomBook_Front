import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "src/assets/css/common.css"; // 기존 CSS 파일 불러오기

interface Book {
    id: string;
    title: string;
    author: string;
    year: string;
    publisher: string;
    description: string;
    image: string;
}

const BookDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // URL에서 book ID 가져오기
    const [book, setBook] = useState<Book | null>(null);

    useEffect(() => {
        // 더미 데이터 (실제 API 연결 시 대체 가능)
        const dummyBook: Book = {
            id: id || "1",
            title: "예제 책 제목",
            author: "홍길동",
            year: "2024",
            publisher: "대한출판사",
            description: "이 책은 예제 책으로, React와 TypeScript를 활용하여 만들어진 책입니다.",
            image: require("src/assets/images/image_noimg.png"),
        };

        setBook(dummyBook);
    }, [id]);

    if (!book) {
        return <p>책 정보를 불러오는 중...</p>;
    }

    return (
        <div className="book-content">
            <div className="book-detail-container">
                {/* 책 이미지 */}
                <div className="book-image-container">
                    <img src={book.image} alt={book.title} className="book-detail-image" />
                </div>

                {/* 책 정보 */}
                <div className="book-info">
                    <h2 className="book-title">{book.title}</h2>
                    <p className="book-author">저자: {book.author}</p>
                    <p className="book-year">출판년도: {book.year}</p>
                    <p className="book-publisher">출판사: {book.publisher}</p>
                    <p className="book-description">{book.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
