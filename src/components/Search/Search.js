import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import { CarContext } from '../../App';
import './Search.css'

const Search = () => {
    const {register, handleSubmit} = useForm();
    const [location, setLocation] = useState({});
    const [carName, setCarName] = useContext(CarContext);
    const [search, setSearch] = useState(false);
    
    const onSubmit = data => {
        const place = data;
        setLocation(place);}
    return (
        <div className='search-div'>
          <form onSubmit={handleSubmit(onSubmit)}>
              <label>Pick from</label>             
              <input required ref={register} name="pickFrom"/>
                <br/>

              <label>Pick To</label>
              <input required ref={register} name="pickTO" style={{marginBottom:'15px'}}/>
                <br/>
              <button className="login-btn" onClick={() => setSearch(!search)}>Search</button>
          </form>

          { search && <div>
            <div className='show-result'>
                <div className='place-holder'>
                    <h6>From: {location.pickFrom}</h6>        
                    <h6>To: {location.pickTO}</h6>
                </div>          
            </div>
            <Row className="row-div">
                <Col><img src={carName.img} alt="" style={{height:'50px', width:'60px'}}/></Col>
                <Col>{carName.rideName} {carName.seat1}</Col>
                <Col>{carName.price1}</Col>
            </Row>
            <Row className="row-div">
                <Col><img src={carName.img} alt="" style={{height:'50px', width:'60px'}}/></Col>
                <Col>{carName.rideName} {carName.seat2}</Col>
                <Col>{carName.price2}</Col>
            </Row>
            <Row className="row-div">
                <Col><img src={carName.img} alt="" style={{height:'50px', width:'60px'}}/></Col>
                <Col>{carName.rideName} {carName.seat3}</Col>
                <Col>{carName.price3}</Col>
            </Row>
          </div>}


        </div>
    );
};

export default Search;