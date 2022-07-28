import styles from './ListItem.module.css'
import { Check, Trash } from 'phosphor-react'

interface ListemProps {
  id: string;
  title: string;
  onDeleteItemList: (item: string) => void;
}


export function ListItem({title, onDeleteItemList, id}: ListemProps) {

  function handleDeleteComment() {
    onDeleteItemList(id)
  }
  return (

    <div className={styles.content}>
      <li className={styles.list}>
        <input type="checkbox"/>
        <p>{title}</p>

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