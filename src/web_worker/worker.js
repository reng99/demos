// Web Worker 中的代码

// 监听来自主线程的消息
self.addEventListener('message', (event) => {
  // 接收主线程的消息，执行相应的操作
  if (event.data === 'generateColor') {
      // 生成随机颜色
      const randomColor = getRandomColor();
      // 将颜色发送回主线程
      self.postMessage(randomColor);
  }
});

// 生成随机颜色的辅助函数
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }

  // let i = 0;
  // while(i < 10000) {
  //   i++;
  //   console.log(i, 'i')
  // }

  return color;
  
}
