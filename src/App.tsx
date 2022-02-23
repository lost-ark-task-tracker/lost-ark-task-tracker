import './App.css';
import { useState } from 'react';
import TaskStatusCount from './TaskStatusCount';
import TaskStatusSpecific from './TaskStatusSpecific';

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

  const changeCount = (fieldName:string, characterName:string) => {
    return (newValue: number) => {
      const index = data.findIndex(character => character.name === characterName);
      setData([
            ...data.slice(0, index),
            {
                ...data[index],
                [fieldName]: newValue
            },
            ...data.slice(index + 1)
      ]);
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
              <TaskStatusSpecific name='Ancient Elveria' values={character.ancientElveria} />
              <TaskStatusSpecific name='Phantom Palace' values={character.phantomPalace} />
            </td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default App;
