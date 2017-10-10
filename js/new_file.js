function $(id){
		return document.getElementById(id);
	}
function getStyle(obj,arrt){
	if(obj.currentStyle){
			return obj.currentStyle[arrt];
		}else{
			return getComputedStyle(obj)[arrt];
		}
	}
function go(obj,step,end,arrt,backFn){
	//事件对象  步幅    速度   走多远距离  方向（样式）下一步
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
	var	num=parseInt(getStyle(obj,arrt))+step;
		if(num>end && step>0||num<end && step<0){
			num=end;
		}
		obj.style[arrt]=num+'px';
		if(num==end){
			clearInterval(obj.timer);
			if(backFn){
					backFn();
				}
		}
	},10)
}
//function opacity(obj,step,speed,backFn){
 //		var n;
 //		step>0 ? n=0 : n=1;
//		obj.opa=setInterval(function(){
//		var	n=parseFloat(getStyle(obj,'opacity'))+step;
//			obj.style.opacity=n;
//			if(n<=0 && step<0 || n>1 && step>0){
//				if(n<0 || n>1){
//					n=0	;
//			//减不到0时直接赋值n=0
//				}
//				clearInterval(obj.opa);
//				if(backFn){
//					backFn();
//				}
//			}
//	},speed)
//}
function opacity(obj,step,endFn){
		var n;
		step>0 ? n=0 : n=1;
		obj.opa= setInterval(function(){
			n=n+step;
			obj.style.opacity=n;
			if(n>=1||n<=0){
				clearInterval(obj.opa);
				if(endFn){
					endFn();
				}
			}
		},40)
	}
function double(n){
	n<10 ? n='0'+n : n ;
	return n;
}
function shake(obj,attr,contrl,backFn){
		if(contrl){
//	    var arr=[10,-10,8,-8,6,-6,4,-4,2,-2,0,0]
		var arr=[]
		obj.s=false;
	    for(var i=10;i>=0;i-=2){
	    	arr.push(i,-i)
	    }
		var pos=parseInt(getStyle(obj,attr))
		var n=0
		obj.shake=setInterval(function(){
			obj.style[attr]=pos+arr[n]+'px';
			n++;
			if(n==arr.length){
				clearInterval(obj.shake)
				obj.s=true;
				if(backFn){
					backFn();
				}
			}
			},100)
		}
	}
function shake1(obj,attr,backFn){
//	    var arr=[10,-10,8,-8,6,-6,4,-4,2,-2,0,0]
		var arr=[]
	    for(var i=10;i>=0;i-=2){
	    	arr.push(i,-i)
	    }
		var pos=parseInt(getStyle(obj,attr))
		var n=0
		obj.shake=setInterval(function(){
			obj.style[attr]=pos+arr[n]+'px';
			n++;
			if(n==arr.length){
				clearInterval(obj.shake)
				if(backFn){
					backFn();
				}
			}
			},100)
		}
function getFist(obj){
//			 if(obj.firstElementChild){
//			 	return obj.firstElementChild
//			 }else{
//			 	return obj.firstChild
//			 }
	 return obj.firstElementChild || obj.firstChild
}
function getnext(obj){
//			 if(obj.nextElementSibling){
//			 	return obj.nextElementSibling
//			 }else{
//			 	return obj.nextSibling
//			 }
	return obj.nextElementSibling || nextSibling
}
function getprevious(obj){
//			 if(obj.previousElementSibling){
//			 	return obj.previousElementSibling
//			 }else{
//			 	return obj.previousSibling
//			 }
	return obj.previousElementSibling || previousSibling
}
function bind(obj,evName,fn){
	if(obj.addEventListener){
		obj.addEventListener(evName,fn,false);
	}else{
		obj.attachEvent('on'+evName,function(){
	   			fn.call(obj);
	   		});
	   	}
	   }
function movepic(obj){
		obj.onmousedown=function(ev){
			var ev=ev||event;
		    var T= ev.clientY-this.offsetTop;
		    var L= ev.clientX-this.offsetLeft;
			if(obj.setCapture){
				obj.setCapture();
			}
			document.onmousemove=function(ev){
				var t=ev.clientY-T;
				var l=ev.clientX-L;
				if(l<=0){
					l=0;
				}else if(l>document.documentElement.clientWidth-obj.offsetWidth){
					l=document.documentElement.clientWidth-obj.offsetWidth;
				}
				if(t<=0){
					t=0;
				}else if(t>document.documentElement.clientHeight-obj.offsetHeight){
					t=document.documentElement.clientHeight-obj.offsetHeight;
				}
				obj.style.top=t+'px';
				obj.style.left=l+'px';
			}
			document.onmouseup=function(){
				document.onmousemove=null;
				if(obj.releaseCapture){
					obj.releaseCapture();
				}
			}
			return false;
		}
		
	}
function movepic(obj){
		obj.onmousedown=function(ev){
			var ev=ev||event;
		    var T= ev.clientY-this.offsetTop;
		    var L= ev.clientX-this.offsetLeft;
			if(obj.setCapture){
				obj.setCapture();
			}
			document.onmousemove=function(ev){
				var t=ev.clientY-T;
				var l=ev.clientX-L;
				if(l<=0){
					l=0;
				}else if(l>document.documentElement.clientWidth-obj.offsetWidth){
					l=document.documentElement.clientWidth-obj.offsetWidth;
				}
				if(t<=0){
					t=0;
				}else if(t>document.documentElement.clientHeight-obj.offsetHeight){
					t=document.documentElement.clientHeight-obj.offsetHeight;
				}
				obj.style.top=t+'px';
				obj.style.left=l+'px';
			}
			document.onmouseup=function(){
				document.onmousemove=null;
				if(obj.releaseCapture){
					obj.releaseCapture();
				}
			}
			return false;
		}
		
	}