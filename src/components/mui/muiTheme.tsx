import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'

const MuiTheme= () => {
    const theme = useTheme()
    return <Typography component='h1'>{`${theme.palette.mode} mode`}</Typography>
}
export default MuiTheme;