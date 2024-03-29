import styles from "./Score.module.css"
import { Stack, Chip } from "@mui/material"
import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader, TypographyText } from "../../../UI"

const Score: React.FC = () => {
  const state = useAppSelector(state => state.playgroundReducer)

  return (
    <>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>

      <Stack direction="row" spacing={1}>
        <Chip
          className={styles.chipUnsuccessful}
          label={
            <>
              Errors:{" "}
              <span className={styles.counter}>{state.totalUnsuccess}</span>
            </>
          }
          variant="outlined"
        />
        <Chip
          className={styles.chipSuccessful}
          label={
            <>
              Successful:{" "}
              <span className={styles.counter}>{state.totalSuccess}</span>
            </>
          }
          variant="outlined"
        />
      </Stack>
    </>
  )
}

export default Score
