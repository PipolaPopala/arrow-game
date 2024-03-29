import styles from "./TypographyText.module.css"
import cn from "classnames"
import type {
  TypographyProps as MaiTypographyProps} from "@mui/material";
import {
  Typography as MuiTypography
} from "@mui/material"

export interface ITypographyTextProps extends MaiTypographyProps {}

const TypographyText: React.FC<ITypographyTextProps> = props => {
  const { children, className = "" } = props

  return (
    <MuiTypography {...props} className={cn(styles.text, className)}>
      {children}
    </MuiTypography>
  )
}

export default TypographyText
