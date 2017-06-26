//---------主角：轮播图函数-------------
   var aHeight=window.screen.availHeight;
   var oDiv=document.getElementById('slideshow');
   oDiv.style.height=aHeight*0.92-60+'px';
function slideshow() {
  var slideshow=document.getElementById("slideshow"),
  imgs=slideshow.getElementsByTagName("img"), //得到图片们
  pages=slideshow.getElementsByTagName("span"), //得到页码们
  buttons=slideshow.getElementsByTagName("p"), //得到描述们
  left_btn=buttons[0],
  right_btn=buttons[1],
  current=0; //current为当前活跃的图片编号

  function slideOff() {
    imgs[current].className=""; //图片淡出
    pages[current].className="";
  }
  function slideOn() {
    imgs[current].className="active"; //图片淡入
    pages[current].className="active";
  }

  function changeSlide() { //切换图片的函数
    slideOff();
    current++; //自增1
    if(current>=3) current=0;
    slideOn();
  }

  //每2s调用changeSlide函数进行图片轮播
  var slideon=setInterval(changeSlide,5000);

//slideshow.onmouseover=function () {
//  clearInterval(slideon); //当鼠标移入时清除轮播事件
//}
//slideshow.onmouseout=function () {
//  slideon=setInterval(changeSlide,2000); //当鼠标移出时重新开始轮播事件
//}
//
for(var i=0; i<pages.length; i++) { //定义鼠标移入和移出页码事件
    pages[i].onmouseover=function(){
      slideOff(); //图片淡出
      current=this.getAttribute("name"); //得到鼠标停留的页码对应的current
      slideOn(); //图片淡出
    }
}

  left_btn.onclick=function () {
    slideOff(); //图片淡出
    current--;
    if(current<0) current=2;
    slideOn(); //图片淡出
  }
  right_btn.onclick=function () {
    slideOff(); //图片淡出
    current++;
    if(current>2) current=0;
    slideOn(); //图片淡出
  }
}

slideshow();