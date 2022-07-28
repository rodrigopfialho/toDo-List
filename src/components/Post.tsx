import styles from './Post.module.css'
import { PlusCircle } from 'phosphor-react'
import { ListItem } from './ListItem'
import { FormEvent, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import Clipboard from '../assets/Clipboard.svg'

interface ListemPostProps {
    id: string;
    title: string;
}   

export function Post() {
    const [listItem, setListItem] = useState<ListemPostProps[]>([])
    const [newItem, setNewItem] = useState('')
   
    function handlenewitem(event: FormEvent) {
        event.preventDefault()

        const newTask = {
            id: uuidv4(),
            title: newItem
        }

        setListItem([...listItem, newTask])
        setNewItem('')

        console.log(newTask)
    }

    function deleteItemList(onDeleteItemList: string) {
        const deleteItem = listItem.filter(item => {
            return item.id !== onDeleteItemList
        })

        setListItem(deleteItem)
    }

    return (
        <>
            <div className={styles.main}>
                <form onSubmit={handlenewitem} className={styles.content}>
                    <input 
                        className={styles.input} 
                        type="text" 
                        placeholder='Adicione uma nova tarefa'
                        onChange={event => setNewItem(event.target.value)}
                        value={newItem}
                        required
                    />
                    <button type="submit">
                        criar
                        <PlusCircle className={styles.icon} size={25} />
                    </button>
                </form>
                
            
    
            <article className={styles.article}>

                <div className={styles.taferas}>
                    <>
                    <div className={styles.counterItem}>    
                        <p className={styles.criadas}>Tarefas criadas <strong>0</strong></p>
                        <p className={styles.concluidas}>Concluídas <strong>0</strong></p>
                    </div>

                        {/* {listItem.length === 0 
                        
                        ? 
                        
                        <div className={styles.info}>
                            <img src={Clipboard} alt="Clipboard" />
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                        
                        : 
                        
                        {listItem.map(item =>  {
                            return (
                                <ListItem 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                onDeleteItemList={deleteItemList}
                                />
                            )
                        })} 
                        
                        } */}
                    
                        
                       

                        
                    
                    

                    </>
                </div>
            </article>
            </div>    
        </>

    )
}