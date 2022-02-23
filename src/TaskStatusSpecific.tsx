import './TaskStatus.css';

type TaskStatusProps = {
  name: string,
  values: Array<boolean>,
  change: (index:number, newValue:boolean) => void
}

function TaskStatusSpecific({name, values, change}: TaskStatusProps) {
  const handleChange = (index:number) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      change(index, event.target.checked);
    }
  }

  return (
    <span className='Task-status'>
      {name}
      {values.map((value: boolean, index: number) =>
        <input type="checkbox" id={`${name}-${index}`} name={`${name}-${index}`} defaultChecked={value} onChange={handleChange(index)} />
      )}
    </span>
  );
}

export default TaskStatusSpecific;
