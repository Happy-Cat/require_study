/**
 * Created by Administrator on 2017/2/22.
 */
requirejs.config({
    //默认情况下模块所在目录为js/lib
    baseUrl: 'js/lib',
    //当模块id前缀为app时，他便由js/app加载模块文件
    //这里设置的路径是相对与baseUrl的，不要包含.js
    paths: {
        config: '../config'
    }
});

// 开始逻辑.
requirejs(['jquery', 'canvas', 'config/sub'],
function   ($, canvas, sub) {

});