// 创建cookie
/**
 * 
 * @param {String} name 键
 * @param {String} value 值
 * @param {Int} iday 时间，天数
 */
function setcookie(name,value,iday){
    var odate = new Date();
    odate.setDate(odate.getDate() + iday);
    document.cookie = name + '=' + value + ';expires=' + odate;
}

// 获取cookie
/**
 * 
 * @param {String} name 键
 */
function setcookie(name){
    var cookies = document.cookie;
    var arr1 = cookies.split(';');
    for(i = 0; i < arr1.length ; i++){
        var arr2 = arr1[i].split('=');
        if(name == arr2[0]){
            return arr2[1];
        }
    }
    return false;
}

// 删除cookie
/**
 * 
 * @param {String} name 键
 */
function removecookie(name){
    setcookie(name,"","-1");
}