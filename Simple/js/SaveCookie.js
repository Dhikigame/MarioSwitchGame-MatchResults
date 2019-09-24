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

        // console.log("Save 1. " + i + SaveCookieList[i]);
        if(SaveCookieList[i] == "before_rate" || SaveCookieList[i] == "num" || SaveCookieList[i] == "rate"
        || SaveCookieList[i] == "battle_total" || SaveCookieList[i] == "win_total" || SaveCookieList[i] == "win_total_per"){
            eval('setCookie("'+SaveCookieList[i]+'",FormName.'+SaveCookieList[i]+'.value);');
        }else{
            eval('setCookie("'+SaveCookieList[i]+'",document.getElementById("'+SaveCookieList[i]+'").innerHTML);');
        }
        // console.log("Save 2. " + i + SaveCookieList[i]);
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