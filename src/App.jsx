
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/cms_starter/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  