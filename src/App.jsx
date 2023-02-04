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

      <div className={styles.infoTask}>
        <div>
            <strong className={styles.created}>Tarefas criadas</strong>
            <span>3</span>
        </div>

        <div>
            <strong className={styles.conclued}>Concluídas</strong>
            <span>2 de 3</span>
        </div>
      </div>
    </>
  )
}

export default App