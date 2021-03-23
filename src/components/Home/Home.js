import React, { useContext, useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import RideCard from '../Card/RideCard';
import data from '../../fakeData/data.json'
import { CarContext } from '../../App';

const Home = () => {
    const [ride, setRide] = useState(data);
    const [carName, setCarName] = useContext(CarContext);

    const handleRide = (e) =>{
        console.log(e);
        setCarName(e);
    }
    return (
        <div className="background-img">
            <Header></Header>
            <div className="container d-flex div-card">
                {
                    ride.map(rd=> <RideCard ride={rd} handleRide={handleRide}></RideCard>)
                }
            </div>

        </div>

    );
};

export default Home;