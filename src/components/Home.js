import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"

const Home = (props) => {
    const navigate = useNavigate();
    const handleUserNameInput = (e) => {
        props.setUsername(e.target.value);
    }

    const onEntrance = (_) => {
        navigate("bookslist");
    }
    return ( 
        <div className='home-page'>
            <input onChange={handleUserNameInput}/>
            <button disabled={!props?.username} onClick={onEntrance} >Submit</button>
        </div>
    );
}
 
export default Home;