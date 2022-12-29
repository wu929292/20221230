var face_x = [] //新增臉x軸的變數
var face_y = [] //新增臉y軸的變數
var face_size = [] //新增臉大小的變數
var face_num = 10 //產生10個相同圖形
var color = []
var music_btn = []
var mouse_btn = []
var Speech_btn = []

var myRec = new p5.SpeechRec();
var result = []
//宣告變數加入音樂
var song
var songIsplay=false//設定此變數為false,收到按下滑鼠把變數改為true,音樂播放
var amp
var vol = 0
var m_x,m_y
var musicIsplay=true
var mouseIsplay=true
function preload(){
  song = loadSound("Losing My Mind - NEFFEX.mp3");

}

function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  mouse_btn = createButton("播放")
  mouse_btn.position(10,10)
  mouse_btn.size(250, 100);
  mouse_btn.style('background-color', 'C2BBF0');
  mouse_btn.style('font-size', '30px');
  mouse_btn.style('color', '#118ab2');
  mouse_btn.mousePressed(mouse_btn_pressed)
  //第二個按鈕
  music_btn = createButton("停止")
  music_btn.position(300,10)
  music_btn.size(250, 100);
  music_btn.style('background-color', '#C2BBF0');
  music_btn.style('font-size', '30px');
  music_btn.style('color', '#118ab2');
  music_btn.mousePressed(music_btn_pressed)//music_btn被按下時,要到music_btn_pressed產生音樂
  
  //第三個按鈕
  Speech_btn = createButton("語音辨識  (播放/停止)")
  Speech_btn.position(590,10)
  Speech_btn.size(250, 100);
  Speech_btn.style('background-color', 'C2BBF0');
  Speech_btn.style('font-size', '20px');
  Speech_btn.style('color', '#118ab2');
  Speech_btn.mousePressed(Speech_btn_pressed)


for(var i=0;i<face_num;i++){
  face_size[i] = random(100,400)//臉的大小100~400
  face_x[i] = random(100,width)
  face_y[i] = random(250,height)
  color = random(0,255)
  }
}

function music_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  amp=new p5.Amplitude()
  music_btn.style('background-color', '#C2BBF0')
  mouse_btn.style('background-color', 'black')
  Speech_btn.style('background-color', 'black')
}
function mouse_btn_pressed(){
  song.pause()
  songIsplay = false
  music_btn.style('background-color', 'black')
  mouse_btn.style('background-color', '#C2BBF0')
  Speech_btn.style('background-color', 'black')
}
function Speech_btn_pressed(){
  music_btn.style('background-color', 'black')
  mouse_btn.style('background-color', 'black')
  Speech_btn.style('background-color', '#C2BBF0')
  myRec.onResult = showResult;
  myRec.start(); 
}

function showResult() //語音說話2
{
 if(myRec.resultValue==true) {
      result = myRec.resultString
         if(myRec.resultString==="跳舞")
            {
                music_btn_pressed()
             }
         if(myRec.resultString==="不要跳")
            {
 
              mouse_btn_pressed()
             }
 }
}
function draw() {
  background(220);
  textSize(40)
  text("X:"+mouseX+" Y:"+mouseY,50,50)
  for(var j=0;j<face_num;j++){
push()
   var f_s = face_size[j]
   translate(face_x[j],face_y[j])
   fill('#2894FF')
   ellipse(0,0,f_s)//臉
   fill(255)
   ellipse(0,f_s/4,f_s/4*3,f_s/2)//白色部分
   fill(255)
   ellipse(-f_s/10,-f_s/40*3,f_s/40*7,f_s/40*9)//左眼白
   ellipse(f_s/10,-f_s/40*3,f_s/40*7,f_s/40*9)//右眼白
   fill(0)
   ellipse(-f_s/10+map(mouseX,0,width,-f_s/80,f_s/80),-f_s/10+map(mouseX,0,height,-f_s/80,f_s/80),f_s/20)//左眼球
   ellipse(f_s/10+map(mouseX,0,width,-f_s/80,f_s/80),-f_s/10+map(mouseY,0,height,f_s/80,f_s/80),f_s/20)//右眼球
   fill(255,0,0)
   ellipse(0,0,f_s/8,f_s/8)//鼻子
   
   fill(255,0,0)
   arc(0,f_s/4,f_s/2,f_s/4,0,180)  //下弧
   fill(255)
   function showResult() //語音說話2
{
 if(myRec.resultValue==true) {
      result = myRec.resultString
         if(myRec.resultString==="播放")
            {
                music_btn_pressed()
             }
         if(myRec.resultString==="停止")
            {
 
              mouse_btn_pressed()
             }
 }
}
   noFill()
 pop()

}
}