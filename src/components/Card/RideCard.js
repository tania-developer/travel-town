import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RideCard = (props) => {
    const rideInfo = props.ride;
    const { rideName, img } = rideInfo;
    const handleRide = props.handleRide;

    return (
        <div>
            <Link to="/location" style={{textDecoration: 'none'}} onClick={()=> handleRide(rideInfo)}>
                <Card style={{ width: '15rem', marginRight: '10px' }}>
                <Card.Img variant="top" style={{ height: '100px', width: '100px', margin: 'auto', padding: '5px' }} src={img} />
            
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }} >{rideName}</Card.Title>
                    </Card.Body>  
                 </Card>
             </Link>
        </div>
    );
};

export default RideCard;