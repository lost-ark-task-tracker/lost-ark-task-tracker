import './TaskStatus.css';

type TaskStatusProps = {
    name: string,
    current: number,
    max: number
  }

function TaskStatus({name, current, max}: TaskStatusProps) {
  return (
    <span className='Task-status'>
      {name}
      {[...Array(max)].map((value: undefined, index: number) =>
        <input type="checkbox" id={`${name}-${index}`} name={`${name}-${index}`} checked={index<current} />
      )}
    </span>
  );
}

export default TaskStatus;
