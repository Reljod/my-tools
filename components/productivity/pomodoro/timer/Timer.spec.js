import { fireEvent, render, screen } from '@testing-library/react'
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
      expect(timer.getByRole("button", {name: /start/i})).toBeDefined()
    })

    test("Slider at default state", () => {
      const timer = renderTimer()
      const value = Number(timer.getByRole("slider").value)

      expect(value).toBe(timerDefaultValue)
    })
  })

  describe("Start behavior", () => {

    beforeEach(() => {
      const timer = renderTimer()

      let startButton = timer.getByRole("button", {name: /start/i})
      fireEvent.click(startButton)
    })

    test("Starting should only show pause and stop button", () => {
      const timer = renderTimer()

      const pauseButton = timer.getByRole("button", {name: /pause/i})
      const stopButton = timer.getByRole("button", {name: /stop/i})

      expect(pauseButton).toBeDefined()
      expect(stopButton).toBeDefined()
    })
  })
})