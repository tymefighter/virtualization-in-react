// Libraries
import type { AppProps } from 'next/app'
import { LightTheme, BaseProvider } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';

// Utils
import { getStyletronEngine } from 'utils/getStyletronEngine';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <StyletronProvider value={getStyletronEngine()}>
    <BaseProvider theme={LightTheme}>
      <Component {...pageProps} />
    </BaseProvider>
  </StyletronProvider>
)

export default App;
