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

const tareaEditada = {
  id: 3,
  tarea: 'Editar Tarea',
  finalizada: false
}

const tareaBorrada = {
  id: 4,
  tarea: 'Borrar Tarea',
  finalizada: false
}

//Acciones

const agregarTarea = {
  type: '[TAREAS] Agregar Tarea',
  payload: nuevaTarea
}

const editarTarea = {
  type: '[TAREAS] Editar Tarea',
  payload: tareaEditada
}

const borrarTarea = {
  type: '[TAREAS] Borrar Tarea',
  payload: []
}

//Reducer

const tareaReducer = (state = estadoInicial, action = {}) => {
    switch (action.type) {
      case '[TAREAS] Agregar Tarea':
          return [...state, nuevaTarea]
      
      case '[TAREAS] Editar Tarea':
          return [...state, tareaEditada]
      
      case '[TAREAS] Borrar Tarea':
          return []
    
      default:
        state
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
