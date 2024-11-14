function updateClock() {
    const now = new Date();
    const thailandTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Bangkok" }));

    const hours = thailandTime.getHours();
    const minutes = thailandTime.getMinutes();
    const seconds = thailandTime.getSeconds();
    const milliseconds = thailandTime.getMilliseconds();

    // คำนวณมุมของเข็มให้ตรงตามเวลา
    const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteAngle = minutes * 6 + (seconds / 60) * 6;
    const secondAngle = seconds * 6 + (milliseconds / 1000) * 6;

    document.getElementById('hour-hand').style.transform = `rotate(${hourAngle}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteAngle}deg)`;
    document.getElementById('second-hand').style.transform = `rotate(${secondAngle}deg)`;

    // อัปเดตเวลาแบบดิจิทัล
    const timeString = thailandTime.toLocaleTimeString('th-TH');
    document.getElementById('digital-time').textContent = timeString;
  }

  setInterval(updateClock, 50);
  updateClock();




  // 

  const rain = document.getElementById('background-music');
  const bird = document.getElementById('bird-sound');
  const btn = document.getElementById('btn-bird');
  const btnrain = document.getElementById('btn-rain');
  const btnwind = document.getElementById('btn-wind');
  const wind = document.getElementById('wind-sound');
  const closebtn = document.getElementById('closebtn');
  const nav = document.getElementById('side');

    function toggleBird() {
        if(bird.paused){
            bird.play();
            btn.style.backgroundColor= "#228B22";
        }else{
          bird.pause();
          btn.style.backgroundColor= "#ffff";
      }
        
    }

    // ฟังก์ชันเปิด/ปิดเสียง
    function toggleSound() {
      if (rain.paused) {
        rain.play(); // เล่นเสียง
        btnrain.style.backgroundColor= "#228B22";
      } else {
        rain.pause(); // หยุดเสียง
        btnrain.style.backgroundColor= "#ffff";
      }
    }

    function toggleWind() {
      if (wind.paused) {
        wind.play(); // เล่นเสียง
        btnwind.style.backgroundColor= "#228B22";
      } else {
        wind.pause(); // หยุดเสียง
        btnwind.style.backgroundColor= "#ffff";
      }
    }
    

    // ฟังก์ชันปรับระดับเสียง
    function setVolume(volume) {
      rain.volume = volume; // ปรับระดับเสียง
    }

    function setBirdVolume(birdvolume) {
        bird.volume = birdvolume;
    }
    function setWindVolume(windvolume) {
      wind.volume = windvolume;
  }

    // เริ่มเสียงทันทีเมื่อโหลดหน้า
    window.onload = function() {
      rain.volume = 0.02;
      bird.volume = 0.02;
      wind.volume = 100;
    };


function close(){
    document.body.classList.toggle('open-sidebar');
}

function opensidebar(){
  document.body.classList.toggle('open-sidebar');
}