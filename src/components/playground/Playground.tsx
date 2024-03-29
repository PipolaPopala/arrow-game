import styles from "./Playground.module.css"
import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices"
import { INTERVAL_TIME } from "./constants"
import { END_GAME_CONDITION } from "./constants"
import Controls from "./components/controls"
import RandomKeys from "./components/randomKeys"
import KeyPressed from "./components/keyPressed"
import Score from "./components/score"
import Modal from "./components/modal"
import Description from "./components/description"

const Playground: React.FC = () => {
  const state = useAppSelector(state => state.playgroundReducer)
  const dispatch = useAppDispatch()
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean | null>(null)
  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setUnsuccess())
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }

    return () => clearInterval(refreshIntervalId.current as NodeJS.Timeout)
  }, [isTimerActive])

  useEffect(() => {
    const isSuccessful = state.totalSuccess === END_GAME_CONDITION.SUCCESS_COUNT
    const isUnsuccessful =
      state.totalUnsuccess === END_GAME_CONDITION.UNSUCCESS_COUNT

    isSuccessful && setIsSuccessEndGame(true)
    isUnsuccessful && setIsSuccessEndGame(false)

    if (isSuccessful || isUnsuccessful) {
      setIsShowModal(true)
      setIsTimerActive(false)
    }
  }, [state.totalSuccess, state.totalUnsuccess])

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <RandomKeys isTimerActive={isTimerActive} />
        <KeyPressed isTimerActive={isTimerActive} />
        <Score />
      </div>

      <div className={styles.column}>
        <Description />
        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
        />
      </div>

      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          isSuccessEndGame={isSuccessEndGame}
        />
      )}
    </div>
  )
}

export default Playground
