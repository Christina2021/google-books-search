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
                console.log(res.data);
                setBooks(res.data)
            }
            )
            .catch(err => console.log(err));
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
                                    key={book.bookID}
                                    id={book.bookID}
                                    title={book.title}
                                    author={book.authors}
                                    description={book.description}
                                    image={book.image}
                                    link={book.link}
                                    searched="no"
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