function changeImg(delta) {
	pic+=delta;
	if(pic<0) pic=0;
	if(pic>2) pic=2;
	console.log(pic);
	document.getElementById("gallerybox").style.marginLeft=-854*pic;
}