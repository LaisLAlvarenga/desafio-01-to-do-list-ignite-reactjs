import "./global.css";
import styles from './App.module.css';
import Logo from './assets/logo.svg';

function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logomarca do ToDo" />
      </header>
    </>
  )
}

export default App