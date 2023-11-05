import AddTask from './components/AddTask'
import TodoList from './components/TodoList'
import { getAllTodos } from '@/apis'
import { iTask } from '@/types/tasks'

export default async function Home() {
  const tasks = await getAllTodos()
  console.log({ tasks })
  return (
    <main className='max-w-4xl gap-4 mx-auto'>
      <div className='flex flex-col items-center justify-center'>
        <div className='my-5 text-3xl font-bold'>Todo List App</div>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  )
}
