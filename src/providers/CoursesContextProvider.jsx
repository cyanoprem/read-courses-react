import { createContext, useEffect, useState } from "react"

const coursesContext = createContext({
  allCourses: [],
})

const CoursesContextProvider = ({children}) => {

  const [allCourses, setAllCourses] = useState([])

  const getAllCourses = async () => {
    const response = await fetch('http://localhost:8000/courses', {
      method: "GET",
      headers : {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json()
    // console.log(data)
    setAllCourses(data)
  }

  useEffect(() => {
    getAllCourses()
  },[])

  return <>
    <coursesContext.Provider value={{allCourses}}>
      {children}
    </coursesContext.Provider>
  </>
}

export { CoursesContextProvider, coursesContext }