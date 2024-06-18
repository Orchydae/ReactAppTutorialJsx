
import PropTypes from 'prop-types';
import styles from './Student.module.css';

function Student(props) {
    return (
        <div className={styles.student }>
            <p>Student Name: {props.name}</p>
            <p>Student Age: {props.age}</p>
            <p>Is Student: {props.isStudent ? 'Yes' : 'No'}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired
}

Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false
}

export default Student;