import React, { useState } from 'react';
import style from './addExerciseComponent.module.css';

interface Set {
  id: number;
  reps: number;
  peso: number;
}

export function AddExerciseComponent() {
  const [sets, setSets] = useState<{ [exerciseName: string]: Set[] }>({
    'pecho plano': [{ id: 1, reps: 0, peso: 0 }],
  }); 
  const aggSet = (exerciseName: string) => {
    const newSet = { id: sets[exerciseName].length + 1, reps: 0, peso: 0 };

    setSets((prevSets) => ({
      ...prevSets,
      [exerciseName]: [...prevSets[exerciseName], newSet],
    }));
  };

  const handleRepsChange = (exerciseName: string, index: number, value: string) => {
    const updatedSets = { ...sets };
    const parsedValue = parseInt(value, 10) || 0;
    updatedSets[exerciseName][index].reps = parsedValue;
    setSets(updatedSets);
  };

  const handlePesoChange = (exerciseName: string, index: number, value: string) => {
    const parsedValue = parseInt(value, 10) || 0;
    const updatedSets = { ...sets };
    updatedSets[exerciseName][index].peso = parsedValue;
    setSets(updatedSets);
  };



  const hancleCancel = (exerciseName: string, id: number) => {
    const updatedSets = { ...sets };
    updatedSets[exerciseName] = updatedSets[exerciseName].filter((set) => set.id !== id);
    // updatedSets[exerciseName].forEach((set, index) => {        
    //     console.log(set)
    //     set.id = index + 1;
    //   });
    setSets(updatedSets);
  };

  console.log(sets);

  return (
    <>
      <div className={style.divConteiner}>
        <h2>nombre del ejercicio</h2>
        <form>
          <div className={style.Setconteiner}>
            <div className={style.titlesConteiner}>
              <p className={style.titles}>SET</p>
              <p className={style.titles}>KG</p>
              <p className={style.titles}>REPS</p>
            </div>
            {sets['pecho plano'].map((set, index) => (
              <div className={style.inputsCont} key={set.id}>
                <input className={style.inputs} type="text" defaultValue={set.id} readOnly />
                <input
                  className={style.inputs}
                  type="number"
                  value={set.peso}
                  onChange={(e) => handlePesoChange('pecho plano', index, e.target.value)}
                />
                <input
                  className={style.inputs}
                  type="number"
                  value={set.reps}
                  onChange={(e) => handleRepsChange('pecho plano', index, e.target.value)}
                />
                <button onClick={() => hancleCancel('pecho plano', set.id)}>X</button>
              </div>
            ))}
          </div>

          <button type="button" onClick={() => aggSet('pecho plano')}>
            +Add set
          </button>
        </form>
      </div>
    </>
  );
}
