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

var target = "(";
var target2 = ")";




function readInput() {


    firstElemString = document.getElementById('FirstElem').value;

    var pos = 0;
    while (pos<firstElemString.length) {
        var foundPos = firstElemString.indexOf(target, pos);
        var foundPos2 = firstElemString.indexOf(target2, pos);

        if (foundPos<foundPos2 && foundPos!=-1)
            count++;
        if (foundPos>foundPos2 || foundPos==-1)
            count--;

         // нашли на этой позиции
        if(foundPos<foundPos2&&foundPos!=-1)
        pos=foundPos+1;
        else
            pos =foundPos2+1;// продолжить поиск со следующей
        if (count == -1){
            obj = -10;
            break;

        }

    }
    if (count!=0 || obj !=0)
        alert("jopa");
        else
            alert("good");

    /*firstElemString = firstElemString;
     secondElemString = secondElemString.replace(/,+$/g, '')*/;

}



