import styles from "./Button.module.css"
import cn from "classnames"
import type { ButtonProps as MaiButtonProps } from "@mui/material"
import { Button as MuiButton } from "@mui/material"

export interface IButtonProps extends MaiButtonProps {}

const Button: React.FC<IButtonProps> = props => {
  const { children, className = "" } = props

  return (
    <MuiButton
      variant="contained"
      size="small"
      {...props}
      className={cn(styles.button, className)}
    >
      {children}
    </MuiButton>
  )
}

export default Button
