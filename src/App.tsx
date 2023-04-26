import React, {useEffect, useState} from 'react';
import css from './App.module.scss'
import corkBoard from '../src/assets/img/brown-pinboard.png'
import {AddNoteForm} from "./feature/toolsBar/addNoteForm/addNoteForm";
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
    const [searchTagValue, setSearchTagValue] = useState<string>('')

    const addNote = (data: noteDataType) => {
        setNotesData((prevState) => {
            localStorage.setItem("Notes", JSON.stringify([data, ...prevState]))
            return [data, ...prevState];
        })
    }

    const removeNote = (title: string) => {
        localStorage.setItem("Notes",  JSON.stringify(notesData.filter(el => el.title !== title)))
        setNotesData(prevState => prevState.filter(el => el.title !== title)
        )
    }

    useEffect(() => {
        localStorage.getItem("Notes") ?
            setNotesData(JSON.parse(localStorage.getItem("Notes") || "{}"))
            :
            setNotesData([]);
    }, [])

    console.log(notesData.reverse())

    return (
        <div className={css.app_wrapper}>

            <ToolsBar
                addNote={addNote}
            />

                <div className={css.notes_wrapper}>
                    {notesData.length !== 0 && notesData.reverse().map((item, i) =>

                            <NoteItem
                                key={item.title}
                                index={i}
                                item={item}
                                removeNote={removeNote}
                            />
                        )
                    }
                </div>

        </div>
    );
}

export default App;
