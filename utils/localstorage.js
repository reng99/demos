// 先占坑

// 存储localstorage

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
