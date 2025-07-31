//Estado Inicial.

const estadoInicial = [{
  id: 1,
  tarea: 'Aprender useReducer',
  finalizada: false 
}];

//Estados Modificados.

const nuevaTarea = {
  id: 2,
  tarea: 'Aprender Redux',
  finalizada: false
}

const editarTarea = {
  id: 3,
  tarea: 'Editar Tarea',
  finalizada: false
}

const borrarTarea = {
  id: 4,
  tarea: 'Borrar Tarea',
  finalizada: false
}

//Acciones

const agregarTarea = {
  type: '[TAREAS] Agregar Tarea',
  payload: nuevaTarea
}

//Reducer

const tareaReducer = (state = estadoInicial, action = {}) => {
    if(action.type === '[TAREAS] Agregar Tarea'){
      return [...state, action.payload]
    }
}

console.log(tareaReducer(estadoInicial, agregarTarea))







export const ComponentUseReducer = () => {
  return (
    <>
      <h1>Hook useReducer</h1>
      <hr />
    </>
  )
}
