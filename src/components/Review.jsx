import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ReportButton from './ReportButton.jsx';
import Helpful from './Helpful.jsx';
import StarRating from './StarRating.jsx';
import UserName from "./UserName.jsx";

function Review(props) {
  if (!props.review) {
    return <div />;
  }
  return (
    <Container>
    <Row>
      <Col>
        <StarRating ratings={props.ratings}/>
      </Col>
      <Col>
      <UserName review={props.review} ratings={props.ratings}/>
      </Col>
      </Row>
      <Row>
        <h3>{props.review.summary}</h3>
      </Row>
      <Row>
        rating:
        {props.review.rating}
        </Row>
      <Row>
        Summary:
        {props.review.body}
        </Row>
        <Row>
            <Col>
              <Helpful review={props.review} getReviews={props.getNewestReviews} />
              </Col>
            <Col>
              <ReportButton review={props.review} getReviews={props.getNewestReviews} deleteReview={props.deleteReview} />
              </Col>
            </Row>
        </Container>


  );
}

export default Review;
