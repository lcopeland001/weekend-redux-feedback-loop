import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Review = () => {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();

    // Pass the data to the server
    const handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comments,
            }
        }).then((response) => {
            // Clear all reducers
            dispatch({ type: 'CLEAR_ALL' });
            // Navigate to the Feedback Form
            history.push('/');
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!')
        })
    }

    return (
        <>
        <h1>Summary Page</h1>
        <div>
            <div style={{ margin: '20px 10px', fontSize: '1.4em' }}>
                <div>Feeling: {feeling}</div>
                <div>Understanding: {understanding}</div>
                <div>Support: {support}</div>
                <div>Comments: {comments}</div>
            </div>
            <button onClick={handleSubmit} className="button">Submit</button>
        </div>
        </>
    );
}

export default Review;