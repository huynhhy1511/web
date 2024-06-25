 const music = new Audio('nhac_Index.mp3');
 


 let song = [

    {
        id:'1',
        songName:`Nơi này có Anh <br> <div class="subtitle">Sơn Tùng MTP</div> `,
     
        poster:"img/1.jpg",
    },

    {
        id:'2',
        songName:`Người lạ ơi <br> <div class="subtitle">Karik-Orange</div> `,
        poster:"img/2.jpg",
    },

    {
        id:'3',
        songName:`Chúng ta không thuộc về  <br> <div class="subtitle">Sơn Tùng MTP</div> `,
        poster:"img/3.jpg",
    },

    {
        id:'4',
        songName:`Nhất trên đời <br> <div class="subtitle">Vanh</div> `,
        poster:"img/4.jpg",
    },

    {
        id:'5',
        songName:`Thiên Lý ơi <br> <div class="subtitle">Jack</div> `,
        poster:"img/5.jpg",
    },

    {
        id:'6',
        songName:`Yêu từ đâu mà ra <br> <div class="subtitle">LiL Z</div> `,
        poster:"img/6.jpg",
    },

    {
        id:'7',
        songName:`Lệ Cay 3 <br> <div class="subtitle">Du Thiên</div> `,
        poster:"img/7.jpg",
    },

    {
        id:'8',
        songName:`Waiting for you <br> <div class="subtitle">Mono</div> `,
        poster:"img/8.jpg",
    },

    {
        id:'9',
        songName:`Chúng ta của hiện tại <br> <div class="subtitle">Sơn Tùng MTP</div> `,
        poster:"img/9.jpg",
    },

    {
        id:'10',
        songName:`Ai là người thương em  <br> <div class="subtitle">Quân AP</div> `,
        poster:"img/10.jpg",
    },

    {
        id:'11',
        songName:`Gió <br> <div class="subtitle">Jank</div> `,
        poster:"img/11.jpg",
    },

    {
        id:'12',
        songName:`Ngày em đẹp nhất <br> <div class="subtitle">TAMA</div> `,
        poster:"img/12.jpg",
    },

    {
        id:'13',
        songName:`Mai mình xa <br> <div class="subtitle">Thịnh say</div> `,
        poster:"img/13.jpg",
    },

    {
        id:'14',
        songName:`Bông Hoa dẹp nhất <br> <div class="subtitle">Quân AP</div> `,
        poster:"img/14.jpg",
    },

    {
        id:'15',
        songName:`Đợi <br> <div class="subtitle">52Hz</div> `,
        poster:"img/15.jpg",
    },

    {
        id:'16',
        songName:`Lan man <br> <div class="subtitle">RonBoogz</div> `,
        poster:"img/16.jpg",
    },
 ]
 Array.from(document.getElementsByClassName('songItem')).forEach((element, i )=>{
    element.getElementsByTagName('img')[0].src = song[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = song[i].songName;
})



let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];


masterPlay.addEventListener('click', () => {
   if (music.paused & music.currentTime <= 0) {
      music.play();
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');
      wave.classList.add('active2');
   } else {
      music.pause();
      masterPlay.classList.add(('bi-play-fill'));
      masterPlay.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
   }
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{

            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
})
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{

            element.style.background = "rgb(105, 105, 170, 0)";
})
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `nhac_Index/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_title = song.filter((ele)=>{
            return ele.id == index;

        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
            
        })
         masterPlay.classList.remove('bi-play-fill');
         masterPlay.classList.add('bi-pause-fill');
         wave.classList.add('active2');
        music.addEventListener('anded',()=>{
         masterPlay.classList.add('bi-play-fill');
         masterPlay.classList.remove('bi-pause-fill');
         wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })

})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',() =>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`;
    }
    currentEnd.innerText = `${min}:${sec}`;


    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change' , ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
   if (vol.value == 0 ) {
     vol_icon.classList.remove('bi-volume-down-fill');
     vol_icon.classList.add('bi-volume-mute-fill');
     vol_icon.classList.remove('bi-volume-up-fill');
   }
   if (vol.value > 0 ) {
    vol_icon.classList.add('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');
    vol_icon.classList.remove('bi-volume-up-fill');
   }
   if (vol.value > 50 ) {
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');
    vol_icon.classList.add('bi-volume-up-fill');
   }

   let vol_a = vol.value;
   vol_bar.style.width = `${vol_a}%`;
   vol_dot.style.left = `${vol_a}%`;
   music.volume = vol_a/100;
})


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index <1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    let song_title = song.filter((ele)=>{
        return ele.id == index;

    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
        
    })
    makeAllPlays();
     document.getElementById(`${index}`).classList.remove('bi-play-fill');
     document.getElementById(`${index}`).classList.add('bi-pause-fill');
     makeAllBackgrounds();
     Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
})

 
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
       index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    let song_title = song.filter((ele)=>{
        return ele.id == index;

    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
        
    })
    makeAllPlays();
     document.getElementById(`${index}`).classList.remove('bi-play-fill');
     document.getElementById(`${index}`).classList.add('bi-pause-fill');
     makeAllBackgrounds();
     Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
   pop_song.scrollLeft -= 330;
})

right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})

const heartIcon = document.getElementById('heart-icon');
const message = document.getElementById('message');
heartIcon.addEventListener('click', function() {
  heartIcon.classList.toggle('bi-heart');
  heartIcon.classList.toggle('bi-heart-fill');
  heartIcon.classList.toggle('active');
  showMessage();
});
function showMessage() {
    if (heartIcon.classList.contains('active')) {
      message.innerText = 'Đã thêm vào danh sách yêu thích';
      message.style.display = 'block';  
      message.classList.add('slide-from-right');
      setTimeout(function() {
        message.style.display = 'none';
        message.classList.remove('slide-from-right');
      }, 4000);
    }
  }

  const heartIcon1 = document.getElementById('heart-icon1');
const message1 = document.getElementById('message1');
heartIcon1.addEventListener('click', function() {
  heartIcon1.classList.toggle('bi-heart');
  heartIcon1.classList.toggle('bi-heart-fill');
  heartIcon1.classList.toggle('active');
  showMessage1();
});
function showMessage1() {
    if (heartIcon1.classList.contains('active')) {
      message1.innerText = 'Đã thêm vào danh sách yêu thích';
      message1.style.display = 'block';
      message1.classList.add('slide-from-right1');
      setTimeout(function() {
        message1.style.display = 'none';
        message1.classList.remove('slide-from-right1');
      }, 4000);
    }
  }

  const heartIcon2 = document.getElementById('heart-icon2');
const message2 = document.getElementById('message2');
heartIcon2.addEventListener('click', function() {
  heartIcon2.classList.toggle('bi-heart');
  heartIcon2.classList.toggle('bi-heart-fill');
  heartIcon2.classList.toggle('active');
  showMessage2();
});
function showMessage2() {
    if (heartIcon2.classList.contains('active')) {
      message2.innerText = 'Đã thêm vào danh sách yêu thích';
      message2.style.display = 'block';
      message2.classList.add('slide-from-right2');
      setTimeout(function() {
        message2.style.display = 'none';
        message2.classList.remove('slide-from-right2');
      }, 4000);
    }
  }

  const heartIcon3 = document.getElementById('heart-icon3');
const message3 = document.getElementById('message3');
heartIcon3.addEventListener('click', function() {
  heartIcon3.classList.toggle('bi-heart');
  heartIcon3.classList.toggle('bi-heart-fill');
  heartIcon3.classList.toggle('active');
  showMessage3();
});
function showMessage3() {
    if (heartIcon3.classList.contains('active')) {
      message3.innerText = 'Đã thêm vào danh sách yêu thích';
      message3.style.display = 'block';
      message3.classList.add('slide-from-right3');
      setTimeout(function() {
        message3.style.display = 'none';
        message3.classList.remove('slide-from-right3');
      }, 4000);
    }
  }
  const heartIcon4 = document.getElementById('heart-icon4');
const message4 = document.getElementById('message4');
heartIcon4.addEventListener('click', function() {
  heartIcon4.classList.toggle('bi-heart');
  heartIcon4.classList.toggle('bi-heart-fill');
  heartIcon4.classList.toggle('active');
  showMessage4();
});
function showMessage4() {
    if (heartIcon4.classList.contains('active')) {
      message4.innerText = 'Đã thêm vào danh sách yêu thích';
      message4.style.display = 'block';
      message4.classList.add('slide-from-right4');
      setTimeout(function() {
        message4.style.display = 'none';
        message4.classList.remove('slide-from-right4');
      }, 4000);
    }
  }
  const heartIcon5 = document.getElementById('heart-icon5');
const message5 = document.getElementById('message5');
heartIcon5.addEventListener('click', function() {
  heartIcon5.classList.toggle('bi-heart');
  heartIcon5.classList.toggle('bi-heart-fill');
  heartIcon5.classList.toggle('active');
  showMessage5();
});
function showMessage5() {
    if (heartIcon5.classList.contains('active')) {
      message5.innerText = 'Đã thêm vào danh sách yêu thích';
      message5.style.display = 'block';
      message5.classList.add('slide-from-right5');
      setTimeout(function() {
        message5.style.display = 'none';
        message5.classList.remove('slide-from-right5');
      }, 4000);
    }
  }
  const heartIcon6 = document.getElementById('heart-icon6');
const message6 = document.getElementById('message6');
heartIcon6.addEventListener('click', function() {
  heartIcon6.classList.toggle('bi-heart');
  heartIcon6.classList.toggle('bi-heart-fill');
  heartIcon6.classList.toggle('active');
  showMessage6();
});
function showMessage6() {
    if (heartIcon6.classList.contains('active')) {
      message6.innerText = 'Đã thêm vào danh sách yêu thích';
      message6.style.display = 'block';
      message6.classList.add('slide-from-right6');
      setTimeout(function() {
        message6.style.display = 'none';
        message6.classList.remove('slide-from-right6');
      }, 4000);
    }
  }
   //chuyển sang MV
  document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('.link');
    const overlay = document.getElementById('overlay');
    const iframe = document.getElementById('iframe');

    link.addEventListener('click', function(event) {
        event.preventDefault();
        iframe.src = link.getAttribute('href');
        overlay.style.display = 'block'; // Hiển thị overlay trước khi bắt đầu hiệu ứng
        setTimeout(() => {
            overlay.classList.add('active');
        }, 10); // Thêm một độ trễ nhỏ để đảm bảo transition được kích hoạt
    });
});

  