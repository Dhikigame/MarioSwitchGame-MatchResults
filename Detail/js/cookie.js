//フォーム名
var FormNameTemp = 'battle';

//クッキーに保存するフォームエレメント名
//※他で使用しているクッキーとも合わせて２０個以内とする
var SaveCookieList = new Array ('skin','result','rate','tags1','tags2','course_name','course_id');

//クッキー保存日数
var ReserveDay = 90;

var FormName;


//ページ読込時の処理
function LoadAction(){
	FormName = eval('document.'+FormNameTemp+';');
	// //クッキーをフォームへ
	// for (i in SaveCookieList){
	// 	eval('FormName.'+SaveCookieList[i]+'.value = getCookie("'+SaveCookieList[i]+'");');
	// }
}

//フォーム送信時の処理
function SaveAndSubmit(){
    //フォームをクッキーへ
    for(var i = 0; i <= 199; i++){
        for (j in SaveCookieList){
            if(SaveCookieList[j] == 'skin'){
                k = i * 7 + 1;
                eval('setCookie("'+ SaveCookieList[j] +'",document.battle.elements[' + k + '].options[document.battle.elements[' + k + '].selectedIndex].value);');
            }
            if(SaveCookieList[j] == 'result'){
                k = i * 7 + 2;
                eval('setCookie("'+ SaveCookieList[j] +'",document.battle.elements[' + k + '].options[document.battle.elements[' + k + '].selectedIndex].value);');
            }
            if(SaveCookieList[j] == 'rate'){
                k = i * 7 + 3;
                eval('setCookie("'+ SaveCookieList[j] +'",document.battle.elements[' + k + '].value);');
            }
            if(SaveCookieList[j] == 'tags1'){
                k = i * 7 + 4;
                eval('setCookie("'+ SaveCookieList[j] +'",document.battle.elements[' + k + '].options[document.battle.elements[' + k + '].selectedIndex].value);');
            }
            if(SaveCookieList[j] == 'tags2'){
                k = i * 7 + 5;
                eval('setCookie("'+ SaveCookieList[j] +'",document.battle.elements[' + k + '].options[document.battle.elements[' + k + '].selectedIndex].value);');
            }
            if(SaveCookieList[j] == 'course_name'){
                k = i * 7 + 6;
                eval('setCookie("'+ SaveCookieList[j] +'",document.battle.elements[' + k + '].value);');
            }
            if(SaveCookieList[j] == 'course_id'){
                k = i * 7 + 7;
                eval('setCookie("'+ SaveCookieList[j] +'",document.battle.elements[' + k + '].value);');
            }
        }
    }
	//フォーム送信
	FormName.submit();
}

//クッキー登録処理
function setCookie(pName,pValue) {

    if(pValue != 'noskin' && pValue != 'noresult' && pValue != '' && pValue != 'notag'){
        console.log(pName);
        console.log(pValue);
		var setDay = new Date();
		setDay.setTime(setDay.getTime() + (ReserveDay * 86400000));
		expDay = setDay.toGMTString().replace(/UTC/,'GMT');
		document.cookie = escape(pName) + '=' + escape(pValue) + ';expires='+expDay;
		return true;
	}

	return false;
}

setTimeout('LoadAction();',100);