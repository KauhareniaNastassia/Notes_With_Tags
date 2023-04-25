import React from "react";
import {ArrayOfStickers} from "../../utils/arrayOfStickers";
import css from './noteItem.module.scss'
import {noteDataType} from "../../App";

type NoteItemPropsType = {
    item: noteDataType
    index: number
}


export const NoteItem:React.FC<NoteItemPropsType> = ({item, index}) => {
    //let random = Math.floor(Math.random() * 10)
    let sticker = ArrayOfStickers.find(el => ArrayOfStickers.indexOf(el) === item.random)


    return (
        <div key={index} className={css.note__wrapper}>
            <img src={sticker} alt='sticker' className={css.note__sticker_img}/>

            <div className={css.note}>

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