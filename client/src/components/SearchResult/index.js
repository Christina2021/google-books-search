/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import LongDescription from '../LongDescription';
import { Container, Row, Col } from '../Grid';
import { FormBtn } from '../Form';


function SearchResult(props) {

    return (
        <Container classes="border border-info p-4">
            <Row>
                <h4>{props.title}</h4> 
                <div className="ml-auto">
                    <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-info mr-3">View</a>
                    <FormBtn className="btn btn-info">Save</FormBtn>
                </div>
            </Row>
            <Row>
                <p>Written by: {props.author.join(", ")}</p>
            </Row>
            <Row>
                <Col size="3">
                    <img src={props.image ? `${props.image.smallThumbnail}` : ""} />
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
