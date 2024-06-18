
import styles from './Button.module.css';

function Button() {

    const handleClick = () => {
        alert('Button clicked!');
    }

    return (
        <button className={styles.button} onClick={() => alert('hi')}>Click me!</button>
    );
}

export default Button;