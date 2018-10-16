// 选择排序

/**
 * 测试数组类
 * @param {Number} arr 
 */
function TestArray(numElements) {
    this.dataStore = [];
    this.numElements = numElements;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.selectionSort = selectionSort;
}

/**
 * 设置数据
 */
function setData(){
    for(var i = 0; i < this.numElements; ++i){
        this.dataStore[i] = Math.floor(Math.random()*(this.numElements +1));
    }
}

/**
 * 交换数据
 * @param {Array} arr 
 * @param {Number} index1 
 * @param {Number} index2 
 */
function swap(arr,index1,index2){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

/**
 * 清空数据
 */
function clear(){
    for(var i = 0 ; i < this.dataStore.length; ++i){
        this.dataStore[i] = 0;
    }
}

/**
 * 打印数组
 */
function toString() {
    return this.dataStore.join('-');
}

/**
 * 选择排序
 */
function selectionSort(){
    var min; // 存储最小值下标，相当于中转
    for(var outer = 0 ; outer <= this.dataStore.length-2 ; ++outer ){
        min = outer;
        for(var inner = outer+1 ; inner <= this.dataStore.length-1 ; inner++){
            if(this.dataStore[inner] < this.dataStore[min]){
                min = inner; // 交换下标
            }
        }
        swap(this.dataStore , outer , min);
    }
}


// 相关实例
var numElements = 9;
var mynums = new TestArray(numElements);
mynums.setData();
console.log('设置数据为: ' + mynums.toString());
mynums.selectionSort();
console.log('选择排序为: ' + mynums.toString());

// 相关博文解说请参考文章 http://reng99.cc/2018/10/05/algorithm-selection-sort/
// 在线的demo动态演示请参考 http://www.webhek.com/post/comparison-sort.html