# 1강 
## 1-8 Fragnent와 기타 팁들
> 1. 
>> <React.Fragment>를 사용하면 render() 안에 쓸 데 없는 <div>를 없앨 수 있다.
>> babel2를 설치하면 더 간단힌 <>로만으로도 쓸 수 있음.
> 2. 
>> render() 안에 return 에 () 들어가는 것은 논리연산자로 우선 순위를 위해 쓴 거고 사실 의미가 크지 않다. 
> 3. 
>> super, constructor 굳이 안 써도 됨.

<hr>

## 1-9 함수형 setState
> 1.
>> setState안에 화살표 함수를 이용해서 return를 넣을 수 있다.
>> 이렇게 하는 이유는 setState를 여러 번 쓸 때 변수가 제대로 반영안될 수 있음. 
>> 그래서 원칙적으로 예전 state값으로 새로운 state값을 만든 다면 return을 통해서 값을 바꿔줄 것
>> return 안에 this.state가 prevState로 바뀌면 됨.

<hr>

## 1-10 ref
> 1.
>> ref를 이용해서 input에 id나 class같은 것을 지정해 줄 수 있다.(?)
> 2.
>> setState를 할 때 render() 함수가 다시 실행됨. 그리고 render()는 첫 로딩 될 때 시작됨. 
>> 아무튼 그래서 render()를 너무 많이 하면 느려짐. 
> 3. 
>> ref에 있는 것도 밖에 뺄 수 있다. 

# 2강
## 2-1 React Hooks 사용하기
> 1.
>> Hooks가 별건 아니고 기존에 class 형식이였던 걸 함수 컨퍼넌트(const)로 바꾸고 거기서 setState나 ref 기능 같은 걸 추가해 준 것이다.
>> 여기서 바뀐 것은 setState가 선언은 useState 값을 바꾸는 건 setState로 바뀌고 ref는 useRef를 써야하고 this.state가 안 들어 간다. 

## 2-2 class와 hooks 비교하기
> 1.
>> 둘의 취향 차이인데 react는 hooks를 더 권장한다.
> 2.
>> hooks는 state가 바뀌면 함수 자체가 다시 실행되기 때문에 좀 더 느릴 수 있다. 
>> class는 랜더 함수만 다시 실행됨. 
> 3. 
>> react에서는 class를 못씀..  class 대신에 className을 써야함 
>> label의 for도 htmlFor를 써야함 
> 4.
>> hooks 버전에서도 prevState 쓸 수 있다. 

## 2-3 웹팩 설치하기
> 1. 
>> 웹팩을 왜 쓸까? 컨퍼넌트 관리를 위해
>> js파일을 하나의 js로 만드는 것 
> 2.
>> node는 js 실행기 그 이상도 이하도 아니다..
> 3. 
>> npm i react react-dom
>> npm i -D webpack webpack-cli 
>> 여기서 -D는 웹팩은 개발할 때 필요하고 배포 버전에서는 크게 필요가 없기 때문에 개발모드로 설치하는 것이다. 
> 4.
>> webpack.config.js와 client.jsx 파일 생성 
> 5.
>> 나중에는 create react app 하면 됨.

## 2-4 모듈 시스템과 웹팩 설정
> 1.
>> client.jsx에 render() 함수가 들어갈 수 있다. 그런데 여기서 컴포넌트들을 다 적으면 너무 길어 지니
>> Component 파일을 따로 빼놓을 수 있고 대신 새로 작성한 Component 파일들에는 
>> 앞에 
>> <code>const React = require('react');const { Component } = React;</code>
>> 뒤에
>> <code>module.exports = GuGuDan;</code>
>> 가 들어 가야 한다.
> 2.
>> 이제 webpack을 설정하고 터미널에 webpack이라고 명령어를 치면 entry에 있는 파일들을 합쳐 준다.

## 2-5 웹팩으로 빌드하기
> 1.
>> 원래 webpack이라고 명령어 치면 webpack이 빌드해줘야 하는데 명령어 등록이 안되어 있다.
>> 그래서 package.json 파일에 스크립트로써 등록을 해줘서 webpack이 실행할 수 있도록 한다. npm run dev
>> 혹은 npx webpack 이란 명령어를 쓸 수 있음.
> 2.
>> babel 안 깔았었다. npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader 라고 해서 babel 깔아 줘야함 
> 3.
>> babel 까지 깔았으면 이제 webpack.config.js에 module: {.... 생략 } 이라고 설정해 줘야함..

## 2-6 구구단 웹팩으로 빌드하기 
> 1. 
>> 이제 return 부분에 <></>로 묶어 줄 수 있다.
>> React.Fragment 쓸 필요가 없어 졌다. 

## 2-7 @babel.preset-env와 plugins 
> 1.
>> preset이란 plugin들의 모음이다. 
> 2. 
>> 그래서 preset에 설정을 적용하고 싶다면 presets를 배열로 바꾸면 된다. => webpack.config.js 확인

## 2-8 끝말잇기 Class 만들기 

## 2-9 webpack dev-server와 hot-loader 
> 1. 
>> npm i -D webpack-dev-server와 npm i -D react-hot-loader를 해준다. 
> 2. 
>> client.jsx 파일에서 hot이 새로 불러와서 컨포넌트를 관리(?)할 수 있다.
>> webpack.config.js에서도 옵션에 plugin에 추가해줘야한다. 
>> index.html에서 ./dist/app.js를 ./app.js로 해야 실시간 반영이 제대로 된다.
