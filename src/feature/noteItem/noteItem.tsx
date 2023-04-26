import React from "react";
import {ArrayOfStickers} from "../../utils/arrayOfStickers";
import css from './noteItem.module.scss'
import {noteDataType} from "../../App";
import closeIcon from '../../assets/closeIcon.svg'

type NoteItemPropsType = {
    item: noteDataType
    index: number,
    removeNote: (title: string) => void
}


export const NoteItem: React.FC<NoteItemPropsType> = ({item, index, removeNote}) => {

    const onClickRemoveNoteHandler = (title: string) => {
        removeNote(title)
    }

    let sticker = ArrayOfStickers.find(el => ArrayOfStickers.indexOf(el) === item.random)

    return (
        <div key={index} className={css.note__wrapper}>
            <img src={sticker} alt='sticker' className={css.note__sticker_img}/>

            <div className={css.note}>
                <button
                    className={css.note__delete_button}
                onClick={() => onClickRemoveNoteHandler(item.title)}>
                    <img className={css.note__delete_button_img} src={closeIcon} alt='closeIcon'/>
                </button>

                <div className={css.note__title}>
                    {item.title}

                </div>
                <div className={css.note__message}>
                    {item.note}
                </div>

            </div>
        </div>
    )
}