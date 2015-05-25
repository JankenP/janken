hand = new Array("img/g001.jpg","img/t001.jpg","img/パー.jpg");
msg = new Array("img/win.jpg","img/lose.jpg","img/draw.jpg");
function getbhand(btn) {
	//手を出す
	r = Math.floor(Math.random() * 3);
	document.getElementById("Messege1").innerHTML ="<img src='" + hand[r] + "'>";
	document.getElementById("Message2").innerHTML = "<img src='" + hand[btn]+ "'>";
	
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
}
