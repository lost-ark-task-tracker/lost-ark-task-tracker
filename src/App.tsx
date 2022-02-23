import './App.css';
import TaskStatus from './TaskStatus';

function App() {
  const data = [
    {
      name: 'Sheltim',
      class: 'Paladin',
      unaQuests: 2,
      ancientElveria: 1,
      phantomPalace: 1
    },
    {
      name: 'Geria',
      class: 'Sorceress',
      unaQuests: 1,
      ancientElveria: 0,
      phantomPalace: 1
    }
  ]
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
              <TaskStatus name='Una Quests' current={character.unaQuests} max={3} />
              <TaskStatus name='Ancient Elveria' current={character.ancientElveria} max={2} />
              <TaskStatus name='Phantom Palace' current={character.phantomPalace} max={2} />
            </td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default App;
