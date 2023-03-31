import React from 'react';
import styles from './Button.module.css'; // import CSS Modules styles

function Button(props) {

//   const { label } = props;

  return (
    // use CSS Modules class name
    <button className={styles.button}> 
      {props.label}
    </button>
  );
}



export default Button;


