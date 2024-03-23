// import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep } from "./store/slices"

const Playground: React.FC = () => {
  const state = useAppSelector(state => state.playgroundReducer)
  const dispatch = useAppDispatch()

  // const [isTimerActive, setIsTimerActive] = useState<Boolean>(false)

  return (
    <div>
      <h1>Playground</h1>
      <div>{state.currentStep}</div>
      <button type="button" onClick={() => dispatch(setCurrentStep())}>
        dispatch
      </button>
    </div>
  )
}

export default Playground
