import { useState, useEffect, useCallback } from 'react'
import Pause from 'assets/svg/pause.svg'
import './Timer.module.css'

const buttonMap = {
  start: {
    class: 'btn-primary',
    text: 'Start'
  },
  resume: {
    class: 'btn-primary',
    text: 'Resume'
  }, 
  pause: {
    class: 'btn-danger',
    text: 'Pause'
  },
  stop: {
    class: 'btn-danger',
    text: 'Stop'
  }
}

export default function Timer() {
  const TIMER_SPEED_MS = 1000;

  const [timerInitialState, setTimerInitialState] = useState({
    minutes: 25,
    seconds: 0,
  });

  const [minutes, setMinutes] = useState(timerInitialState.minutes);
  const [seconds, setSeconds] = useState(timerInitialState.seconds);

  const [isCountingDown, setIsCountingDown] = useState(false);
  const [isTimerStart, setIsTimerStart] = useState(false);

  const onTimerControlChange = (event) => {
    setTimerInitialState({
      ...timerInitialState,
      minutes: event.target.value
    });

    setMinutes(timerInitialState.minutes);
    setSeconds(timerInitialState.seconds);
  }

  const onStartButtonClick = () => {
    setIsCountingDown(true);
    setIsTimerStart(true);
  }

  const onPauseButtonClick = () => {
    setIsCountingDown(false);
  }

  const onResumeButtonClick = () => {
    setIsCountingDown(true);
  }

  const onStopButtonClick = () => {
    setIsCountingDown(false);
    setIsTimerStart(false);
  }
  
  useEffect(() => {
    if (!isTimerStart) {
      setMinutes(timerInitialState.minutes);
      setSeconds(timerInitialState.seconds);
    }

  }, [isTimerStart, timerInitialState])

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (!isCountingDown){
        clearInterval(myInterval);
        return;
      }
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          return;
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, TIMER_SPEED_MS);

    return () => {
      clearInterval(myInterval);
    }

  }, [isCountingDown, minutes, seconds])

  return (
    <div className="container w-25">
      <div className="row">
        <div className='col-12 display-1'>
          {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
        </div>
      </div>
      <div name="countdownControl" className="row">
        {
          isCountingDown ? 
          <div className="d-flex col-6 mx-auto">
            <button
              name="pause-button"
              type="button" 
              onClick={onPauseButtonClick}
              className={`btn ${buttonMap.pause.class}`}
            >
              {buttonMap.pause.text}
            </button>
            <button
              name="stop-button"
              type="button" 
              onClick={onStopButtonClick}
              className={`btn btn-block button-timer ${buttonMap.stop.class}`}
            >
              {buttonMap.stop.text}
            </button>
          </div> : 
          <div className='d-flex col-6 mx-auto"'>
            <button
              type="button"
              onClick={() => {isTimerStart ? onResumeButtonClick() : onStartButtonClick()}}
              className={`btn ${isTimerStart ? buttonMap.resume.class : buttonMap.start.class}`}
            >
              {isTimerStart ? buttonMap.resume.text : buttonMap.start.text}
            </button>
          </div>
        }
      </div>
      <div name="timerControl" className="row">
        <label htmlFor="customRange3" className="form-label">Control Timer</label>
        <input 
          type="range" 
          className="form-range" 
          min="5" 
          max="55" 
          step="5" 
          id="customRange3"
          value={timerInitialState.minutes}
          onChange={onTimerControlChange}
          disabled={isTimerStart}
        />
      </div>
    </div>
  )
}