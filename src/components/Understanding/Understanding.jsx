import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Understanding = () => {
    const history = useHistory();
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();

    // Dispatch to reducer
    const handleChange = (event) => {
        dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value});
    }

    // Form Validation
    const nextStep = () => {
        if (understanding !== undefined && understanding.length > 0) {
            history.push('/support');
        } else {
            alert ('Input is required.')
        }
    }

    return (
        <div>
            <h1>Understanding</h1>
            <h2>How well are you understanding the content?</h2>
            <input value={understanding} onChange={handleChange} className="input" type="text" />
            <button onClick={nextStep} className="button">Next</button>
        </div>
    );
}

export default Understanding;