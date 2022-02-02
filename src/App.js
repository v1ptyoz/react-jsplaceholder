import styles from "./App.module.css"
import Controls from "./components/Controls";
import UserList from "./components/UserList";
import UserCard from "./components/UserCard";
import { useState } from "react";


export default function App() {
  const [showCard, setShowCard] = useState(false);

  return (
    <main className={styles.main}>
      <aside className={styles.left}>
        Сортировка
        <Controls />
      </aside>
      <aside className={styles.right}>
        {showCard && <UserCard id={showCard} closeCard={setShowCard}/>}
        {!showCard && <UserList openCard={setShowCard}/>}
      </aside>
    </main>
  );
}