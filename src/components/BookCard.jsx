import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BookCard(props) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
    console.log(!isSelected);
  };

  const cardStyle = isSelected ? { backgroundColor: "green" } : {};

  return (
    <Card key={props.book.asin} className="col-3" style={cardStyle}>
      <Card.Img variant="top" src={props.book.img} className="object-fit-cover" onClick={toggleSelected} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>
          <p>{props.book.category}</p>
          <p>{props.book.price}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
