import styles from './Button.module.css'

export default function Button(props) {
  return (
    <button type={props.type} className={`${styles.button} ${styles[props.color]}`} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  )
}