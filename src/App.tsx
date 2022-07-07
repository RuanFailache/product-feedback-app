import { ThemeProvider } from 'styled-components'
import { Suggestions } from './pages/suggestions'
import { ResetCss } from './helpers/reset-css'
import { colors } from './helpers/ color-palette'

function App() {
  return (
    <ThemeProvider theme={colors}>
      <ResetCss />
      <Suggestions />
    </ThemeProvider>
  )
}

export default App
