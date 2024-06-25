const container = document.querySelector('.phan1');
const items = document.querySelectorAll('.treo-anh1');
let index1 = 0;

function showNextImage() {
    index1++;
    if (index1 >= items.length) {
        index1 = 0;
    }
    const offset = -index1 * 100; // 200 là chiều rộng của mỗi hình ảnh
    container.style.transform = `translateX(${offset}px)`;
}

setInterval(showNextImage, 5000);

$(document).ready(function () {
    "use strict";
    var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionalSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});

let song = [

    {
        id:'1',
        songName:`Yêu là cưới <br> <div style="color: #A58FB6;" id="title">Phát Hồ, Đinh Long</div> `,
     
        poster:"imgg/1.jpg",
    },

    {
        id:'2',
        songName:`Lựa Chọn của em <br> <div style="color: #A58FB6;" id="title" >Bùi trường Linh</div> `,
        poster:"imgg/2.jpg",
    },

    {
        id:'3',
        songName:`Bỏ em vào ba lô <br> <div style="color: #A58FB6;" id="title">Tân Trần</div> `,
        poster:"imgg/3.jpg",
    },

    {
        id:'4',
        songName:`Hoa Vô Sắc <br> <div style="color: #A58FB6;" id="title">Jack</div> `,
        poster:"imgg/4.jpg",
    },

    {
        id:'5',
        songName:`Chúng ta của hiện tại <br> <div style="color:#A58FB6;" id="title">Sơn Tùng M-TP</div> `,
        poster:"imgg/5.jpg",
    },

    {
        id:'6',
        songName:`Đừng làm trái tim anh đau <br> <div style="color: #A58FB6;" id="title">Sơn Tùng M-TP</div> `,
        poster:"imgg/6.jpg",
    },

    {
        id:'7',
        songName:`Wating For You <br> <div style="color: #A58FB6;" id="title">Mono</div> `,
        poster:"imgg/7.jpg",
    },

    {
        id:'8',
        songName:`Về Bên Anh<br> <div style="color: #A58FB6;" id="title">jack</div> `,
        poster:"imgg/8.jpg",
    },

    {
        id:'9',
        songName:`Nếu Biết Đó Là lần cuối <br> <div style="color: #A58FB6;" id="title">Đức Trường</div> `,
        poster:"imgg/9.jpg",
    },

    {
        id:'10',
        songName:`Sao Em Vô Tình <br> <div style="color: #A58FB6;" id="title">Jack</div> `,
        poster:"imgg/10.jpg",
    },

    {
        id:'11',
        songName:`Chúng ta của tương lai <br> <div style="color: #A58FB6;" id="title">Sơn Tùng M-TP</div> `,
        poster:"imgg/11.jpg",
    },

    {
        id:'12',
        songName:`Người Lạ Ơi <br> <div style="color: #A58FB6;" id="title">Karik</div> `,
        poster:"imgg/12.jpg",
    },

    {
        id:'13',
        songName:`Ngõ Chạm<br> <div style="color: #A58FB6;" id="title">VSTRA, BigDaddy</div> `,
        poster:"imgg/13.jpg",
    },

    {
        id:'14',
        songName:`Không thể say <br> <div style="color: #A58FB6;" id="title">Hiếu Thứ Hai</div> `,
        poster:"imgg/14.jpg",
    },

    {
        id:'15',
        songName:`Cứ nói yêu lần này <br> <div style="color: #A58FB6;" id="title">Lil Zpoet</div> `,
        poster:"imgg/15.jpg",
    },
    {
        id:'16',
        songName:` aespaSupernova <br> <div style="color: #A58FB6;" id="title"> Aespa</div> `,
        poster:"imgg/16.jpg",
    },
    {
        id:'17',
        songName:`Love me Love me <br> <div style="color: #A58FB6;" id="title">Winner </div> `,
        poster:"imgg/17.jpg",
    },
    {
        id:'18',
        songName:`Sợ Lắm 2, Freak D <br> <div style="color: #A58FB6;" id="title"> NB3 Hoài Bảo</div> `,
        poster:"imgg/18.jpg",
    },
    {
        id:'19',
        songName:` Fairy Tale  <br> <div style="color: #A58FB6;" id="title"> Luna Đào, 1DEE</div> `,
        poster:"imgg/19.jpg",
    },
    {
        id:'20',
        songName:`Bình Yên Thôi <br> <div style="color: #A58FB6;" id="title">52Hz</div> `,
        poster:"imgg/20.jpg",
    },
    {
        id:'21',
        songName:`Acoutic Thư Giãn <br> <div style="color: #A58FB6;" id="title">52Hz</div> `,
        poster:"imgg/21.jpg",
    },
    {
        id:'22',
        songName:`Một Chút Thôi <br> <div style="color: #A58FB6;" id="title">52Hz</div> `,
        poster:"imgg/22.jpg",
    },
    {
        id:'23',
        songName:`BaLLad <br> <div style="color: #A58FB6;" id="title">Remix</div> `,
        poster:"imgg/23.jpg",
    },
    {
        id:'24',
        songName:`Nhạc Hoa Lời Việt <br> <div style="color: #A58FB6;" id="title">Remix</div> `,
        poster:"imgg/24.jpg",
    },
    {
        id:'25',
        songName:`Nhạc trẻ Vinahouse <br> <div style="color: #A58FB6;" id="title">Remix</div> `,
        poster:"imgg/25.jpg",
    },
    {
        id:'26',
        songName:`V-POP <br> <div style="color: #A58FB6;" id="title">Remix</div> `,
        poster:"imgg/26.jpg",
    },
    {
        id:'27',
        songName:`EDM Việt <br> <div style="color: #A58FB6;" id="title">Remix</div> `,
        poster:"imgg/27.jpg",
    },
    {
        id:'28',
        songName:`Đừng làm Trái Tim ANh Đau <br> <div style="color: #A58FB6;" id="title">Sơn Tùng MTP</div> `,
        poster:"imgg/28.jpg",
    },
    {
        id:'29',
        songName:`Ngày mai tôi sẽ viết sách <br> <div style="color: #A58FB6;" id="title">Quang Hà</div> `,
        poster:"imgg/29.jpg",
    },
    {
        id:'30',
        songName:`Đổ sông đổ biển <br> <div style="color: #A58FB6;" id="title">Khang Việt</div> `,
        poster:"imgg/30.jpg",
    },
    {
        id:'31',
        songName:`Lệ phí cuộc đời <br> <div style="color: #A58FB6;" id="title">Cao Thái Sơn</div> `,
        poster:"imgg/31.jpg",
    },
    {
        id:'32',
        songName:`Top 100 Nhạc Trẻ<br> <div style="color: #A58FB6;" id="title">52Hz</div> `,
        poster:"imgg/32.jpg",
    },
    {
        id:'33',
        songName:`Top 100 POP Âu Mĩ <br> <div style="color: #A58FB6;" id="title">52Hz</div> `,
        poster:"imgg/33.jpg",
    },
    {
        id:'34',
        songName:`Top 100 Nhạc Phim Việt Nam <br> <div style="color: #A58FB6;" id="title">52Hz</div> `,
        poster:"imgg/34.jpg",
    },
    {
        id:'35',
        songName:`Top 100 trữ Tình <br> <div style="color: #A58FB6;" id="title">52Hz</div> `,
        poster:"imgg/35.jpg",
    },
    {
        id:'36',
        songName:`Top 100 hàn quốc <br> <div style="color: #A58FB6;" id="title">52Hz</div> `,
        poster:"imgg/35.jpg",
    },
    {
        id:'37',
        songName:`Tự ý yêu anh <br> <div style="color: #A58FB6;" id="title">Tuệ Phương</div> `,
        poster:"imgg/37.jpg",
    },
    {
        id:'38',
        songName:`Ngày mai tôi sẽ viết sách <br> <div style="color: #A58FB6;" id="title">Quang Hà</div> `,
        poster:"imgg/38.jpg",
    },
    {
        id:'39',
        songName:`Em khóc thật rồi <br> <div style="color: #A58FB6;" id="title">Thảo Cherry</div> `,
        poster:"imgg/39.jpg",
    },
    {
        id:'40',
        songName:`Chẳng thể nói ra <br> <div style="color: #A58FB6;" id="title">Dương Sunny</div> `,
        poster:"imgg/40.jpg",
    },
    {
        id:'41',
        songName:`Trả lại trái tym cho em <br> <div style="color: #A58FB6;" id="title">kaylin Trần</div> `,
        poster:"imgg/41.jpg",
    },

    
 ]
 Array.from(document.getElementsByClassName('dayday')).forEach((element, i )=>{
    element.getElementsByTagName('img')[0].src = song[i].poster;
    element.getElementsByTagName('a')[0].innerHTML = song[i].songName;
})

let masterPlay = document.getElementById('masterPlay');

 const music = new Audio('nhac_TC.mp3')

masterPlay.addEventListener('click', () => {
   if (music.paused || music.currentTime <= 0) {
      music.play();
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');
      
   } else {
      music.pause();
      masterPlay.classList.add(('bi-play-fill'));
      masterPlay.classList.remove('bi-pause-fill');
  
   }
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{

            element.classList.add('bi-play-fill');
            element.classList.remove('bi-pause-fill');
})
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('dayday')).forEach((element)=>{

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
        e.target.classList.remove('bi-play-fill');
        e.target.classList.add('bi-pause-fill');
        music.src = `nhac_TC/${index}.mp3`;
        poster_master_play.src = `imgg/${index}.jpg`;
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
    index = 0;
    if (index <1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `imgg/${index}.jpg`;
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
       index = 0;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `imgg/${index}.jpg`;
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
     Array.from(document.getElementsByClassName('songItem'))[`${index-2}`].style.background = "rgb(105, 105, 170, .1)";
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


