//フォーム名
var FormNameTemp = 'battle';

//クッキーに保存するフォームエレメント名
//※他で使用しているクッキーとも合わせて２０個以内とする
var SaveCookieList = new Array ('before_rate','num','rate','start_rate','diff_rate','current_rate','battle_total','win_total','win_total_per');

//クッキー保存日数
var ReserveDay = 90;

var FormName;

//フォーム送信時の処理
function SaveAndSubmit(){
    FormName = eval('document.'+FormNameTemp+';');
	//フォームをクッキーへ
	for (i in SaveCookieList){

        console.log("Save 1." + SaveCookieList[i]);
        if(SaveCookieList[i] == "before_rate" || SaveCookieList[i] == "num" || SaveCookieList[i] == "rate"
        || SaveCookieList[i] == "battle_total" || SaveCookieList[i] == "win_total" || SaveCookieList[i] == "win_total_per"){
            eval('setCookie("'+SaveCookieList[i]+'",FormName.'+SaveCookieList[i]+'.value);');
        }else{
            eval('setCookie("'+SaveCookieList[i]+'",document.getElementById("'+SaveCookieList[i]+'").innerHTML);');
        }
        console.log("Save 2." + SaveCookieList[i]);
	}
	//フォーム送信
	FormName.submit();
}

//クッキー登録処理
function setCookie(pName,pValue) {
	if(pValue != null){
		var setDay = new Date();
		setDay.setTime(setDay.getTime() + (ReserveDay * 86400000));
		expDay = setDay.toGMTString().replace(/UTC/,'GMT');
		document.cookie = escape(pName) + '=' + escape(pValue) + ';expires='+expDay;
		return true;
	}
	return false;
}

// // ページ読込時の処理
// function LoadAction(){

//     // if(document.getElementById("num").value == ""){
//     //     document.getElementById("num").value = 1;
//     //     document.getElementById("total_num").value = 0;
//     //     document.getElementById("win_num").value = 0;
//     //     document.getElementById("win_per").value = 0;

//     // }else{
//         // cookieによる値を取り出す
//         // return 0;
//     // }
// 	// FormName = eval('document.'+FormNameTemp+';');
// 	// //クッキーをフォームへ
// 	// for (i in SaveCookieList){
// 	// 	eval('FormName.'+SaveCookieList[i]+'.value = getCookie("'+SaveCookieList[i]+'");');
// 	// }
// }

// 「リセット」ボタンを押した場合
function ResetAction(){
    document.getElementById("num").value = 1;
    document.getElementById("total_num").value = 0;
    document.getElementById("win_num").value = 0;
    document.getElementById("win_per").value = 0;
    
    document.getElementById("before_rate").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("start_rate").innerHTML = "";
    document.getElementById("diff_rate").innerHTML = "";
    document.getElementById("current_rate").innerHTML = "";
}

function BattleAdd(){

    // form要素を取得
    var battle_result_element = document.getElementById( "battle" ) ;
    // form要素内のラジオボタングループを取得
    var battle_result_list = battle_result_element.battle_result ;
    // 選択状態の値(value)を取得
    var battle_result = battle_result_list.value ;

    if ( battle_result === "" ) {
        // 未選択状態
        return 0;
    }
    // battle_resultには選択状態の値が代入されている場合 
    else {
        // バトル数カウント
        BattleCount();

        // 勝率計算
        BattleWinningPercentage(battle_result);

        // レート計算
        BattleRate();

        // クッキーに入力項目保存
        SaveAndSubmit();
    }
}

function BattleCount(){

    document.getElementById("num").value++;
}

function BattleWinningPercentage(battle_result){

     // ボタンをクリックして勝ち・負けの判定があれば、
     document.getElementById("total_num").value++;

     if(battle_result == "win"){
         // 「勝ち」の判定ならば、勝利数を増やす
         document.getElementById("win_num").value++;
     }
 
     // 勝率計算
     document.getElementById("win_per").value = document.getElementById("win_num").value / document.getElementById("total_num").value * 100;
     // 勝率を小数点以下2桁にする
     var win_per = Number(document.getElementById("win_per").value);
     document.getElementById("win_per").value = win_per.toFixed(2);
 
}

function BattleRate(){

    // 数値が0以上のバトル開始前レート取得
    if(document.getElementById("before_rate").value != "" && document.getElementById("before_rate").value >= 0){
        var start_rate = document.getElementById("before_rate").value;
    }

    // 数値が0以上の最新バトル後レート取得
    var input_rate = document.getElementById("rate").value;

    // 数値が0以上のものだけ取得
    if( (input_rate >= 0 && start_rate >= 0) && (input_rate != "" && start_rate != "") ){

        // バトル開始前のレート
        var start_rate_rank = rank_rate(start_rate);
        document.getElementById("start_rate").innerHTML = start_rate_rank;

        //　最新バトル後のレート
        var input_rate_rank = rank_rate(input_rate);
        document.getElementById("current_rate").innerHTML = input_rate_rank;

        // レート差
        document.getElementById("diff_rate").innerHTML = input_rate - start_rate;

        // レート差がプラスの時とマイナスの時で色とテキストを変更する
        if(document.getElementById("diff_rate").innerHTML > 0){
            document.getElementById('diff_rate').innerHTML = '+' + document.getElementById('diff_rate').innerHTML;
            var div = document.getElementById('diff_rate');
            div.style.color = '#f00';
        }else{
            var div = document.getElementById('diff_rate');
            div.style.color = '#00f';
        }
    }
}

rank_rate = function(rate){
    
    if(rate >= 5000){
        return rate + " S+";
    }
    else if(rate >= 4000 && rate < 5000){
        return rate + " S";
    }
    else if(rate >= 3000 && rate < 4000){
        return rate + " A";
    }
    else if(rate >= 2000 && rate < 3000){
        return rate + " B";
    }
    else if(rate >= 1000 && rate < 2000){
        return rate + " C";
    }
    else{
        return rate + " D";
    }

}

// setTimeout('LoadAction();',100);