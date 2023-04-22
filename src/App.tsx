import React, {useState} from 'react';
import css from './App.module.scss'
import corkBoard from '../src/assets/img/brown-pinboard.png'
import {AddNoteForm} from "./feature/addNoteForm/addNoteForm";


const App:React.FC = () => {

    const [note, setNote] = useState([])

    return (
        <div className={css.app_wrapper}>
            <div className={css.board_wrapper}>
                <img className={css.board} src={corkBoard} alt={'board'}/>
            </div>

            <div className={css.forms_wrapper}>
                <AddNoteForm />
            </div>





        </div>
    );
}

export default App;
