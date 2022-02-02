import { useState } from "react";
import styles from "./InputTextArea.module.css";

function InputTextArea(props) {
  const [text, setText] = useState();
  return (
    <label className={styles.inputTextArea}>
      <span className={styles.label}>label for input</span>
      <textarea name={props.name} className={styles.input} value={text} onInput={(e) => setText(e.target.value)} disabled={props.disabled}/>
    </label>
  )
}

export default InputTextArea;