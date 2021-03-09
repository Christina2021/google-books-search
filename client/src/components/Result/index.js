import React from 'react';
import LongDescription from '../LongDescription';
import { Container, Row, Col } from '../Grid';
import { FormBtn } from '../Form';


function SearchResult(props) {
    return (
        <Container classes="border border-info p-4">
            <Row>
                <h4>{props.title}</h4> 
                {props.searched === "yes" ? (
                    <div className="ml-auto">
                        <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-info mr-3">View</a>
                        <FormBtn className="btn btn-success" onClick={props.forBtn} id={props.id}>Save</FormBtn>
                    </div>
                ) : (
                    <div className="ml-auto">
                        <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-info mr-3">View</a>
                        <FormBtn className="btn btn-danger" onClick={props.forBtn} id={props.id}>Delete</FormBtn>
                    </div>
                )}
            </Row>
            <Row>
                <p>Written by: {props.author.join(", ")}</p>
            </Row>
            <Row>
                <Col size="3">
                    <img src={props.image ? `${props.image.smallThumbnail}` : "https://books.google.com/googlebooks/images/no_cover_thumb.gif"} />
                </Col>
                <Col size="9">
                    {props.description.length <= 800 ? (
                        <p>{props.description}</p>
                    ) : (
                        <LongDescription description={props.description} id={props.id} />
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default SearchResult;
