import { CoursesContextProvider } from "./providers/CoursesContextProvider"
import CourseList from "./components/CourseList"

const App = () => {

  return <>
    <CoursesContextProvider>
      <CourseList />
    </CoursesContextProvider>
  </>
}

export default App