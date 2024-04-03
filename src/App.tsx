import { ConfirmModalUsage } from "./exampleModals/confirmModal"
import { InfoModalUsage } from "./exampleModals/infoModal"
import { MultiStepModalUsage } from "./exampleModals/multiStepModal"

function App() {
  return (
    <div className="container">
      <InfoModalUsage />
      <ConfirmModalUsage />
      <MultiStepModalUsage /> 
    </div>
  )
}

export default App
