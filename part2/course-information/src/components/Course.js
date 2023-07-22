// Exercise 1.5

function Part({part, exercises}) {
    return (
      <p>
        {part} {exercises}
      </p>
    );
}
  
function Header({course}) {
    return (
        <h1> {course.name} </h1>
    );
}

function Content({course}) {
    const parts = course.parts
    return (
        <div>
        { parts.map((part) => {
            return <Part key={part.id} part={part.name} exercises={part.exercises}/>
        })}
        </div>
    );
}

function Total({course}) {

    const parts = course.parts
    const total = parts.reduce((s, p) =>{
        s += p.exercises
        return s
    }, 0)

    return (
        <div>
        <p style={{fontWeight: 'bold'}}> Number of exercises {total}</p>
        </div>
    );
}

function Course({course}) {
    return (
        <div>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
        </div>
    )
}

export default Course;