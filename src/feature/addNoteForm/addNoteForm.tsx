import React, {useState} from "react";
import css from './addNoteForm.module.scss'
import {ArrayOfStickers} from "../../utils/arrayOfStickers";
import {noteDataType} from "../../App";

type AddNoteFormPropsType = {
    addNote: ( data: noteDataType) => void
}

export const AddNoteForm: React.FC<AddNoteFormPropsType> = (props) => {
    let random = Math.floor(Math.random() * 10)
   // let sticker = ArrayOfStickers.find(el => ArrayOfStickers.indexOf(el) === random)
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')


    let tags = note.split(' ').filter(el => el.substring(0, 1) === '#')

    const onClickAddNoteHandler = (title: string, note: string) => {
        const data = {
            title: title, note: note, tag: tags, random: random
        }
        props.addNote(data)
        setTitle('')
        setNote('')
    }


    return (
        <div className={css.addNoteForm__wrapper}>
            {/*<img src={sticker} alt='sticker' className={css.addNoteForm__sticker_img}/>*/}

            <div className={css.addNoteForm__form}>
                <input
                    className={css.addNoteForm__form_note_name}
                    value={title}
                    type='text'
                    placeholder='Название заметки'
                    onChange={(event) => setTitle(event.currentTarget.value)}
                />
                <textarea
                    value={note}
                    className={css.addNoteForm__form_note}
                    placeholder='Запишите, чтобы не забыть'
                    onChange={(event) => setNote(event.currentTarget.value)}
                />

            </div>

            <button
                onClick={() => onClickAddNoteHandler(title, note)}
            >Сохранить</button>


        </div>
    )
}