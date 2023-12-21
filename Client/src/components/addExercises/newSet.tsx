import React from "react"
import style from './newSet.module.css'
export function NewSet(){
    return(<>
    <div className={style.conteiner}>
        <div className={style.titlesConteiner}>
            <p className={style.titles}>SET</p>
            <p  className={style.titles}>KG</p>
            <p  className={style.titles}>REPS</p>
        </div>
        <div className={style.inputsCont}>
            <input className={style.inputs} type="text" defaultValue={1} />
            <input className={style.inputs} type="number" />
            <input className={style.inputs} type="number" />
        </div>
    </div>
    </>)
}