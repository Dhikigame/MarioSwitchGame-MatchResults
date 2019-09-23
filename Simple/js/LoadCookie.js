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
        console.log("Load 1." + SaveCookieList[i]);
        if(SaveCookieList[i] == "before_rate" || SaveCookieList[i] == "num" || SaveCookieList[i] == "rate"
        || SaveCookieList[i] == "battle_total" || SaveCookieList[i] == "win_total" || SaveCookieList[i] == "win_total_per"){
            eval('FormName.'+SaveCookieList[i]+'.value = getCookie("'+SaveCookieList[i]+'");');
        }else{
            eval('document.getElementById("'+SaveCookieList[i]+'").innerHTML = getCookie("'+SaveCookieList[i]+'");');
        }
        console.log("Load 2." + SaveCookieList[i]);
	}
}

// //フォーム送信時の処理
// function SaveAndSubmit(){
// 	//フォームをクッキーへ
// 	for (i in SaveCookieList){
//         eval('setCookie("'+SaveCookieList[i]+'",FormName.'+SaveCookieList[i]+'.value);');
//         console.log("Save 2." + SaveCookieList[i]);
// 	}
// 	//フォーム送信
// 	FormName.submit();
// }

//クッキー取得処理
function getCookie(cName) {
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
	return Ret_C;
}
// //クッキー登録処理
// function setCookie(pName,pValue) {
// 	if(pValue != null){
// 		var setDay = new Date();
// 		setDay.setTime(setDay.getTime() + (ReserveDay * 86400000));
// 		expDay = setDay.toGMTString().replace(/UTC/,'GMT');
// 		document.cookie = escape(pName) + '=' + escape(pValue) + ';expires='+expDay;
// 		return true;
// 	}
// 	return false;
// }
setTimeout('LoadAction();',100);