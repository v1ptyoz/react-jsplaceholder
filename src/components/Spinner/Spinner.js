import styles from "./Spinner.module.css"
import { RingLoader } from "react-spinners";
function Spinner() {
  return (
    <div className={styles.spinner}>
      <RingLoader size={200} />
    </div>
  )
}

export default Spinner;