'use clinet'

import { iTask } from '../../types/tasks'
import Task from './Task'

interface TodoListProps {
  tasks: iTask[] | undefined
}
const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default TodoList
