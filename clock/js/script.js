function clock(){

// alert("hello");
var d=new Date();
// alert(d);
var h=d.getHours();
var m=d.getMinutes();
var s=d.getSeconds();
var s_angle=s*6;
var m_angle=m*6;
var h_angle=h*30;
hr.style.transform= "rotate("+h_angle+"deg)";
min.style.transform="rotate("+m_angle+"deg)";
sec.style.transform="rotate("+s_angle+"deg)";
// alert(s);

}
setInterval(()=>{
       clock();
},1000)