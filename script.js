var image = ["jpg/jpg1.jpg", "jpg/jpg2.jpg", "jpg/jpg3.jpg", "jpg/jpg4.jpg", "jpg/jpg5.jpg"]
var img = document.getElementById('slider-img')
var index = 0
function next() {
    if(index==image.length-1)
    index=0
    else
    index++
    img.src = image[index]
}
function previos() {
    if(index==0)
   { index=image.length-1
    img.src = image[index]}
    else
    index--
    img.src = image[index]
}
var time= setInterval(next,2000);
var flag=1
function playPause(){
    if(flag==1)
    {clearInterval(time)
     flag=2}
    else 
   {time=setInterval(next,2000)
    flag=1}

}