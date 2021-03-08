/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Container, Row, Col } from '../Grid';


function SearchResult(props) {

    return (
        <Container classes="border border-info p-4">
            <Row>
                <h4>{props.title}</h4>
            </Row>
            <Row>
                <p>Written by: {props.author.join(", ")}</p>
            </Row>
            <Row>
                <Col size="3">
                    <img src={props.image ? `${props.image.smallThumbnail}` : ""} />
                </Col>
                <Col size="9">
                    {props.description}
                </Col>
            </Row>
        </Container>
    )
}

export default SearchResult;
