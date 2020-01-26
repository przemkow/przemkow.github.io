function writeText(element) {
  const lettersToWrite = element.innerText.split('');
  const cursor = document.createTextNode('|')
  element.innerHTML = ""
  element.appendChild(cursor)

  const randomInitDelay = Math.floor(Math.random() * 500)

  for(let i = 0; i < lettersToWrite.length; i++) {
    setTimeout(() => {
      element.removeChild(cursor)
      element.innerHTML += lettersToWrite[i]
      if(i < lettersToWrite.length - 1) {
        element.appendChild(cursor)
      }   
    }, randomInitDelay + (40 * (i + 1)))
  }
}


(function() {
  const typewriterElements = document.querySelectorAll('.typewriter');
  for(element of typewriterElements) {
    writeText(element)
  }
})()