let input;

const createWhaleSong = () => {
  input = document.getElementById('songInput').value;
  let inputLowercase = input.toLowerCase();
  const vowels= ['a', 'e', 'i', 'o', 'u'];
  let resultArray = [];
  for (let inputIndex=0; inputIndex<input.length; inputIndex++)
  {
    for (let vowelsIndex = 0; vowelsIndex<vowels.length; vowelsIndex++)
    {
      if (inputLowercase[inputIndex] === vowels[vowelsIndex])
      {
        resultArray.push(inputLowercase[inputIndex]);
        if (inputLowercase[inputIndex] === 'e') {
          resultArray.push(inputLowercase[inputIndex]);
        }
        if (inputLowercase[inputIndex] === 'u') {
          resultArray.push(inputLowercase[inputIndex]);
        }
      }
    }
  }
  let whaleSong = resultArray.join('').toUpperCase();
  return whaleSong;
}

let elInput = document.getElementById('input');

let elSong = document.getElementById('song');

let elButton = document.getElementById('submit');

elButton.onclick = function() {
  elSong.textContent = createWhaleSong();
  elInput.textContent = input;
}
