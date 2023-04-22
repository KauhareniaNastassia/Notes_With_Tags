import React from "react";
import css from './addNoteForm.module.scss'
import {ArrayOfStickers} from "../../utils/arrayOfStickers";


export const AddNoteForm: React.FC = () => {
    let random = Math.floor(Math.random() * 10)
    let sticker = ArrayOfStickers.find(el => ArrayOfStickers.indexOf(el) === random)


    return (
        <div className={css.addNoteForm__wrapper}>
            <img src={sticker} alt='sticker' className={css.addNoteForm__sticker_img}/>

            <div className={css.addNoteForm__form}>
                <input
                    className={css.addNoteForm__form_note_name}
                    type='text'
                    placeholder='Название заметки'
                />
                <textarea
                    className={css.addNoteForm__form_note}
                    placeholder='Запишите, чтобы не забыть'/>

            </div>

            <button>Сохранить</button>


        </div>
    )
}