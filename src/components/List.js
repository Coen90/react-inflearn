import React, { useState } from 'react'

const List = React.memo(({
  id, title, complete, todoData, setTodoData, provided, snapshot, handleClick
}) => {
  
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)
  
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map(data => {
      if(data.id === id) {
        data.complete = !data.complete
      }
      return data;
    })

    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));

  }

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let newTodoData = todoData.map(data => {
      if(data.id === id) {
        data.title = editedTitle;
      }
      return data;
    })
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));

    setIsEditing(false);
  }

<<<<<<< HEAD
  if(isEditing) {
    return(
      <div
        className={`flex items-center justify-between w-full px-4 py-1 my-2 bg-gray-100 text-gray-600 bg-gray-100 rounded`}
      >
        <div className='items-center'>
          <form onSubmit={handleSubmit}>
          <input 
            value={editedTitle}
            onChange={handleEditChange}
            className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
          />
          </form>
        </div>
        <div className='items-center'>
          <button className='px-4 py-2 float-right' onClick={() => setIsEditing(false)}>
            x
          </button>
          <button 
            className='px-4 py-2 float-right' 
            type='submit'
            onClick={handleSubmit}
          >
            save
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div
        key={id}
        {...provided.draggableProps} 
        ref={provided.innerRef} 
        {...provided.dragHandleProps}
        className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 rounded`}
      >
        <div className='items-center'>
          <label>
          <input 
            type="checkbox" 
            defaultChecked={complete}
            onChange={() => handleCompleteChange(id)}
          />{" "}
          <span className={complete ? 'line-through' : undefined}>{title}</span>
          </label>
        </div>
        <div className='items-center'>
          <button className='px-4 py-2 float-right' onClick={() => handleClick(id)}>
            x
          </button>
          <button className='px-4 py-2 float-right' onClick={() => setIsEditing(true)}>
            edit
          </button>
        </div>
      </div>
    )
  }
})

  

export default List
=======
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId='to-dos'>
          {(provided) => {
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => {
                    <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                      <div className='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 rounded'>
                        <div className='items-center'>
                          <input 
                            type="checkbox" 
                            onChange={() => handleCompleteChange(data.id)}
                            defaultChecked={false}
                          />
                          <span className={data.completed ? 'line-through' : undefined}>{data.title}</span>
                        </div>
                        <div className='items-center'>
                          <button className='px-4 py-2 float-right' onClick={() => handleClick(data.id)}>X</button>
                        </div>
                      </div>
                    </div>
                  }}
                </Draggable>
              ))}
            </div>
          }}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
>>>>>>> 288a006248da6b5c67d6bf01f583b0066dff9122
