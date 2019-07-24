function createTWID(){
    let op = document.getElementById("gender");
    let op2 = document.getElementById('form1');
    if (op.value == "---"){
        alert("請選擇性別");
    }
    if (op2.city.value == 0){
        alert("請選擇縣市");
    }
    if (op.value != "---" && op2.city.value != 0){
        createTWIDByAll();
    }    
}

function createTWIDByArea(){
    let op2 = document.getElementById('form1');
    if (op2.city.value == 0){
        alert("請選擇縣市");
    }else{
        createTWIDByAll();
    }   
}

function createTWIDByGender(){
    let op = document.getElementById("gender");
    if (op.value == "---"){
        alert("請選擇性別");
    }else{
        createTWIDByAll();
    }
}

function createTWIDByAll(gender,area){
    let op = document.getElementById("gender");
    let n3 = 0;  //身分證第三個數字，男性為一，女性為二
    let op2 = document.getElementById('form1');
    let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    let c1 = op2.city.value;
    let n12 ,n1 ,n2;
    let n7 = [];
    
    if(op.value == "男"){         //判斷是男是女，並給n3值
        n3 = 1;
    }else if(op.value == "女"){
        n3 = 2;
    }else if(op.value == "---"){  //如果沒有要給性別的值
        n3 = parseInt(Math.random()*2 + 1);  //random1~2的數字      
    }

    if (op2.city.value == 0){                   //當沒有點選縣市
        n12 = parseInt(Math.random()*26 + 10);  //random10~35的數字
        n1 = parseInt(n12 / 10);
        n2 = n12 % 10;
        c1 = letters.charAt(n12 - 10);
    }else{                               //有點選縣市的情況 
        n12 = letters.indexOf(c1) + 10;  //縣市的英文字母轉成二位數
        n1 = parseInt(n12 / 10);         //第一個數字決定了
        n2 = n12 % 10;                   //第二個數字決定了
    }
    for(let i = 0;i<7;i++){                     //7個數字做random
        let rand = parseInt(Math.random()*10);  //random0~9的數字
        n7.push(rand);
    }
    document.getElementById('result').innerHTML += "<hr>";
    for (let n11 = 0; n11 < 10; n11++) {  //最後一個數字從0~9找哪個符合公式
        //sum儲存公式計算結果
        let sum = n1*1 + n2*9 + n3*8 + n7[0]*7 + n7[1]*6 +
        n7[2]*5 + n7[3]*4 + n7[4]*3 + n7[5]*2 + n7[6]*1 + n11*1;

        if(sum % 10 == 0){
            document.getElementById('result').innerHTML += c1 + "" + n3 + "" + n7[0]
                + "" + n7[1] + "" + n7[2] + "" + n7[3] + "" + n7[4] + "" + n7[5] + "" + n7[6] + "" + n11;
        }
    }
}