import { useState, useEffect } from 'react'
import firebase from '../firebase/'
import moment from 'moment'

export function useTodos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let unsubscribe = firebase
    .firestore()
    .collection('todos')
    .onSnapshot( snapshot => {
      const data = snapshot.docs.map( doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setTodos(data)
    })

    return () => unsubscribe()
  }, [])

  return todos
}

export function useFilterTodos(todos, selectedProject){
  const [filterTodos, setFilterTodos] = useState([])

  useEffect(() => {
    let data;
    const todayDateFormated = moment().format('MM/DD/YYYY')

    if(selectedProject === 'today'){
      data = todos.filter(todo => todo.date === todayDateFormated)
    }else if(selectedProject === 'next 7 days'){
      data = todos.filter(todo => {
        const todoDate = moment(todo.date, 'MM/DD/YYYY')
        const todayDate = moment(todo.date, 'MM/DD/YYYY')

        const diffDays = todoDate.diff(todayDate, 'days')

        return diffDays >= 0 && diffDays < 7
      })
    }else if(selectedProject === 'all days'){
      data = todos
    }else{
      data = todos.filter(todo => todo.projectName === selectedProject)
    }

    setFilterTodos(data)
  }, [todos, selectedProject])

  return filterTodos
}

export function useProjects(todos) {
  const [projects, setProjects] = useState([])

  function calculateNumOfTodos(projectName, todos){
    return todos.filter( todo => todo.projectName === projectName).length
  }

  useEffect(() => {
    let unsubscribe = firebase
    .firestore()
    .collection('projects')
    .onSnapshot( snapshot => {
      const data = snapshot.docs.map( doc => {

        const projectName = doc.data().name
        return {
          id: doc.id,
          name : projectName,
          numOfTodos : calculateNumOfTodos(projectName, todos)
        }
      })
        setProjects(data)
    })
    return () => unsubscribe()
  }, [])

  return projects
}
