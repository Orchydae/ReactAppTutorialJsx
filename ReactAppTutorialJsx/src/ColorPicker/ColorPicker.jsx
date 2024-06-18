import React, { useState } from 'react';
import styles from './ColorPicker.module.css';

function ColorPicker() {

    const [color, setColor] = useState('#ff0000');
    const [isDark, setIsDark] = useState(false);

    const handleColorChange = (e) => {
        setColor(e.target.value);
        setIsDark(isColorDark(e.target.value));
    }

    const fontColor = isDark ? 'white' : 'black';

    return (
        <div className={styles.colorPickerContainer }>
            <h1 className={styles.h1 }>Color Picker</h1>
            <div className={styles.colorDisplay} style={{ backgroundColor: color }}>
                <p style={{color: fontColor} }>Selected color: {color}</p>
                
            </div>
            <label>Select a color:</label>
            <input className={styles.input} type="color" value={color} onChange={handleColorChange }></input>
        </div>
    );
}

function isColorDark(hex) {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    let brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return brightness < 128;
}

export default ColorPicker;