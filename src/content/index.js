// Function to generate a random number within min,max range
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
// Identify and perfrom whether which action is triggered by user
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  let buttonIndex
  for (let i = 0; i < 50; i++) {
    var buttons = document.getElementsByName(`right${i}`)
    // if markGood is triggered, then set answers to questions as Excellent / Very Good
    if (request.action === 'markGood') {
      buttonIndex = randomNumber(0, 2)
    }
    // if markAverage is triggered, then set answers to questions as Good  / Fair
    else if (request.action === 'markAverage') {
      buttonIndex = randomNumber(2, 4)
    }
    // if markPoor is triggered, then set answers to questions as Poor / Fair
    else if (request.action === 'markPoor') {
      buttonIndex = randomNumber(3, 5)
    }
    // make the radio button checked
    if (buttons[buttonIndex]) {
      buttons[buttonIndex].checked = true
    }
    // make submit button enabled
    document.querySelector('input[value="Submit"]').disabled = false
  }
})

