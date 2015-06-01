hand = new Array("img/g001.jpg","img/t001.jpg","img/パー.jpg"); //配列
msg = new Array("img/win.jpg","img/lose.jpg","img/draw.jpg");

var sampleCount0 = 0;	//初期化
var sampleCount1 = 0;
var sampleCount2 = 0;
var sampleCount3 = 0; //ジャンケンした回数





function getbhand(btn) {
	//手を出す
	r = Math.floor(Math.random() * 3); //乱数 0～2
	document.getElementById("Messege1").innerHTML ="<img src='" + hand[r] + "'>"; //相手
	document.getElementById("Message2").innerHTML = "<img src='" + hand[btn]+ "'>";//自分
	
	//あいこ
	var num = 2;
	
	//グー 配列になっている
	if (btn == 0 && r == 1){
		 num = 0;
	}
	
	if (btn == 0 && r == 2){
		num = 1;
	}
	
	//チョキ
	if (btn == 1 && r == 0){
		num = 1;
	}
	if (btn == 1 && r == 2){
		num = 0;
	}
	//パー
	if (btn == 2 && r == 0){
		num = 0;
	}
	if (btn == 2 && r == 1){
		num = 1;
	}
	//表示
	document.getElementById("message").innerHTML ="<img src='" + msg[num] + "'>";
	
	document.getElementById("sampleOutput3").innerHTML = "ジャンケンした回数 : " + ++sampleCount3;
	
	//勝ち負け回数の表示
	if	(num == 0){
			document.getElementById("sampleOutput0").innerHTML = "勝った回数 : " + ++sampleCount0;
	}
	
	if	(num == 1){
			document.getElementById("sampleOutput1").innerHTML = "負けた回数 : " + ++sampleCount1;
	}
	if	(num == 2){
			document.getElementById("sampleOutput2").innerHTML = "引き分けた回数 : " + ++sampleCount2;
	}
	
}
