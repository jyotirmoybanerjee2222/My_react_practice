
//External
//MODULES
//INLINE

import styles from './Button.module.css'
function Button(){
    const styles = {
      backgroundColor: "hsl(215, 88%, 61%)",
      color:"aliceblue",
      padding:"10px 20px",
      borderRadius:"5px",
      border:"none",
      cursor:"pointer",
    
    }  
    return(
    // <button  className ={styles.button} >Click Me</button>
      <button style={styles}>Click Me</button>

    );
}

export default Button;