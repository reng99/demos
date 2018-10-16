// 冒泡排序

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
    this.bubbleSort = bubbleSort;
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
 * 冒泡排序
 */
function bubbleSort(){
    var numElements = this.dataStore.length;
    for(var outer = numElements-1 ; outer >= 1; outer--){
        for(var inner = 0; inner <= outer-1 ; inner++){
            if(this.dataStore[inner] > this.dataStore[inner+1]){
                swap(this.dataStore , inner , inner+1);
            }
        }
    }
}



// 实例
var numElements = 9;
var mynums = new TestArray(numElements);
mynums.setData();
console.log('设置数据为: ' + mynums.toString());
mynums.bubbleSort();
console.log('冒泡排序为: ' + mynums.toString());

// 相关博文解说请参考文章 http://reng99.cc/2018/10/03/algorithm-bubble-sort/
// 在线的demo动态演示请参考 http://www.webhek.com/post/comparison-sort.html