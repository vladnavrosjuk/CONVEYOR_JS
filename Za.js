var o = 0;
var massumma = [];
var massdwig = [];

var result = "Ответ:";
var count = 0;

var ras = 5;
var x = "";
var y = "";
var aello = 0 ;
var number = [];
var timber = [];
var firstElemString;
var secondElemString;
var timeString;
var schetgeneratetostring = 0;
var masss= [];
var massx= [];
var firstElemArr = [];
var secondElemArr = [];
var timeInt;
var obj= 0;
var eror=0;
var pos =0;
var target = "(";
var target2 = ")";




function readInput() {


    firstElemString = document.getElementById('FirstElem').value;


    while(pos<firstElemString.length){
        if(firstElemString.charAt(pos)=="(")
            count++;
        if(firstElemString.charAt(pos)==")")
            count--;
        if(count<0){
            eror = 1;
            break;

        }

        pos++;
    }
    if(count == 0 && eror == 0)
        obj =1;
    else {
        alert("Ошибка в использовании скобок");
        count = 0;
        eror = 0;
        pos = 0;
        throw "stop";
    };

    var regexp = /[^\(,\),\~,A-Z,\|,\&,\-,\!]/;
    if(firstElemString.search(regexp)!=-1)
    {
        alert("Использованы неподдерживаемые символы");
        count = 0;
        eror = 0;
        pos = 0;
        throw "stop";
    }
    var regexp2 = /\w{2,}|(\~|\-|\||\&|\!)(\~|\-|\||\&)|(!)(!)|(\()((\s*\w*)|(\s*(\~|\!|\||\&|\-)\s*))(\))|(\))\s*(\()|(\((\~|\||\&|\-)\w)|((\~|\!|\||\&|\-)\w\()|((\~|\||\&|\-)+\w+(\~|\!|\||\&|\-)+)|((^(\~|\||\&|\-))\()|(\)(\~|\!|\||\&|\-)$)|(\w\!)|(\)\!)|(^(\~|\-|\||\&))|(^\((\~|\-|\||\&))/
    if(firstElemString.search(regexp2)!=-1)
    {
        alert("Ошибка логики");
        count = 0;
        eror = 0;
        pos = 0;
        throw "stop";
    }
    if (firstElemString.length==0)
        alert("Введите формулу");
    else {
        count = 0;
        eror = 0;
        pos = 0;
        alert("Ошибок не найдено");
    }

    /*firstElemString = firstElemString;
     secondElemString = secondElemString.replace(/,+$/g, '')*/;

}



