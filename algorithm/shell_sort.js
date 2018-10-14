// 希尔排序

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
    this.shellSort = shellSort;
    this.gaps = [5,3,1]; // 元素间隔的距离
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
    for(var i = 0 ; i < this.dataStore.lenght; ++i){
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
 * 希尔排序
 */
function shellSort(){
    for (var g = 0; g < this.gaps.length; ++g){
        console.log(this.gaps[g]);
    }
}



// 实例
var numElements = 9;
var mynums = new TestArray(numElements);
mynums.setData();
console.log('设置数据为: ' + mynums.toString());
mynums.shellSort();
// console.log('设置数据为: ' + mynums.toString());