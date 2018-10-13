// 缓存版本
const LOCAL_VERSION = '1.0.0';
(function(){
    let localVersion = window.localStorage.getItem('LOCAL_VERSION');
    if(localVersion){
        if(localVersion!==LOCAL_VERSION){
            window.localStorage.clear();
        }
    }else{
        window.localStorage.setItem('LOCAL_VERSION',LOCAL_VERSION);
    }
})();

// 生成过期时间
function expiry(val){
    if(!val){
        return null;
    }
    let interval = parseInt(val);
    let unit = val.replace(interval,'');
    if('d' === unit){
        interval = interval * 24 * 60 * 60 * 1000;
    }
    if('h' === unit){
        interval = interval * 60 * 60 * 1000;
    }
    if('m' === unit){
        interval = interval * 60 * 1000;
    }
    if('s' ===unit){
        interval = interval * 1000;
    }
    return Date.now() + interval;
}

// 存储localstorage
export const setStore = ({name,key,content,options}) => {
    if(!name) return;
    let obj = {
        value: {},
        expiry: options ? expiry(options.expiry) : null,
        clean: options ? options.clean : null,
    };
    if(key) {
        let tmp_obj = _getStore(name) || obj;
        if(tmp_obj && tmp_obj.value) {
            tmp_obj.value[key] = content;
            obj.value = tmp_obj.value;
        }
    } else {
        obj.value = content;
    }
    window.localStorage.setItem(name,JSON.stringify(obj));
}

/**
 * 获取localstorage
 * @param {String} name 存储的键值对的键
 */
function _getStore(name){
    let obj = null;
    try {
        obj = window.localStorage.getItem(name) ? JSON.parse(window.localStorage.getItem(name)) : null;
    } catch (e){
        window.localStorage.removeItem(name);
    }
    return obj;
}

// 移除localstorage

export const removeStore = ({name}) => {
    if(!name) return;
    window.localStorage.removeItem(name);
}