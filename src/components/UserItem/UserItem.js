import styles from './UserItem.module.css'

export default function UserItem(props) {
  return (
      <li className={styles.item}>
        <p className={styles.p}>
          <span>ФИО:</span><span>{props.user.name}</span>
        </p>
        <p className={styles.p}>
          <span>город:</span><span>{props.user.address.city}</span>
        </p>
        <p className={styles.p}>
          <span>компания:</span><span>{props.user.company.name}</span>
        </p>
        <button className={styles.button} onClick={() => {props.openCard(props.user.id)}}>Подробнее</button>
      </li>
  )
}