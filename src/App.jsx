import {PlusCircle, Trash} from "phosphor-react";
import "./global.css";
import styles from './App.module.css';
import Logo from './assets/logo.svg';

function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logomarca do ToDo" />
      </header>

      <form className={styles.inputTasks}>
        <input 
            type="text" 
            name="inputTask" 
            id="inputTask" 
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
            <span>1 de 3</span>
        </div>
      </div>

      <div className={styles.taskContainer}>
        <div className={styles.tasks}>
            <input type="checkbox" name="checkboxTask" id="checkboxTask" />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        </div>
        <button className={styles.trashIcon}>
            <Trash size={20} />
        </button>
    </div>

    <div className={styles.taskContainer}>
        <div className={styles.tasks}>
            <input type="checkbox" name="checkboxTask" id="checkboxTask" />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        </div>
        <button className={styles.trashIcon}>
            <Trash size={20} />
        </button>
    </div>

    <div className={styles.taskContainer}>
        <div className={styles.tasks}>
            <input type="checkbox" name="checkboxTask" id="checkboxTask" checked/>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        </div>
        <button className={styles.trashIcon}>
            <Trash size={20} />
        </button>
    </div>
    </>
  )
}

export default App