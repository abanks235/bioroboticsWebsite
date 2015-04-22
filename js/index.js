var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player = document.getElementById('player')

var closest = function closest(el, fn) {
	return el && ( fn(el) ? el : closest(el.parentNode, fn) );
};

var openVideoFrame = function(e) {
	e = e || window.event;
	e.preventDefault ? e.preventDefault() : e.returnValue = false;

	var eTarget = e.target || e.srcElement;

	var clickedListItem = closest(eTarget, function(el) {
		return el.tagName === 'A';
	});

	if(!clickedListItem) {
		return;
	}

	var videoLink = clickedListItem.getAttribute("href");
	console.log(videoLink);
	player.loadVideoById(videoLink, 0, "large");
	player.playVideo();
}

function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
		height: '390',
		width: '640',
		videoId: 'M7lc1UVf-VE',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	//event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
	//if (event.data == YT.PlayerState.PLAYING && !done) {
	//	setTimeout(stopVideo, 6000);
	//	done = true;
	//}
}
function stopVideo() {
	player.stopVideo();
}