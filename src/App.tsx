import './App.css';

function App() {
  const data = [
    {
      name: 'Sheltim',
      class: 'Paladin'
    },
    {
      name: 'Geria',
      class: 'Sorceress'
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
              <span className='Task-status'>Una Quests</span>
              <span className='Task-status'>Ancient Elveria</span>
              <span className='Task-status'>Phantom Palace</span>
            </td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default App;
