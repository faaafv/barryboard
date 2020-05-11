
  var array = [];
  function loadArray(){
    function Sound(name, key, keyCode, url, source){
      this.name = name;
      this.key = key;
      this.code = keyCode;
      this.url = url;
      this.source = source;
    }
    array.push(new Sound("Breath", "B", 66, "sounds/barrybreath.mp3", ""));
	array.push(new Sound("Champion", "C", 67, "sounds/champion.mp3", ""));
	array.push(new Sound("To Say", "T", 84, "sounds/tosay.mp3", ""));
	array.push(new Sound("Propaganda", "P", 80, "sounds/propaganda.mp3", ""));
	array.push(new Sound("Dungeon", "D", 68, "sounds/dungeon.mp3", ""));
	array.push(new Sound("Rude", "R", 82, "sounds/rude.mp3", ""));
	array.push(new Sound("Scientist", "S", 83, "sounds/pokescientist.mp3", ""));
    
  }

  function buildSoundboard(){
    array.forEach(function(sound){
      // add html audio tag
      document.getElementById('audio-container').innerHTML += `<audio data-key="${sound.code}" src="${sound.url}">`;
      // add html element to soundboard
      document.getElementById('keys-container').innerHTML += `<div class="key" data-key="${sound.code}"><span class="title">${sound.name}</span><span class="key-letter">${sound.key}</span></div>`;
    })


    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('click', clicked));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  }

loadArray();
buildSoundboard();


function clicked(e){
  playSound(this.getAttribute('data-key'));
}

function keyDown(e){
  playSound(e.keyCode);
}

  function playSound(code) {
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const key = document.querySelector(`.key[data-key="${code}"]`);
    if (!audio){
      console.log('key not assigned');
      return;
    }
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
  }
  function removeTransition(e){
//    if(e.propertyName !== 'background-color') return; //skip so only fires once
    this.classList.remove('playing');
  }


  window.addEventListener('keydown', keyDown);