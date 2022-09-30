/*
    定义一个函数，执行简单动画
    参数：
      obj:要执行动画的对象
      target:执行动画的目标位置
      attr:要执行动画的样式  可以是偏移量left  top  ，大小 width height
      speed:动画执行的速度
      callback:回调函数，这个函数会在动画执行完后执行
  */
function move(obj, target, attr, speed, callback) {
    //关闭上一个定时器
    clearInterval(obj.timer);

    //获取元素的当前位置
    var current = parseInt(getComputedStyle(obj, null)[attr]);

    //判断speed是正值还是负值
    //0向800移动，speed为正值
    //800向0移动，speed为负值

    if (current > target) {
        speed = -speed;
    }

    //开启定时器执行动画
    obj.timer = setInterval(function () {

        //获取box原来的left值  parseInt()将含有px的字符串转换为Number
        var oldValue = parseInt(getComputedStyle(obj, null)[attr]);

        //在旧值的基础上增加
        var newValue = oldValue + speed;

        //解决增加值不为800可除尽的数的问题
        //向左移动时，需要判断newValue是否小于target
        //向右移动时，需要判断newValue是否大于target
        if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
            newValue = target;
        }

        //将新值赋值给box
        obj.style[attr] = newValue + "px";

        //当元素移动到800px的时候停止动画
        if (newValue == target) {

            //达到目标，关闭定时器
            clearInterval(obj.timer);

            //动画执行完毕，执行回调函数
            callback && callback();//&&判断是否传入了回调函数，如果有就执行（与  第一个为真返回第二个，第一个为假，直接中断）
        }
    }, 30)
}