import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../slice/userSlice';
import image from '../assets/test.png';
import './Card.css';
import { useEffect } from 'react';

function Card() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.app.users);
    console.log(users)

    useEffect(() => {
        dispatch(getAllData());
    }, []);

    return (
        <div className="container">
            <h1>GitHub Users data fetch with redux toolkit createAsyncThunk</h1>
            <div className="row">
                {users.map((user) => (
                    <div className="col-4" key={user.id}>
                        <img src={user.avatar_url} alt="image" style={{ width: '300px', height: '200px' }} />
                        <h2>Name : {user.login}</h2>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="visit">
                            Visit Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
