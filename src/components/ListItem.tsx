import styles from './ListItem.module.css'
import { Check, Trash } from 'phosphor-react'

interface ListemProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onDeleteItemList: (item: string) => void;
  onTogleIsCompleted: (id: string) => void
}


export function ListItem({title, isCompleted, onDeleteItemList, onTogleIsCompleted, id}: ListemProps) {

  function handleDeleteComment() {
    onDeleteItemList(id)
  }

  function  handleTogleIsCompleted() {
    onTogleIsCompleted(id)
  }

  return (
    <div className={styles.content}>
      <li className={styles.list}>
        <input 
          className={styles.checkboxAround} 
          type="checkbox"  
          checked={isCompleted}
          onClick={handleTogleIsCompleted}
        />
        
        <p className={isCompleted ? styles.taskTitleCheck : styles.taskTitleNoCheck}>{title}</p>

        <button 
          onClick={handleDeleteComment}
          type="button">
          <Trash 
          
          className={styles.icon} 
          size={18}/>
        </button>
      </li>  
    </div>
  )
}