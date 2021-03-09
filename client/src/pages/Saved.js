import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Result from '../components/Result';
import { Container } from '../components/Grid';
import API from "../utils/API";

function Saved() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        showSaved()
    }, [])

    function showSaved() {
        API.getBooks()
            .then(res => {
                setBooks(res.data)
            }
            )
            .catch(err => console.log(err));
    }

    function handleDelete(event) {
        event.preventDefault();
        for (let i = 0; i < books.length; i++){
            if(event.target.id === books[i]._id) {
                API.deleteBook(books[i]._id)
                .then(res => showSaved())
                .catch(err => console.log(err));
            }
        }
    }

    return (
        <div>
            <Header headerText="Below are the saved books!  Click on the Search link at the top to begin searching for more books!"/>
            <Container classes="mt-5">
                {books.length ? (
                    <div>
                        <h3>Saved Books:</h3>
                        {books.map(book => {
                            return (
                                <Result 
                                    key={book._id}
                                    id={book._id}
                                    title={book.title}
                                    author={book.authors}
                                    description={book.description}
                                    image={book.image}
                                    link={book.link}
                                    searched="no"
                                    forBtn={handleDelete}
                                />
                                )
                        })}
                    </div>
                ) : (
                <h3>There are currently no saved books.</h3>
                )}
            </Container>
        </div>
    )
}

export default Saved;