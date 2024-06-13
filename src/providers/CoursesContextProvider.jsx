import { createContext } from "react"

const coursesContext = createContext()

const CoursesContextProvider = ({children}) => {


  const getAllCourses = async () => {
    const response = await fetch('http://localhost:8000/courses', {
      method: "GET",
      headers : {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json()
    console.log(data)
  }

  return <>
    <coursesContext.Provider value={{}}>
      {children}
    </coursesContext.Provider>
  </>
}

export { CoursesContextProvider, coursesContext }