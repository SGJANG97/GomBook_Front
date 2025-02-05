import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import BookCard from "./BookCard";
import { userBookPath } from "src/routes/path";
import "src/assets/css/common.css";

interface Book {
    id: string;
    title: string;
    image: string;
}

const UserMainContent: React.FC = () => {
    const [newBooks, setNewBooks] = useState<Book[]>([]);
    const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);
    const [popularBooks, setPopularBooks] = useState<Book[]>([]);

    // 각 섹션의 book-list 참조
    const newBooksRef = useRef<HTMLDivElement>(null);
    const recommendedBooksRef = useRef<HTMLDivElement>(null);
    const popularBooksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setNewBooks([
            { id: "1", title: "신작도서 1", image: require("src/assets/images/image_noimg.png") },
            { id: "2", title: "신작도서 2", image: require("src/assets/images/image_noimg.png") },
            { id: "3", title: "신작도서 3", image: require("src/assets/images/image_noimg.png") },
            { id: "4", title: "신작도서 4", image: require("src/assets/images/image_noimg.png") },
            { id: "5", title: "신작도서 5", image: require("src/assets/images/image_noimg.png") },
            { id: "6", title: "신작도서 6", image: require("src/assets/images/image_noimg.png") },
        ]);

        setRecommendedBooks([
            { id: "7", title: "추천도서 1", image: require("src/assets/images/image_noimg.png") },
            { id: "8", title: "추천도서 2", image: require("src/assets/images/image_noimg.png") },
            { id: "9", title: "추천도서 3", image: require("src/assets/images/image_noimg.png") },
            { id: "10", title: "추천도서 4", image: require("src/assets/images/image_noimg.png") },
            { id: "11", title: "추천도서 5", image: require("src/assets/images/image_noimg.png") },
            { id: "12", title: "추천도서 6", image: require("src/assets/images/image_noimg.png") },
        ]);

        setPopularBooks([
            { id: "13", title: "인기도서 1", image: require("src/assets/images/image_noimg.png") },
            { id: "14", title: "인기도서 2", image: require("src/assets/images/image_noimg.png") },
            { id: "15", title: "인기도서 3", image: require("src/assets/images/image_noimg.png") },
            { id: "16", title: "인기도서 4", image: require("src/assets/images/image_noimg.png") },
            { id: "17", title: "인기도서 5", image: require("src/assets/images/image_noimg.png") },
            { id: "18", title: "인기도서 6", image: require("src/assets/images/image_noimg.png") },
        ]);
    }, []);

    // 좌우 스크롤 이동 함수
    const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollLeft -= 500; // 왼쪽으로 이동
        }
    };

    const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollLeft += 500; // 오른쪽으로 이동
        }
    };

    return (
        <div className="user-main-content">
            {/* 이달의 신작도서 섹션 */}
            <section>
                <div className="section-header-container">
                    <SectionHeader title="이달의 신작도서"/>
                    <a className="view-more" href={userBookPath}>더보기 →</a>
                </div>
                <div className="book-list-container">
                    <button className="scroll-button scroll-left" onClick={() => scrollLeft(newBooksRef)}>&lt;</button>
                    <div className="book-list" ref={newBooksRef}>
                        {newBooks.map((book) => (
                            <BookCard key={book.id} book={book}/>
                        ))}
                    </div>
                    <button className="scroll-button scroll-right"
                            onClick={() => scrollRight(newBooksRef)}>&gt;</button>
                </div>
                <div className="section-divider"></div>
            </section>

            {/* 추천 도서 섹션 */}
            <section>
                <div className="section-header-container">
                    <SectionHeader title="추천도서"/>
                    <a className="view-more" href={userBookPath}>더보기 →</a>
                </div>
                <div className="book-list-container">
                    <button className="scroll-button scroll-left"
                            onClick={() => scrollLeft(recommendedBooksRef)}>&lt;</button>
                    <div className="book-list" ref={recommendedBooksRef}>
                        {recommendedBooks.map((book) => (
                            <BookCard key={book.id} book={book}/>
                        ))}
                    </div>
                    <button className="scroll-button scroll-right"
                            onClick={() => scrollRight(recommendedBooksRef)}>&gt;</button>
                </div>
                <div className="section-divider"></div>
            </section>

            {/* 인기 도서 섹션 */}
            <section>
                <div className="section-header-container">
                    <SectionHeader title="인기도서"/>
                    <a className="view-more" href={userBookPath}>더보기 →</a>
                </div>
                <div className="book-list-container">
                    <button className="scroll-button scroll-left"
                            onClick={() => scrollLeft(popularBooksRef)}>&lt;</button>
                    <div className="book-list" ref={popularBooksRef}>
                        {popularBooks.map((book) => (
                            <BookCard key={book.id} book={book}/>
                        ))}
                    </div>
                    <button className="scroll-button scroll-right"
                            onClick={() => scrollRight(popularBooksRef)}>&gt;</button>
                </div>
                <div className="section-divider"></div>
            </section>
        </div>
    );
};

export default UserMainContent;
