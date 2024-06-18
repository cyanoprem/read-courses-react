import { useContext } from 'react'
import { coursesContext } from '../providers/CoursesContextProvider'
import Course from './Course'

const CourseList = () => {

  const { allCourses } = useContext(coursesContext)

  return <>
  {
    allCourses.map((course) => {
    return <Course key={course._id} courseName={course.courseName} courseDescription={course.courseDescription}/>
    })
  }
  </>
}

export default CourseList