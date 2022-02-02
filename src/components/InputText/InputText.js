import { useState } from "react";
import styles from "./InputText.module.css";

function InputText(props) {
  const [text, setText] = useState(props.value);

  return (
    <label className={styles.inputText}>
      <span className={styles.label}>{props.children}</span>
      <input name={props.name} className={styles.input} type="text" required={props.required} value={text} onInput={(e) => setText(e.target.value)} disabled={props.disabled}/>
    </label>
  )
}

export default InputText;