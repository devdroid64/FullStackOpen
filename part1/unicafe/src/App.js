import {useState} from 'react';

// Exercise 1.6 - 1.11

function Header(props) {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

function Button(props) {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

function Content(props) {
  return (
      <tr> 
        <td> {props.type} </td>
        <td> {props.count}{props.isPercentage ? "%" : ""} </td> 
      </tr>
  )
}

function StatisticLine(props) {
  return (
    <Content type={props.type} count={props.count} isPercentage={props.isPercentage}/>
  )
}

function Statistics(props) {
  return (
    <table>
      <tbody>
        <StatisticLine type="good" count={props.gC}/>
        <StatisticLine type="neutral" count={props.nC}/>
        <StatisticLine type="bad" count={props.bC}/>
        <StatisticLine type="all" count={props.gC + props.nC + props.bC}/>
        <StatisticLine type="average" count={props.average}/>
        <StatisticLine type="positive" count={props.positive} isPercentage={true}/>
      </tbody>
    </table>
  )
}

function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handlerFactory = (type) => {
    
    if(type === 'good') {
      return () => {
        const tot = goodCount + neutralCount + 1 + badCount;
        setGoodCount(goodCount+1);
        console.log(goodCount);
        setAverage((goodCount-badCount+1)/(tot));
        setPositive((goodCount+1)/tot * 100);
      }
    } else if(type === 'neutral') {
      return () => {
        const tot = goodCount + neutralCount + badCount+1;
        setNeutralCount(neutralCount + 1);
        setAverage((goodCount-badCount)/tot);
        setPositive((goodCount)/tot * 100);
      }
    } else {
      return () => {
        setBadCount(badCount+1);
        const tot = goodCount + neutralCount + badCount + 1;
        setAverage((goodCount-badCount-1)/tot);
        setPositive((goodCount)/tot * 100);
      }
    }
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={handlerFactory('good')} text='good'/>
      <Button handleClick={handlerFactory('neutral')} text='neutral'/>
      <Button handleClick={handlerFactory('bad')} text='bad'/>
      <Header text="statistics"/>
      
      {(goodCount !== 0 || neutralCount !== 0 || badCount !== 0) ?
        (<Statistics gC={goodCount} nC={neutralCount} bC={badCount} average={average} positive={positive}/>) : (<div>No feedback given</div>)}
    </div>
  )

}
export default App;
