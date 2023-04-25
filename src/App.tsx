import React, {useEffect, useState} from 'react';
import css from './App.module.scss'
import corkBoard from '../src/assets/img/brown-pinboard.png'
import {AddNoteForm} from "./feature/addNoteForm/addNoteForm";
import {NoteItem} from "./feature/noteItem/noteItem";
import {ArrayOfStickers} from "./utils/arrayOfStickers";
import {ToolsBar} from "./feature/toolsBar/toolsBar";


export type noteDataType = {
    title: string,
    note: string,
    tag?: string[],
    random: number,
}

const App: React.FC = () => {
    const [notesData, setNotesData] = useState<noteDataType[]>([])

    const addNote = (data: noteDataType) => {

        setNotesData((prevState) => {
            localStorage.setItem("Notes", JSON.stringify([...prevState, data]))
            return [...prevState, data];
        })
    }

    useEffect(() => {
        localStorage.getItem("Notes") ?
            setNotesData(JSON.parse(localStorage.getItem("Notes") || "{}"))
            :
            setNotesData([]);
    }, [])

    return (
        <div className={css.app_wrapper}>

            <ToolsBar addNote={addNote}/>

            <div className={css.board_wrapper}>

                <div className={css.notes_wrapper}>
                    {
                        notesData.length !== 0 && notesData.map((item, i) =>

                            <NoteItem
                                key={item.title}
                                index={i}
                                item={item}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
