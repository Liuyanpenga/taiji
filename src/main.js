let html = document.querySelector('#html')
let style = document.querySelector("#style")
//加注释才会应用style
let string = `/*你好，我是小刘
接下来，我要制作一个八卦图、
来展示一下我的前端技术
*/ 
/*首先我先准备了一个div*/ 
#div1{
  width: 300px;
  height: 300px;
  border: 1px solid red;
}
/*然后将这个div变成圆*/ 
#div1{
  border-radius:50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*八卦图是一阴一阳
接下来把div变成黑白两块*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
  rgba(255,255,255,1) 50%, 
  rgba(0,0,0,1) 50%, 
  rgba(0,0,0,1) 100%);
}
/*下面，我要将太极的阴阳分道*/
#div1::before{
  width:150px;
  height:150px;
  left:50%;
  transform: translateX(-50%);
  border-radius:50%;
  background:black;
  background: radial-gradient(circle, 
    rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 25%, 
    rgba(0,0,0,1) 25%, 
    rgba(0,0,0,1) 100%);
}
#div1::after{
  width:150px;
  height:150px;
  top:50%;
  transform: translateX(50%);
  border-radius:50%;
  background:white;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, 
  rgba(0,0,0,1) 25%, 
  rgba(255,255,255,1) 25%, 
  rgba(255,255,255,1) 100%);
}
`
let string2 = ""
let n = 0
let step = ()=>{
      setTimeout(()=>{     
        //如果是回车就转换为br 如果不是就照搬string  
        if(string[n] ==="\n"){
          string2 += '<br>';
        }else if(string[n] ===" "){
          string2 += "&nbsp";
        }else{
          string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);//设置滚动条
        html.scrollTo(0,99999);
        if(n < string.length-1){
          n+=1      //如果你不是最后一个就加1
          step()
        }
      },0)
}
step()

