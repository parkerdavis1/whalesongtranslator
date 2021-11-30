let input;

const createWhaleSong = () => {
  input = document.getElementById('songInput').value
  let inputLower = input.toLowerCase();
  const vowels= ['a', 'e', 'i', 'o', 'u'];
  let resultArray = [];
  for (let inputIndex=0; inputIndex<input.length; inputIndex++) {
    for (let vowelsIndex = 0; vowelsIndex<vowels.length; vowelsIndex++) {
      if (inputLower[inputIndex] === vowels[vowelsIndex]) {
        resultArray.push(input[inputIndex]);
        
        //below doubles "e"s and "u"s
        if (inputLower[inputIndex] === 'e') {
          resultArray.push(input[inputIndex]);
        }
        if (inputLower[inputIndex] === 'u') {
          resultArray.push(input[inputIndex]);
        }
      }
    }
  }
  let whaleSong = resultArray.join('').toUpperCase();
  return whaleSong;
}

let elInput = document.getElementById('input');
let elSong = document.getElementById('song');
let elSongInput = document.getElementById('songInput');
let elButton = document.getElementById('submit');

const submitSong = function() {
  elSong.textContent = createWhaleSong();
  elInput.textContent = input;
}

// elButton.onclick = submitSong;
// elSongInput.addEventListener('keyup', submitSong);
elButton.addEventListener('click', submitSong);