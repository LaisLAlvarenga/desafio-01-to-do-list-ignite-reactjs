import {PlusCircle} from "phosphor-react";
import "./global.css";
import styles from './App.module.css';
import Logo from './assets/logo.svg';

function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logomarca do ToDo" />
      </header>

      <form className={styles.form}>
        <input 
            type="text" 
            name="task" 
            id="task" 
            placeholder='Adicione uma nova tarefa' 
        />
        <button type="submit" >
            Criar
            <PlusCircle size={30} />
        </button>
      </form>
    </>
  )
}

export default App