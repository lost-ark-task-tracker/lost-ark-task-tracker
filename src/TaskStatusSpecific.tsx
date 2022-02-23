import './TaskStatus.css';

type TaskStatusProps = {
    name: string,
    values: Array<boolean>
  }

function TaskStatusSpecific({name, values}: TaskStatusProps) {
  return (
    <span className='Task-status'>
      {name}
      {values.map((value: boolean, index: number) =>
        <input type="checkbox" id={`${name}-${index}`} name={`${name}-${index}`} checked={value} />
      )}
    </span>
  );
}

export default TaskStatusSpecific;
