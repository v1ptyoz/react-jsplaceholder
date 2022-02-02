import { useState } from "react";
import Button from "../Button"
import InputText from "../InputText"
import InputTextArea from "../InputTextArea"
import styles from "./UserCard.module.css"
import { connect } from 'react-redux'

function UserCard(props) {
  const [disabled, setDisabled] = useState(true);
  const [user] = useState(...props.users.filter(user => user.id === props.id));

  function save(e) {
    e.preventDefault();
    props.closeCard(false);
    const result = {};
    for (let i = 0; i < e.target.length; i++) {
      const element = e.target[i];
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        result[element.name] = element.value;
      }
    }
    console.log(JSON.stringify(result));
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Профиль пользователя</h3>
        <Button onClick={() => setDisabled(!disabled)}>
          {disabled ? "Редактировать" : "Заблокировать"}
        </Button>
      </div>
      <form className={styles.form} onSubmit={(e) => save(e)}>
        <div className={styles.content}>
          <InputText name="name" disabled={disabled} required={true} value={user.name}>Name</InputText>
          <InputText name="email" disabled={disabled} required={true} value={user.email}>Email</InputText>
          <InputText name="username" disabled={disabled} required={true} value={user.username}>Username</InputText>
          <InputText name="street" disabled={disabled} required={true} value={user.address.street}>Street</InputText>
          <InputText name="city" disabled={disabled} required={true} value={user.address.city}>City</InputText>
          <InputText name="zipcode" disabled={disabled} required={true} value={user.address.zipcode}>Zip code</InputText>
          <InputText name="phone" disabled={disabled} required={true} value={user.phone}>Phone</InputText>
          <InputText name="website" disabled={disabled} required={true} value={user.website}>Website</InputText>
          <InputTextArea name="comment" disabled={disabled}/>
        </div>
        <div className={styles.btn}>
          <Button type="submit" disabled={disabled} color="green">Отправить</Button>
        </div>
      </form>
    </div>
  )
}

export default connect(
  (state) => ({users: state.users}),
)(UserCard)