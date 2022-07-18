import { ThemeProvider } from 'styled-components'
import { colors } from './helpers/ color-palette'
import { ResetCss } from './helpers/reset-css'
import { SuggestionDetailsPage } from './pages/suggestion-details'

function App() {
  return (
    <ThemeProvider theme={colors}>
      <ResetCss />
      {/* <SuggestionsPage /> */}
      <SuggestionDetailsPage />
    </ThemeProvider>
  )
}

export default App
