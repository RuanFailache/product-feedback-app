import { ThemeProvider } from 'styled-components'
import { colors } from './helpers/ color-palette'
import { ResetCss } from './helpers/reset-css'
import { SuggestionsPage } from './pages/suggestions'

function App() {
  return (
    <ThemeProvider theme={colors}>
      <ResetCss />
      <SuggestionsPage />
    </ThemeProvider>
  )
}

export default App
