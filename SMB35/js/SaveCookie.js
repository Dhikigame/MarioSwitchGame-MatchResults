//フォーム名
var FormNameTemp = 'battle';

//クッキーに保存するフォームエレメント名
//※他で使用しているクッキーとも合わせて２０個以内とする
var SaveCookieList = new Array ('total_num','num','rank','win_num','win_per',
								'rank_avg','one_rank_before','two_rank_before','three_rank_before','four_rank_before',
								'five_rank_before','six_rank_before','seven_rank_before','eight_rank_before','nine_rank_before',
								'ten_rank_before');


//クッキー保存日数
var ReserveDay = 90;

var FormName;

//フォーム送信時の処理
function SaveAndSubmit(){
    FormName = eval('document.'+FormNameTemp+';');
	//フォームをクッキーへ
	for (i in SaveCookieList){
		if(SaveCookieList[i] == "total_num" || SaveCookieList[i] == "win_num" || SaveCookieList[i] == "win_per" || SaveCookieList[i] == "rank_avg" || SaveCookieList[i] == "num"
		|| SaveCookieList[i] == "rank"){
            eval('setCookie("'+SaveCookieList[i]+'",FormName.'+SaveCookieList[i]+'.value);');
        }else{
            eval('setCookie("'+SaveCookieList[i]+'",document.getElementById("'+SaveCookieList[i]+'").innerHTML);');
        }
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