// banner效果
{
	let imgs=document.querySelectorAll(".banner_middle li");
	let pagers=document.querySelectorAll(".banner_pagerbox li");
	let banner=document.querySelector(".banner");
	let prev=document.querySelector(".banner_lbtn");
	let next=document.querySelector(".banner_rbtn");
	console.log(banner);
	/*console.log(imgs);
	console.log(pagers);*/

	pagers.forEach(function(ele,index){
		// console.log(ele);
		ele.onmouseenter=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");		
				//移除类名
				pagers[i].classList.remove("active");
			}
			//this  ele   pagers[index]
			this.classList.add("active");
			//添加类名
			imgs[index].classList.add("active");
			n=index;
		}
	})
	let n=0;
	let t=setInterval(move,3000);
		function move(){
		// console.log(1);
			n++;
			if(n===imgs.length){
				n=0;
			}
			if(n<0){
				n=imgs.length-1;
			}
			for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");
			}
			imgs[n].classList.add("active");
			pagers[n].classList.add("active");
	}	
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	next.onclick=function(){
		move();
	}
	prev.onclick=function(){
		n-=2;
		move();
	}
}
//大聚惠效果
{
	let prev=document.querySelector(".ju_lbtn");
	let next=document.querySelector(".ju_rbtn");
	let inner=document.querySelector(".ju_floor_content_left_inner");

	let n=1;
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-1000*n+"px";			
		}		
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-1000*n+"px";			
		}		
	}
	inner.addEventListener("transitionend",function(){	
		flag=true;	
		if(n===4){
			inner.style.transition="none";
			inner.style.marginLeft="-1000px";
			n=1;
		}
		if(n===0){
			inner.style.transition="none";
			inner.style.marginLeft="-3000px";
			n=3;
		}
	})
}
//排行榜效果
{
	let prev=document.querySelector(".rank_lbtn");
	let next=document.querySelector(".rank_rbtn");
	let inner=document.querySelector(".rank_item_content_inner");
	let pagers=document.querySelectorAll(".rank_dian1");
	let items=document.querySelectorAll(".rank_item_content_item");
    let n=1;
    let obj=pagers[1];
    const l=pagers.length;
    let flag=true;
    function move(){
        if(flag===false){
            inner.style.transition="all .5s ease";
            inner.style.marginLeft=-369*n+"px";
        }
    }
    next.onclick=function(){
        if(flag){
            flag=false;
            n++;
            move();
        }
    }
    prev.onclick=function(){
        if(flag){
            flag=false;
            n--;
            move();
        }
    }
    inner.addEventListener("transitionend",function(){
        flag=true;
        if(n===4){
            inner.style.transition="none";
            inner.style.marginLeft="-369px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-1107px";
            n=3;
        }
        if(n>0&&n<4){
            for (let i = 0; i <l; i++) {
                pagers[i].classList.remove("active");
            }
            pagers[n-1].classList.add("active");
        }else if(n===0){
            for (let i = 0; i <l; i++) {
                pagers[i].classList.remove("active");
            }
            pagers[3].classList.add("active");
        }else if(n===4){
            for (let i = 0; i <l; i++) {
                pagers[i].classList.remove("active");
            }
            pagers[1].classList.add("active");
        }
    });
    pagers.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.classList.remove("active");
            ele.classList.add("active");
            obj=ele;
            inner.style.marginLeft=-(index+1)*369+"px";
            n=index+1;
        }
    })
}
//视频
{
	let next=document.querySelector(".xiaoshipin_rbtn");
	let prev=document.querySelector(".xiaoshipin_lbtn");
	let inner=document.querySelector(".xiaoshipin_inner");
	let items=document.querySelectorAll(".xiaoshipin_list");
	let tips=document.querySelectorAll(".xiaoshipin_item");
	let content=document.querySelectorAll(".shipin_item");

    let n=1;
    let obj=tips[0];
    let flag=true;
    next.onclick=function(){
        if(flag){
            flag=false;
            n++;
            inner.style.transition="all 1s";
            inner.style.marginLeft=-390*n+"px";
        }
    }
    prev.onclick=function(){
        if(flag){
            flag=false;
            n--;
            inner.style.transition="all 1s";
            inner.style.marginLeft=-390*n+"px";
        }
    }
    inner.addEventListener("transitionend",function(){
        flag=true;
        if(n===3){
            inner.style.transition="none";
            inner.style.marginLeft="-390px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-780px";
            n=2;
        }
    });
    tips.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.classList.remove("active");
            ele.classList.add("active");
            obj=ele;
            content[index].classList.add("active");
        }
        ele.onmouseleave=function(){
            content[index].classList.remove("active");
        }
    });
}
//返回顶部
{	
	//获取toTop
	let totop=document.querySelector(".zhiding");
	let rightdh_totop=document.querySelector(".rightdh_totop");

    let fenlei=document.querySelector(".fenlei_nav");
    let list=document.querySelector(".fenlei_list");

	//totop的单击事件
    let dingbu=function(){
        //document.documentElement.scrollTop=0;
        //获取滚动条滚动的距离
        let st=document.documentElement.scrollTop;
        //setInterval方法
        let t=setInterval(function(){
            st-=200;
            //如果st<0，让st=0,并清除此定时器，结束循环回调
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },25);
    }
	totop.onclick=dingbu;
    rightdh_totop.onclick=dingbu;

	//onscroll元素或者浏览器窗口发生滚动的时候触发的事件
	//获取leftBar
	let leftBar=document.querySelector(".leftdh");
	let topBar=document.querySelector(".topbar");
	//页面滚动触发的事件
	window.onscroll=function(){
		//获取滚动条滚动的距离
		let st=document.documentElement.scrollTop;
		if(st>1200){
			topBar.style.display="block";
            fenlei.onmouseenter=function(){
                list.style.display="block";
            }
            fenlei.onmouseleave=function(){
                list.style.display="none";
            }
		}else{
			topBar.style.display="none";
		}
		//如果滚动的距离大于2300就显示leftBar，否则隐藏
		if(st>2300){
			leftBar.style.display="block";
		}else{
			leftBar.style.display="none";
		}
	}
}
//楼层跳转效果
{	
	//获取tips
	let tips=document.querySelectorAll(".leftdh ul li");
	//获取container
	let containers=document.querySelectorAll(".remenshouji_box");
	let flag=true;//开关
	//遍历
	tips.forEach(function(ele,index){
		//单击事件
		ele.onclick=function(){
			flag=false;
			let ot=containers[index].offsetTop-70;
			//获取滚动条滚动的距离
			let now=document.documentElement.scrollTop;
			let time=0;
			// console.log(ot);
			let speed=(ot-now)/10;
			//setInterval方法
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				//如果事件等于200s,就清除此定时器，结束循环回调
				if(time===250){
					clearInterval(t);
					flag=true;
				}					
				document.documentElement.scrollTop=now;
			},25);
		}
	});
	//事件监听
	window.addEventListener("scroll",function(){
		 if(flag){
			let st=document.documentElement.scrollTop;
			for(let i=0;i<containers.length;i++){
				if(st>=containers[i].offsetTop-70){
					for(let i=0;i<tips.length;i++){
						//移除类名
						tips[i].classList.remove("active");
					}
					//添加类名
					tips[i].classList.add("active");
				}
			}
		}				
	});
}
//全部分类
{
    let labels=document.querySelectorAll(".fenlei_list li");
    let menus=document.querySelectorAll(".fenlei_list li .item-box");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            labels[index].classList.add("active");
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        }
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    });
}
//banner侧导航
{
	let labels=document.querySelectorAll(".banner_nav li");
	let menus=document.querySelectorAll(".item-box");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			labels[index].classList.add("active");
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	});
	//console.log(labels,menus);
}
//banner右部分头条效果
{
	let ttoT=document.querySelector(".toutiao ul");
	let T=document.querySelector(".toutiao");
	console.log(ttoT,T);
	let n=0;
	function toT() {
	    ttoT.style.transition="all 2s";
	    n++;
	    if(n===3){
	        n=0;
	    }
	    ttoT.style.top=-n*108+"px";
	}
	let st=setInterval(toT,2000);
	T.onmouseover=function () {
	    clearInterval(st);
	};
	T.onmouseout=function () {
	    st=setInterval(toT,2000);
	};
	ttoT.addEventListener("transitionend",function () {
	    if(n===3){
	        ttoT.style.transition="none";
	        ttoT.style.top="0";
	        n=0;
	    }
	});
}
// {
//     let mis=document.querySelector(".banner-middles");
//     // console.log(mis);
//     let mis1=document.querySelectorAll(".banner-middle-right-middle");
//     setInterval(updown,3000);
//     var y=0;
//     function updown(){
//         y++;
//         if(y>2){
//             mis.style.transition="";
//             y=0;
//
//             return;
//         }
//         mis.style.transition="all 1s";
//         mis.style.marginTop=-100*y+"px";
//     }
//     mis.addEventListener("transitionend",function(){
//         if(y==2){
//             mis.style.transition="";
//             mis.style.marginTop=0;
//         }
//     })
// }
//乐拼购效果
{
	const prev=document.querySelector(".pingou_lbtn");
	const next=document.querySelector(".pingou_rbtn");
	const inner=document.querySelector(".pingou_inner");
    let n=1;
    let flag=true;
    next.onclick=function(){
        if(flag){
            flag=false;
            n++;
            inner.style.transition="all 1s";
            inner.style.marginLeft=-530*n+"px";
        }
    }
    prev.onclick=function(){
        if(flag){
            flag=false;
            n--;
            inner.style.transition="all 1s";
            inner.style.marginLeft=-530*n+"px";
        }
    }
    inner.addEventListener("transitionend",function(){
        flag=true;
        if(n===4){
            inner.style.transition="none";
            inner.style.marginLeft="-530px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-1590px";
            n=3;
        }
    })
}
//右边侧导航
{
	let icon=$(".rightdh_message");
	let wenzi=$(".rightdh_wenzi");
    icon.mouseenter(function () {
        $(this).find(wenzi).show().animate({left:"47"},500);
    });
    icon.mouseleave(function () {
        $(this).find(wenzi).hide().animate({left:"-47"},500);
    });
}
//头部
{
    $(".head_dhbox").mouseenter(function () {
        $(".head_dh").css("display","block");
    })
    $(".head_dhbox").mouseleave(function () {
        $(".head_dh").css("display","none");
    })

    $(".head_shangjia").mouseenter(function () {
        $(".shangjia_hidden").css("display","block");
    })
    $(".head_shangjia").mouseleave(function () {
        $(".shangjia_hidden").css("display","none");
    })

    $(".kehu").mouseenter(function () {
        $(".kehu_hidden").css("display","block");
    })
    $(".kehu").mouseleave(function () {
        $(".kehu_hidden").css("display","none");
    })

    $(".suning").mouseenter(function () {
        $(".suning_hidden").css("display","block");
    })
    $(".suning").mouseleave(function () {
        $(".suning_hidden").css("display","none");
    })

    $(".head_myorder").mouseenter(function () {
        $(".head_myorder_hidden").css("display","block");
    })
    $(".head_myorder").mouseleave(function () {
        $(".head_myorder_hidden").css("display","none");
    })
}


