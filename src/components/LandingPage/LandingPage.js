import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import './styles.css';
import mario3 from "../../assets/smb3.jpg"

function LandingPage(){
    return(
        <div>
            <CardGroup>
                <Card>
                    <Card.Img className="cardImage" variant="top" src={mario3} />
                    <Card.Body>
                    <Card.Title><a href="/collection">View Collection</a></Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img className="cardImage" variant="top" src={mario3} />
                    <Card.Body>
                    <Card.Title><a href='/addToCollection' >Add to Collection</a></Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
        </div>
    )
}

export default LandingPage;