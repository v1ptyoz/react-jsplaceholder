import styles from './UserList.module.css'
import UserItem from '../UserItem'
import Spinner from "../Spinner"
import { connect } from 'react-redux'
import { loadUsers } from '../../store/users/actions'
import { useEffect } from 'react'

function UserList(props) {
  useEffect(() => {
    props.getUsers();
  }, [])

  return (
    <>
      {props.loading && <Spinner />}
      <h3>Список пользователей</h3>
      <ul className={styles.list}>
        {props.users.length > 0 && props.users.map(user => <UserItem key={user.id} user={user} openCard={props.openCard} />)}
      </ul>
    </>
  )
}

export default connect(
  (state) => ({users: state.users, loading: state.loading}),
  (dispatch) => ({getUsers: () => {dispatch(loadUsers())}})
)(UserList)