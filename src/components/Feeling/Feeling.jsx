import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Feeling = () => {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();

    // Dispatch to reducer
    const handleChange = (event) => {
        dispatch({ type: 'SET_FEELING', payload: event.target.value});
    }

    // Form Validation
    const nextStep = () => {
        if (feeling !== undefined && feeling.length > 0) {
            history.push('/understanding');
        } else {
            alert ('Input is required.')
        }
    }

    return (
        <div>
            <h1>Feeling</h1>
            <h2>How are you feeling today?</h2>
            <input value={feeling} onChange={handleChange} className="input" type="text" />
            <button onClick={nextStep} className="button">Next</button>
        </div>
    );
}

export default Feeling;