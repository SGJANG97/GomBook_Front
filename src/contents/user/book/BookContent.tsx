import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookCard from "src/contents/user/main/BookCard"; // 기존의 BookCard 컴포넌트 활용
import "src/assets/css/common.css";

interface Book {
    id: string;
    title: string;
    image: string;
}

const BookDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // URL에서 book id 가져오기
    const [books, setBooks] = useState<Book[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const booksPerPage = 25; // 한 페이지에 표시할 도서 수 (5줄 × 5개 = 25개)

    // 더미 데이터 생성 (실제 API 연결 시 대체 가능)
    useEffect(() => {
        const dummyBooks: Book[] = Array.from({ length: 60 }, (_, index) => ({
            id: (index + 1).toString(),
            title: `도서 ${index + 1}`,
            image: require("src/assets/images/image_noimg.png"),
        }));
        setBooks(dummyBooks);
    }, []);

    // 현재 페이지에 맞는 책 목록 가져오기
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    // 페이지 변경 핸들러
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="book-detail">
            <h2>도서 목록</h2>
            {/*<p>Book ID: {id}</p>*/}

            {/* 도서 목록 표시 (BookCard 형식) */}
            <div className="book-list-grid">
                {currentBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>

            {/* 페이지네이션 */}
            <div className="pagination">
                {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, index) => (
                    <button
                        key={index}
                        className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BookDetail;
