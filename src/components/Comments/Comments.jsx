import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Comments = () => {
    const history = useHistory();
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();

    // Dispatch to reducer
    const handleChange = (event) => {
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value});
    }

    // Form Validation
    const nextStep = () => {
         history.push('/review');
    }

    return (
        <div>
            <h1>Comments</h1>
            <h2>Any comments you want to leave?</h2>
            <input value={comments} onChange={handleChange} className="input" type="text" />
            <button onClick={nextStep} className="button">Next</button>
        </div>
    );
}

export default Comments;