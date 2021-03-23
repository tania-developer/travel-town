import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import Search from '../Search/Search';

const SearchRide = () => {

    return (
        <div>
            <Header></Header>
            <div className="container">
                <Row>
                    <Col md={4}> 
                    <Search></Search>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SearchRide;