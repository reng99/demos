// 先占坑

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
