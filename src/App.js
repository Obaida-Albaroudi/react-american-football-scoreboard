//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, HomeScore] = useState(0);
  
  const [awayScore, AwayScore] = useState(0);

  // const [time, timMoves] = useStat3(00:00);
  const [seconds, Seconds] = useState(0);
  const [minute, Minutes] = useState(0);
  const [quarter, quarters] =  useState(1);


  useEffect(() => {
    let interval = null;
      interval = setInterval(() => {
        Seconds(seconds => seconds + 1);
        if (seconds > 59) {
          Seconds(0);
          Minutes(minute => minute + 1);
          if(minute == 2){
            quarters( quarter => quarter+1);
          } if(minute == 4){
            quarters( quarter => quarter+2);
          } if(minute == 6){
            quarters( quarter => quarter+3);
          } if(minute == 6){
            return () => clearInterval(interval);
          } 

        }
      }, 1000);
    return () => clearInterval(interval);
  });
    
  // function Counter() {
  //   const [count, setCount] = useState(0);
  
  //   useInterval(() => {
  //     // Your custom logic here
  //     setCount(count + 1);
  //   }, 1000);

  //   if (count >= 200){
  //     return "null"
  //   }

  
  //   return <h1>{count}</h1>;
  // }
  
  // function useInterval(callback, delay) {
  //   const savedCallback = useRef();
  
  //   // Remember the latest function.
  //   useEffect(() => {
  //     savedCallback.current = callback;
  //   }, [callback]);
  
  //   // Set up the interval.
  //   useEffect(() => {
  //     function tick() {
  //       savedCallback.current();
  //     }
  //     if (delay !== null) {
  //       let id = setInterval(tick, delay);
  //       return () => clearInterval(id);
  //     }
  //   }, [delay]);
  // }



  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{minute}:{seconds}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => HomeScore(homeScore + 7)} >Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => HomeScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => AwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"onClick={() => AwayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
