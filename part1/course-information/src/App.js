// Exercise 1.5

function Part(props) {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
}

function Header(props) {
  return (
    <h1> {props.course.name} </h1>
  );
}

function Content(props) {
  return (
    <div>
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
    </div>
  );
}

function Total(props) {
  return (
    <div>
      <p> Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </div>
  );
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts : [
      {
        name: 'Fundamentals of React',
        exercises: 10
      }, 
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  );
}

export default App;



// ============================================================================================================================================================
// Exercise 1.3
// function Part(props) {
//   return (
//     <p>
//       {props.part} {props.exercises}
//     </p>
//   );
// }

// function Header(props) {
//   return (
//     <h1> {props.course} </h1>
//   );
// }

// function Content(props) {
//   return (
//     <div>
//       <Part part={props.part1} exercises={props.exercises1}/>
//       <Part part={props.part2} exercises={props.exercises2}/>
//       <Part part={props.part3} exercises={props.exercises3}/>
//     </div>
//   );
// }

// function Total(props) {
//   return (
//     <div>
//       <p> Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
//     </div>
//   );
// }

// function App() {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <Header course={course}/>
//       <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises}/>
//       <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
//     </div>
//   );
// }

// export default App;
//==============================================================================================================================================================








//===========================================================================================================================================================

// Exercise 1.4

// function Part(props) {
//   return (
//     <p>
//       {props.part} {props.exercises}
//     </p>
//   );
// }

// function Header(props) {
//   return (
//     <h1> {props.course} </h1>
//   );
// }

// function Content(props) {
//   return (
//     <div>
//       <Part part={props.part1} exercises={props.exercises1}/>
//       <Part part={props.part2} exercises={props.exercises2}/>
//       <Part part={props.part3} exercises={props.exercises3}/>
//     </div>
//   );
// }

// function Total(props) {
//   return (
//     <div>
//       <p> Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
//     </div>
//   );
// }

// function App() {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     }, 
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course}/>
//       <Content part1={parts[0].name} exercises1={parts[0].exercises} part2={parts[1].name} exercises2={parts[1].exercises} part3={parts[2].name} exercises3={parts[2].exercises}/>
//       <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/>
//     </div>
//   );
// }

// export default App;

// =============================================================================================================================================================







//==============================================================================================================================================================

