import React, {useState} from 'react';
import css from './App.module.scss'
import corkBoard from '../src/assets/img/brown-pinboard.png'
import {AddNoteForm} from "./feature/addNoteForm/addNoteForm";


export type noteDataType = {
    title: string,
    note: string,
    tag?: string[]
}

const App:React.FC = () => {

    const [notesData, setNotesData] = useState<noteDataType[]>([])

    const addNote = (data: noteDataType) => {
       /* const noteItem = [data];
        localStorage.setItem('Notes', JSON.stringify(noteItem));
        setNotesData(noteItem)*/

        setNotesData((prevState) => {
            localStorage.setItem("Notes", JSON.stringify([...prevState, data]))
            return [...prevState, data];
        })
    }

    return (
        <div className={css.app_wrapper}>
            <div className={css.board_wrapper}>
                <img className={css.board} src={corkBoard} alt={'board'}/>
            </div>

            <div className={css.forms_wrapper}>
                <AddNoteForm addNote={addNote}/>
            </div>





        </div>
    );
}

export default App;
