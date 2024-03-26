// import styles from "./Score.module.css"

import { useAppSelector } from "../../../../app/hooks"

const Score: React.FC = () => {
  const state = useAppSelector(state => state.playgroundReducer)

  return (
    <>
      <h3>Score</h3>
      <span>Errors: {state.totalUnsuccess}</span>
      <br />
      <span>Successful: {state.totalSuccess}</span>
    </>
  )
}

export default Score
