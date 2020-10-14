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

//ページ読込時の処理
function LoadAction(){
	FormName = eval('document.'+FormNameTemp+';');
	//クッキーをフォームへ
	for (i in SaveCookieList){
        if(SaveCookieList[i] == "total_num" || SaveCookieList[i] == "win_num" || SaveCookieList[i] == "win_per" || SaveCookieList[i] == "rank_avg" || SaveCookieList[i] == "num"
		|| SaveCookieList[i] == "rank"){
            eval('FormName.'+SaveCookieList[i]+'.value = getCookie("'+SaveCookieList[i]+'");');
        }else{
            eval('document.getElementById("'+SaveCookieList[i]+'").innerHTML = getCookie("'+SaveCookieList[i]+'", ' + i + ');');
        }
	}
}

//クッキー取得処理
function getCookie(cName , color_rank=null) {
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
			console.log(unescape(Chop_C[1]));
			break;
		}
	}
	// スタイル変更関数を呼び出す
	if(color_rank == 6 || color_rank == 7 || color_rank == 8 || color_rank == 9 || color_rank == 10
	|| color_rank == 11 || color_rank == 12 || color_rank == 13 || color_rank == 14 || color_rank == 15){
		ColorRank();
	}
	return Ret_C;
}

setTimeout('LoadAction();',100);