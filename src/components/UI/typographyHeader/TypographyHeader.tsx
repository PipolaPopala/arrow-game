import styles from "./TypographyHeader.module.css"
import cn from "classnames"
import type {
  TypographyProps as MaiTypographyProps} from "@mui/material";
import {
  Typography as MuiTypography
} from "@mui/material"

export interface ITypographyHeaderProps extends MaiTypographyProps {}

const TypographyHeader: React.FC<ITypographyHeaderProps> = props => {
  const { children, className = "" } = props

  return (
    <MuiTypography
      variant="h3"
      {...props}
      className={cn(styles.text, className)}
    >
      {children}
    </MuiTypography>
  )
}

export default TypographyHeader
