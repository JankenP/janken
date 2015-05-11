function gu(){
	var myhand = 0;
	var youhand = Math.floor(Math.random()*3);
 	

	if (myhand == youhand){
<<<<<<< HEAD
		 result = "AIKO";
=======
		 result = "引き分け";
>>>>>>> 9a5b46798713201dba12c4c5fb1de9208806ae6c
	}
	
	if (myhand > youhand){
		 result = "勝ち";
	}
	
	if (myhand < youhand){
		 result = "負け";
	}
	
	
	if(youhand == 0){
		youhand ="グー";
	}
	
	if(youhand == 1){
		youhand ="チョキ";
	}
	
	if(youhand == 2){
		youhand ="パー"
	}
	
	docment.getElementById("名前").innerHTML = "相手は" +  youhand;
	docment.getElementById("勝敗").innerHTML = "勝敗の結果は" + result; 	
}



function tyo(){
	var myhand = 0;
	var youhand = Math.floor(Math.random()*3);
 	

	if (myhand == youhand){
		 result = "引き分け";
	}
	
	if (myhand > youhand){
		 result = "勝ち";
	}
	
	if (myhand < youhand){
		 result = "負け";
	}
	
	
	if(youhand == 0){
		youhand ="グー";
	}
	
	if(youhand == 1){
		youhand ="チョキ";
	}
	
	if(youhand == 2){
		youhand ="パー"
	}
	
	docment.getElementById("名前").innerHTML = "相手は" +  youhand;
	docment.getElementById("勝敗").innerHTML = "勝敗の結果は" + result; 	
}


function pa(){
	var myhand = 0;
	var youhand = Math.floor(Math.random()*3);
 	

	if (myhand == youhand){
		 result = "引き分け";
	}
	
	if (myhand > youhand){
		 result = "勝ち";
	}
	
	if (myhand < youhand){
		 result = "負け";
	}
	
	
	if(youhand == 0){
		youhand ="グー";
	}
	
	if(youhand == 1){
		youhand ="チョキ";
	}
	
	if(youhand == 2){
		youhand ="パー"
	}
	
	docment.getElementById("名前").innerHTML = "相手は" +  youhand;
	docment.getElementById("勝敗").innerHTML = "勝敗の結果は" + result; 	
}