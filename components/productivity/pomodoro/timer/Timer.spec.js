import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer';

import Timer from './Timer'



describe("Timer component", () => {

  const renderTimer = () => render(<Timer/>)

  describe("Default behavior", () => {

    const timerDefaultValueText = /25:00/i
    const timerDefaultValue = 25

    test("Should render the default Timer as expected", () => {
      const TimerElement = renderer.create(<Timer/>).toJSON();
      expect(TimerElement).toMatchSnapshot()
    })

    test("Timer correct default value", () => { 
      const timer = renderTimer() 
      expect(timer.getByText(timerDefaultValueText)).toBeTruthy()
    })
  
    test("Control button start at default state", () => {
      const timer = renderTimer()
      expect(timer.getByRole("button", {name: /start/i})).toBeTruthy()
    })

    test("Slider at default state", () => {
      const timer = renderTimer()
      const value = Number(timer.getByRole("slider").value)

      expect(value).toBe(timerDefaultValue)
    })
  })
})