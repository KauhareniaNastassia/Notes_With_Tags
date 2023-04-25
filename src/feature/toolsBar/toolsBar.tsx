import React from "react";
import {AddNoteForm} from "../addNoteForm/addNoteForm";
import {noteDataType} from "../../App";
import css from './toolsBar.module.scss'

type ToolsBarPropsType = {
    addNote: ( data: noteDataType) => void
}

export const ToolsBar:React.FC<ToolsBarPropsType> = ({addNote}) => {
    return (
        <div className={css.toolsBar__wrapper}>
            <AddNoteForm addNote={addNote}/>
        </div>
    )
}