'use client'

import { useRouter } from 'next/navigation'
import { iTask } from '../../types/tasks'
import React, { FormEvent, useState } from 'react'
import { deleteTodo, editTodo } from '../../apis'

interface TaskProps {
  task: iTask
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter()
  const [editModal, setEditModal] = useState<boolean>(false)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [currentText, setCurrentText] = useState<string>(task.text)

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await editTodo({ id: task.id, text: currentText })
    setEditModal(false)
    router.refresh()
  }

  const handleDelete = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await deleteTodo(task.id)
    setDeleteModal(false)
    router.refresh()
  }

  return (
    <tr key={task.id}>
      <td className='w-full'>{task.text}</td>
      <td className='flex gap-5'>
        {/* Edit */}
        <svg
          onClick={() => setEditModal(true)}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='text-blue-400 cursor-pointer w-7 h-7'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
          />
        </svg>
        {/* Edit Modal */}
        <dialog
          id='my_modal_3'
          className={`modal ${editModal ? 'modal-open' : ''}`}
        >
          <div className='modal-box'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => setEditModal(false)}
                className='absolute btn btn-sm btn-circle btn-ghost right-2 top-2'
              >
                ✕
              </button>
            </form>
            <form onSubmit={(e) => handleEdit(e)}>
              <h3 className='text-lg font-bold'>Edit Task</h3>
              <div className='modal-action'>
                <input
                  value={currentText}
                  onChange={(e) => setCurrentText(e.target.value)}
                  type='text'
                  placeholder='Type here'
                  className='w-full input input-bordered'
                />
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </dialog>

        {/* Delete */}
        <svg
          onClick={() => setDeleteModal(true)}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='text-red-500 cursor-pointer w-7 h-7'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
          />
        </svg>
        {/* Delete Modal */}
        <dialog
          id='my_modal_3'
          className={`modal ${deleteModal ? 'modal-open' : ''}`}
        >
          <div className='modal-box'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => setDeleteModal(false)}
                className='absolute btn btn-sm btn-circle btn-ghost right-2 top-2'
              >
                ✕
              </button>
            </form>
            <form onSubmit={(e) => handleDelete(e)}>
              <h3 className='text-lg font-bold'>Delete Task</h3>
              <div className='modal-action'>
                <button type='submit' className='btn btn-primary'>
                  Yes
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </td>
    </tr>
  )
}

export default Task
