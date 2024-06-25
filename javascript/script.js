function changeVideo(src, background, title, avatar) {
    var video = document.getElementById("main-video");
    var body = document.body;
    var videoTitle = document.getElementById("video-title");
    var avatarImg = document.getElementById("avatar-img");

    video.src = src;
    body.style.backgroundImage = `url('${background}')`;
    videoTitle.textContent = title;
    avatarImg.src = avatar;
    videoElement.play();
}

document.addEventListener('DOMContentLoaded', function() {
    var closeIcon = document.getElementById('closeIcon');
    var videoSection = document.getElementById('video-section');
    
    // Thêm sự kiện click vào biểu tượng đóng
    closeIcon.addEventListener('click', function() {
        // Ẩn phần video và danh sách phát
        videoSection.style.display = 'none';
    });
});

    
