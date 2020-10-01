const path = require('path');  // 노드 경로관련 기능 

module.exports = {
    name: 'GuGuDan-setting',
    mode: 'development', // 실 서비스: production
    devtool: 'eval',  // 빠르게 하겠다는 것.
    resolve: {
        extensions: ['./js','./jsx']
    },
    entry: {
        app: ['./client'],
    }, // 입력
    output: {
        path: path.join(__dirname, 'dist'), // 경로를 알아서 합쳐줌
        filename: 'app.js'
    } // 출력
};