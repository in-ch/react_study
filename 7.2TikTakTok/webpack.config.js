const path = require('path');  // 노드 경로관련 기능 
const webpack = require('webpack');

module.exports = {
    name: 'rsp-setting',
    mode: 'development', // 실 서비스: production
    devtool: 'eval',  // 빠르게 하겠다는 것.
    resolve: {
        extensions: ['.js','.jsx']
    },
    entry: {
        app: ['./client'],
    }, // 입력
    module: { // 공식 모드에서는 loader이다. 
        rules: [{   // jsx 파일은 babel loader로 적용시키겠다.
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR'], // 한국에서 점유율 5%이상 브라우져만 지원
                        },
                    }],
                    '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel'
                ]
            }
        }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
    output: {
        path: path.join(__dirname, './dist'), // 경로를 알아서 합쳐줌
        filename: 'app.js'
    } // 출력
};