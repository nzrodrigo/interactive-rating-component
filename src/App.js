import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import star from "./images/icon-star.svg"
import {Container, Row, Col} from 'react-bootstrap'
import thanks from "./images/illustration-thank-you.svg"
import { useState } from 'react';

function App() {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rate, setRate] = useState("");

  const RatingButton = ({number})=>{
    return(
      <button type='button' className='btn-rating' onClick={()=> setRate(number)}>{number}</button>
      )
  }

  return (
    <>{ !isSubmitted && (  
    <div className="wrapper">
    <img src={star} alt="star-icon" className='bg-secondary p-2 img-fluid rounded-circle ' />
    <h1 className='text-light mt-4 mb-2'>How did we do?</h1>
    <p className='text-secondary'>Please let us know how we did with your support request. All feedback is appreciated 
to help us improve our offering!</p>
    <Container className='mb-3 text-light'>
      <Row>
        <Col><RatingButton number={1} /></Col>
        <Col><RatingButton number={2} /></Col>
        <Col><RatingButton number={3} /></Col>
        <Col><RatingButton number={4} /></Col>
        <Col><RatingButton number={5} /></Col>
      </Row>
    </Container>
    <button className='btn-submit'onClick={()=> setIsSubmitted(true)}>Submit</button> 
  </div>)}
    

    {isSubmitted && <ThankYou rate={rate} />}
    </>
  );
  
}

const ThankYou = ({rate}) =>{
  return(
  <div className='wrapper'>
    <img src={thanks} alt='thanks' className='mx-auto d-block' />
    <div className='d-flex justify-content-center mt-3 '>
      <p className='p-rating'>You selected {rate} out of 5</p>
    </div>
    <h2 className='text-light mt-2 mb-2 text-center '>Thank you!</h2>
    <p className='text-secondary text-center'>We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
  </div>
  )
}

export default App;
