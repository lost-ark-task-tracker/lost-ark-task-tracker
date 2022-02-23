import './TaskStatus.css';

type TaskStatusProps = {
  name: string,
  current: number,
  max: number,
  change: (delta:number) => void
}

function TaskStatusCount({name, current, max, change}: TaskStatusProps) {
  const increment = () => {
    const newValue = current + 1;
    if(newValue <= max) {
      change(newValue);
    }
  }

  const decrement = () => {
    const newValue = current - 1;
    if(newValue >= 0) {
      change(newValue);
    }
  }

  return (
    <span className='Task-status'>
      {name}: {current}/{max}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </span>
  );
}

export default TaskStatusCount;
