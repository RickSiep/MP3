window.onload = function() {
    let audiofile = document.getElementById("thefile");
    let playIcon = document.getElementById("play");
    let pauseIcon = document.getElementById("pause");
    let volume = document.getElementById("volume");
    var progressInt = document.getElementById("progressint");
    var progressbar = document.getElementById("myRange");
    var audio = new Audio();
// Update functie
    audiofile.onchange = function () {
      const files = this.files;
      audio.src = URL.createObjectURL(files[0]);
      audio.load();

        console.log('ree');



            playIcon.addEventListener("click",playbutton,false);
            pauseIcon.addEventListener("click",pause,false);
            volume.addEventListener("change",setVolume,false);
            progressbar.addEventListener("click", seek, false);

            var update = setInterval(function() {
                var mins = Math.floor(audio.currentTime / 60);
                var secs = Math.floor(audio.currentTime % 60);
                if (secs < 10) {
                    secs = '0' + String(secs);
                }
                progressInt.innerHTML = mins + ':' + secs;
            }, 10);
            setInterval(function(){
                progressbar.value = (audio.currentTime / audio.duration);
            }, 1000);

            audio.onended = function(){
                playIcon.style.display = "block";
                pauseIcon.style.display = "none";
            };
            // Function progress

            function seek(event) {

                var percent = event.offsetX / this.offsetWidth;
                // percent * 100;
                audio.currentTime = percent * audio.duration;
                progressbar.value = (audio.currentTime / audio.duration);
            }
            function pause(){
                playIcon.style.display = "block";
                pauseIcon.style.display = "none";
                audio.pause();
            }
            function playbutton(){
                playIcon.style.display = "none";
                pauseIcon.style.display = "block";
                audio.play();
            }
            function setVolume(){
                audio.volume = volume.value;
            }
        }
    }






// function timeUpdate(){
//   var playPercent = 100 * (audio.currentTime / duration);
// 	playhead.style.marginLeft = playPercent + "%";
// }
