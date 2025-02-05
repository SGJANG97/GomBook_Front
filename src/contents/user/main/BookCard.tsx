import React from "react"
import { useNavigate } from "react-router-dom";
import "src/assets/css/common.css";

interface Book {
    id: string;
    title: string;
    image: string;
}

interface BookCardProps {
    book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    const navigate = useNavigate(); // 페이지 이동을 위한 Hook

    // 클릭 시 상세 페이지로 이동하는 함수
    const handleClick = () => {
        navigate(`/book/${book.id}`);
    };

    return (
        <div className="book-card" onClick={handleClick} style={{ cursor: "pointer" }}>
            <img src={book.image} alt={book.title} className="book-image" />
            <p className="book-title">{book.title}</p>
        </div>
    );
};

export default BookCard;
