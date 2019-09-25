//フォーム名
var FormNameTemp = 'battle';

//クッキーに保存するフォームエレメント名
//※他で使用しているクッキーとも合わせて２０個以内とする
var SaveCookieList = new Array ('before_rate','num','rate','start_rate','diff_rate','current_rate','battle_total','win_total','win_total_per');

//クッキー保存日数
var ReserveDay = 90;

var FormName;

//ページ読込時の処理
function LoadAction(){
	FormName = eval('document.'+FormNameTemp+';');
	//クッキーをフォームへ
	for (i in SaveCookieList){
        if(SaveCookieList[i] == "before_rate" || SaveCookieList[i] == "num" || SaveCookieList[i] == "rate"
        || SaveCookieList[i] == "battle_total" || SaveCookieList[i] == "win_total" || SaveCookieList[i] == "win_total_per"){
            eval('FormName.'+SaveCookieList[i]+'.value = getCookie("'+SaveCookieList[i]+'");');
        }else{
            eval('document.getElementById("'+SaveCookieList[i]+'").innerHTML = getCookie("'+SaveCookieList[i]+'", ' + i + ');');
        }
	}
}

//クッキー取得処理
function getCookie(cName , diff_rate_number=null) {
	var Cookies = document.cookie.replace(/ /g,'');
	var Cookie = Cookies.split(';');
	var Ret_C = '';
	for (i in Cookie){
		if (Cookie[i].indexOf('=') < 0){
			Cookie[i]+='=';
		}
		Chop_C = Cookie[i].split('=');
		if (Chop_C[0] == escape(cName)){
			Ret_C = unescape(Chop_C[1]);
			break;
		}
	}
	// レート差のvalueだったら、スタイル変更関数を呼び出す
	if(diff_rate_number == 4){
		DifferentRate(Ret_C);
	}
	return Ret_C;
}

setTimeout('LoadAction();',100);