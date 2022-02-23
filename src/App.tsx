import './App.css';
import { useState } from 'react';
import TaskStatusCount from './TaskStatusCount';
import TaskStatusSpecific from './TaskStatusSpecific';

type Character = {
  name: string,
  class: string,
  unaQuests: number,
  ancientElveria: Array<boolean>,
  phantomPalace: Array<boolean>
}

function App() {
  const [data, setData] = useState([
    {
      name: 'Sheltim',
      class: 'Paladin',
      unaQuests: 2,
      ancientElveria: [true, false],
      phantomPalace: [false, true]
    },
    {
      name: 'Geria',
      class: 'Sorceress',
      unaQuests: 1,
      ancientElveria: [true, true],
      phantomPalace: [false, false]
    }
  ]);

  const replaceAtIndex = (target:Array<any>, index:number, newValue:any) => {
    return [
      ...target.slice(0, index),
      newValue,
      ...target.slice(index + 1)
    ];
  }

  const changeCount = (fieldName:string, characterName:string) => {
    return (newValue: number) => {
      const characterIndex = data.findIndex(character => character.name === characterName);
      const newCharacter = {
          ...data[characterIndex],
          [fieldName]: newValue
      };
      const newData = replaceAtIndex(data, characterIndex, newCharacter);
      setData(newData);
    }
  }

  const changeBool = (fieldName:string, characterName:string) => {
    return (valueIndex:number, newValue: boolean) => {
      const characterIndex = data.findIndex(character => character.name === characterName);
      const character = data[characterIndex];
      const oldBoolArray = character[fieldName as keyof Character];
      // TODO: fix this
      if(typeof oldBoolArray !== "string" && typeof oldBoolArray !== "number") {
        const newBoolArray = replaceAtIndex(oldBoolArray, valueIndex, newValue);
        const newCharacter = {...character, [fieldName]: newBoolArray}
        const newData = replaceAtIndex(data, characterIndex, newCharacter);
        setData(newData);
      }
    }
  }

  return (
    <div className='App'>
      <table className='Task-table'>
        <tr>
          <th>Character</th>
          <th>Class</th>
          <th>Weekly</th>
        </tr>
        {data.map(character =>
          <tr>
            <td>{character.name}</td>
            <td>{character.class}</td>
            <td>
              <TaskStatusCount name='Una Quests' current={character.unaQuests} max={3} change={changeCount('unaQuests', character.name)} />
              <TaskStatusSpecific name='Ancient Elveria' values={character.ancientElveria} change={changeBool('ancientElveria', character.name)} />
              <TaskStatusSpecific name='Phantom Palace' values={character.phantomPalace} change={changeBool('phantomPalace', character.name)} />
            </td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default App;
