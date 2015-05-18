hand = new Array("グー","チョキ","パー");
msg = new Array("勝利","敗北","あいこ");
function getbhand(btn) {
	//手を出す
	r = Math.floor(Math.random() * 3);
	document.getElementById("Messege1").innerHTML ="相手は: " + hand[r];
	document.getElementById("Message2").innerHTML = "自分は: " + hand[btn];
	
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
	document.getElementById("message").innerHTML = msg[num];
}
