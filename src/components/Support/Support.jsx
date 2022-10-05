import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Support = () => {
    const history = useHistory();
    const support = useSelector(store => store.support);
    const dispatch = useDispatch();

    // Dispatch to reducer
    const handleChange = (event) => {
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value});
    }

    // Form Validation
    const nextStep = () => {
        if (support !== undefined && support.length > 0) {
            history.push('/comments');
        } else {
            alert ('Input is required.')
        }
    }

    return (
        <div>
            <h1>Support</h1>
            <h2>How well are you being supported?</h2>
            <input value={support} onChange={handleChange} className="input" type="number" />
            <button onClick={nextStep} className="button">Next</button>
        </div>
    );
}

export default Support;