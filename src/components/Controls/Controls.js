import Button from "../Button";
import { connect } from "react-redux";
import { sortByCity, sortByOrg } from "../../store/users/actions";

function Controls(props) {
  return(
    <>
    <Button onClick={props.sortByCity}>по городу</Button>
    <Button onClick={props.sortByOrg}>по компании</Button>
    </>
  )
}

export default connect(
  null,
  (dispatch) => (
    {
      sortByCity: () => {dispatch(sortByCity())},
      sortByOrg: () => {dispatch(sortByOrg())}
    }
  )
)(Controls)