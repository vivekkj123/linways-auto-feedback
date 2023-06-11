import './Popup.css'

function App() {
  return (
    <main>
      <h2>Linways Auto Feedback Filler</h2>
        <>
          <p>Choose the performance level for {Name}</p>
          {/* different actions need to be sent for different performance levels */}
          <div className="wrapper">
            <button
              onClick={() => {
                chrome.runtime.sendMessage({ action: 'markGood' })
              }}
              title="Randomly Chooses anyone: Excellent / Very Good"
            >
              Good
            </button>
            <button
              onClick={() => {
                chrome.runtime.sendMessage({ action: 'markAverage' })
              }}
              title="Randomly Chooses anyone: Good  / Fair"
            >
              Average
            </button>
            <button
              onClick={() => {
                chrome.runtime.sendMessage({ action: 'markPoor' })
              }}
              title="Randomly Chooses anyone: Poor / Fair"
            >
              Poor
            </button>
          </div>
        </>
    </main>
  )
}

export default App
