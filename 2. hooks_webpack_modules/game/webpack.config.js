const path = require('path');  // 노드 경로관련 기능 

module.exports = {
    name: 'GuGuDan-setting',
    mode: 'development', // 실 서비스: production
    devtool: 'eval',  // 빠르게 하겠다는 것.
    resolve: {
        extensions: ['.js','.jsx']
    },
    entry: {
        app: ['./client'],
    }, // 입력
    module: {
        rules: [{   // jsx 파일은 babel loader로 적용시키겠다.
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env','@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties']
            },
        }],
    },
    output: {
        path: path.join(__dirname, 'dist'), // 경로를 알아서 합쳐줌
        filename: 'app.js'
    } // 출력
};