import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Review from './Review.jsx';
import FormModal from './FormModal.jsx';

function ReviewList(props) {
  const first = props.reviews[0];
  const second = props.reviews[1];

  const [displayedReviews, setDisplayedReviews] = useState([first, second]);
  const [counter, setCounter] = useState(2);

  function addReviews() {
    const nextReviews = props.reviews.slice(counter, counter + 2);
    const combineReviews = displayedReviews.concat(nextReviews);
    setDisplayedReviews(combineReviews);
    setCounter(counter + 2);
  }

  // Modal===========
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  function handleShow() { setShow(true); }

  const listReviews = displayedReviews.map((review, i) => <Review key={`${i}review`} review={review} getReviews={props.getReviews} deleteReview={props.deleteReview} />);

  return (
    <Container>
      <Row>
        <h2>Reviews</h2>
      </Row>
      <Row>
        Show total reviews sorted by "relevace, newest, etc"
      </Row>
      <Row>
        {listReviews}
      </Row>
      <Row>
        <button onClick={addReviews}>More Reviews Button</button>
        {' '}
        ||
        <button onClick={handleShow}>Add a review</button>

      </Row>
      <FormModal show={show} onHide={handleClose} getReviews={props.getReviews} />
    </Container>
  );
}

export default ReviewList;
