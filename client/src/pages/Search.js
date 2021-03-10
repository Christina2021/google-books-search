import React, { useState } from 'react';
import Header from '../components/Header';
import Result from '../components/Result';
import { Container } from '../components/Grid';
import { TextInput, FormBtn } from '../components/Form';
import API from "../utils/API";
import $ from 'jquery';
import 'bootstrap-notify';

import socketIOClient from 'socket.io-client';
const ENDPOINT = "http://192.168.1.71:3000";
const socket = socketIOClient(ENDPOINT);

function Search() {
    //API Key
    const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

    //States
    const [searchedBooks, setSearchedBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    function setSearched(data) {
        setSearchedBooks(data.items);
    }

    // For when user types in search box
    function handleInputChange(event) {
        const { name, value } = event.target;

        // Turn spaces into + signs
        let newValue = value.trim().split(' ').join("+").toLowerCase();

        setFormObject({...formObject, [name]: newValue})
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        //Set Search URL
        let url = `https://www.googleapis.com/books/v1/volumes?q=${formObject.search}&key=${API_KEY}`;
        API.findBooks(url)
            .then(res => {
                setSearched(res.data);
                document.querySelector('#search').value = "";
                setFormObject({search: ""})
            })
            .catch(err => {
                console.log(err);
            })
    }

    function handleSave(event) {
        event.preventDefault();
        for (let i = 0; i < searchedBooks.length; i++){
            if(event.target.id === searchedBooks[i].id) {
                API.saveBook({
                    title: searchedBooks[i].volumeInfo.title,
                    authors: searchedBooks[i].volumeInfo.authors,
                    description: searchedBooks[i].volumeInfo.description,
                    image: searchedBooks[i].volumeInfo.imageLinks,
                    link: searchedBooks[i].volumeInfo.infoLink,
                    bookID: searchedBooks[i].id
                })
                .then(res => {
                    console.log("Book saved successfully")
                    socket.emit("bookSaved", {
                      "message": "A user has added a book to the Saved books list!"
                    });
                })
                .catch(err => console.log(err));
            }
        }
    }

    socket.on("bookSaved", (message) => {
        if(document.location.hash === "#/saved"){
            $.notify(`${message}  Please refresh the page!`,{delay:0});
        } else {
            $.notify(`${message}`);
        }
    })

    return (
        <div>
            <Header headerText="Search for a book using the search box below! Searched books may be saved and viewed by clicking the Saved link above!"/>
            <Container>
                <form className="d-flex flex-column align-items-center text-center">
                    <div className="form-group">
                        <label forhtml="search">Search for a book:</label>
                        <TextInput 
                            onChange={handleInputChange}
                            type="text"
                            id="search"
                            name="search"
                            className="form-control"
                            style={{width: "500px"}}
                            placeholder="Title of Book"
                        />
                    </div>
                    <FormBtn onClick={handleFormSubmit} className="btn btn-success">Search Now!</FormBtn>
                </form>
            </Container>
            <Container classes="mt-5">
                {searchedBooks.length ? (
                    <div>
                        <h3>Results:</h3>
                        {searchedBooks.map(book => {
                            if (book.volumeInfo.authors && book.volumeInfo.description) {
                                return (
                                    <Result 
                                        key={book.id}
                                        id={book.id}
                                        title={book.volumeInfo.title}
                                        author={book.volumeInfo.authors}
                                        description={book.volumeInfo.description}
                                        image={book.volumeInfo.imageLinks}
                                        link={book.volumeInfo.infoLink}
                                        searched="yes"
                                        forBtn={handleSave}
                                    />
                                    )
                            }
                        })}
                    </div>
                ) : (
                <h3>Use the search box above to begin your search!</h3>
                )}
            </Container>
        </div>
    )
}

export default Search;