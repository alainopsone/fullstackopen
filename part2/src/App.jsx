import Course from "./components/Course";


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  const totalExercises = course.parts.reduce((acc, curr) => acc + curr.exercises, 0);


  return (
    <>
      <Course course={course} />
      <p>Total exercises: {totalExercises}</p>
    </>
  )
}

export default App