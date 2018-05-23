var Total_img = 4;
var Index = 1;
var images = [];
var Element = document.getElementById("img");

preload();
setTimeout(fadeout, 10000);

function change_pic(){
	Element.style.backgroundImage = "url('img/portal_"+ Index.toString() +".jpg')";
	Index++;
	if (Index >= Total_img){
		Index = 0;
	} 
	setTimeout(fadein, 100);
}
function fadeout(){
	Element.style.opacity = "0";
	setTimeout(change_pic, 1000);
}
function fadein(){
	Element.style.opacity = "1";
	setTimeout(fadeout, 7000);
}


function preload() {
    for (var i = 0; i < Total_img; i++) {
        images[i] = new Image();
        images[i].src = "img/portal_"+ i.toString() +".jpg";
    }
}