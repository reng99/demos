// 插入排序

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
    this.insertionSort = insertionSort;
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
 * 冒泡排序
 */
function insertionSort(){
    var temp , inner; // temp存中转元素值，inner存内嵌元素的下标
    for(var outer = 1 ; outer <= this.dataStore.length-1 ; outer++){
        temp = this.dataStore[outer];
        inner = outer;
        while(inner > 0 && this.dataStore[inner-1] >= temp){
            this.dataStore[inner] = this.dataStore[inner-1];
            inner--;
        }
        this.dataStore[inner] = temp;
    }
}


// 实例验证
var numElements = 9;
var mynums = new TestArray(numElements);
mynums.setData();
console.log('设置数据为: ' + mynums.toString());
mynums.insertionSort();
console.log('插入排序为: ' + mynums.toString());

// 相关博文解说请参考文章 http://reng99.cc/2018/10/05/algorithm-insertion-sort/
// 在线的demo动态演示请参考 http://www.webhek.com/post/comparison-sort.html