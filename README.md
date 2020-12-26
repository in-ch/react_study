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

<hr><hr>

# 2강
## 2-1 React Hooks 사용하기
> 1.
>> Hooks가 별건 아니고 기존에 class 형식이였던 걸 함수 컨퍼넌트(const)로 바꾸고 거기서 setState나 ref 기능 같은 걸 추가해 준 것이다.
>> 여기서 바뀐 것은 setState가 선언은 useState 값을 바꾸는 건 setState로 바뀌고 ref는 useRef를 써야하고 this.state가 안 들어 간다. 

<hr>

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

<hr>

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

<hr>

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

<hr>

## 2-5 웹팩으로 빌드하기
> 1.
>> 원래 webpack이라고 명령어 치면 webpack이 빌드해줘야 하는데 명령어 등록이 안되어 있다.
>> 그래서 package.json 파일에 스크립트로써 등록을 해줘서 webpack이 실행할 수 있도록 한다. npm run dev
>> 혹은 npx webpack 이란 명령어를 쓸 수 있음.
> 2.
>> babel 안 깔았었다. npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader 라고 해서 babel 깔아 줘야함 
> 3.
>> babel 까지 깔았으면 이제 webpack.config.js에 module: {.... 생략 } 이라고 설정해 줘야함..

<hr>

## 2-6 구구단 웹팩으로 빌드하기 
> 1. 
>> 이제 return 부분에 <></>로 묶어 줄 수 있다.
>> React.Fragment 쓸 필요가 없어 졌다. 

<hr>

## 2-7 @babel.preset-env와 plugins 
> 1.
>> preset이란 plugin들의 모음이다. 
> 2. 
>> 그래서 preset에 설정을 적용하고 싶다면 presets를 배열로 바꾸면 된다. => webpack.config.js 확인

<hr>

## 2-8 끝말잇기 Class 만들기 

<hr>

## 2-9 webpack dev-server와 hot-loader 
> 1. 
>> npm i -D webpack-dev-server와 npm i -D react-hot-loader를 해준다. 
> 2. 
>> client.jsx 파일에서 hot이 새로 불러와서 컨포넌트를 관리(?)할 수 있다.
>> webpack.config.js에서도 옵션에 plugin에 추가해줘야한다. 
>> index.html에서 ./dist/app.js를 ./app.js로 해야 실시간 반영이 제대로 된다.

<hr><hr>

# 3강
## 3-1 import와 require 
> 1. 
>> require는 모듈화한 것을 (우리가 만든 것도, 외부에서 만든 것도) 가져올 수 있다.
>> 보통 우리가 쓸 때는 import가 많이 쓸 일은 없긴 한데 보통 외부에서 만든 코드는 import도 지원하고 있다. 
>> <code>import React from 'react';</code>
>> <code>import React, { Component } from 'react'</code>;
>> 여기서 {} 안에 쌓여 있는 것은 구조 분해 문법인데 
>> 그냥 import는 <code>export default NumberBaseball</code>과 같고, {}는 
>> <code>export const hello = 'hello'</code>와 같다. 
> 2.
>> 이렇게 쓸 수 있는 이유는 babel이 import를 require로 바꿔 주기 때문이다. 

## 3-3 리액트 반복문(key)
> 1. map를 쓰면 반복문을 할 수 있다. 너무 코드가 난잡해 진다. 따라서 쓰는 게 props
> 2. map할 때 key는 필수적이다.
> 3. key에는 i를 쓰면 안된다.. 왜냐면 key는 최적화를 위한 건데, i를 쓰면 최적화에 문제가 될 수 있다.

## 3-4 컴포넌트 분리와 props

## 3-5 주석과 메서드 바인딩
> 1. 리액트에서는 주석처리를 할 때 {/* */}를 해야한다. (jsx에서..)
> 2. 화살표함수를 안 써도 된다.(function functionname = () => {} 요거 다만 그럴 때는 this를 쓸 수 없다.

## 3-6 숫자야구 만들기
> 1. 
>> 리액트에서는 배열에 값을 넣을 때 push를 쓸 수 없다. 
>> 그래서 배열을 넣을려면 새로운 배열을 만들어서 넣어야 한다.
>> <code>const array2 = [...array, 2]</code>
>> 그리고 이때 꼭 prevState 써야 한다.

## 3-9 React Devtools 
> 1.
>> props를 많이 쓰다보면 런더링이 자주 일어나 오류가 발생할 수 있다. 이것을 찾을 수 있는게 devtools
> 2.
>> 크롬 확장프로그램에서 React devtools 설치하면 된다. 
>> React Elements 들어가고 거기서 컴포넌트 확인해 보면 부모로 받은 props 까지 확인해 볼 수 있다. 

## 3-10 shouldComponentUpdate 
> 1. 
>> 랜더가 많이 일어나면 초록색, 파란색, 빨간색으로 된다. 빨간색이 가장 문제가 심한 것이다.
>> 한 번 켜 놓고 누르다 보면 랜더링 되는 것이 테두리의 색상이 보인다. 
>> 이것을 해결하기 위해서는... 
>> 빤짝이 킬려면 Elements > 설정(톱니바퀴) > Highlight Updates 라고 있다. 
> 2. 
>> state를 바꾼 적이 없는데, 랜더링이 될까?  > 랜더링이 된다...
>> 그럴 때는 sholudComponentUpdate 메소드를 통해서 언제 랜더링될 지 알려줘야 한다.

## 3-11 PureCompoent
> 1. 
>> 만약 위의 방법이 어렵다고 한다면 다음과 같이 하면 된다. 
>> <code>class Test extends PureComponent</code>
>> 이러면 should... 이런 거 안해도 자동으로 랜더링 안된다. 
>> 대신에 참조가 많이 들어가게 되면 좀 버벅거리고 어려워함.
>> array에서 push같은 거 쓰면 안됨.. array: [...this.state.array, 1]; 이거 써야함..
> 2. 
>> Hooks에서는 memo라는 게 있다. 
>> 근데 해 보니깐 안된다.. 찾아보니 useMemo라는 게 있는 것 같긴 한데...

## 3-13 props와 state 연결하기
> 1. 
>> 부모에게서 받은 props는 자식 컴포넌트에서 절대 바꾸면 안된다.
>> 그럴 때는 props를 const에 넣어줘야 한다. 
>> 자식에서 바꾸면 부모에게까지 영향을 미치기 때문에..

# 4강 
## 4-1 React 조건문
> 1.
>> jsx에서는 if나 for 같은 거 못쓴다. 그래서 조건부 연산자를 만들어 줘야함
> 2.
>> reduce() 메소드는 배열의 합계를 구하는 메소드인데, 빈 배열에서는 오류를 나타내니 조건부 연산자를 통해서 배열이 생길 때만 실행되도록 하겠다.

## 4-2 setTimeout넣어 반응속도 체크
> 1.
>> setTimeout과 clearTimeout 

## 4-3 성능 체크
> 1. 음 reset() 구현했는데, 성능은 괜히 state가 변하는 게 없는지 확인해 보는 거 

## 4-4 Hooks로 전환 
> 1.
>>  useState와 useRef는 무슨 차이인가?
>> state는 값이 바뀌면 렌더링이 다시 실행되고 ref는 값이 바뀌여도 랜더링이 다시 되지 않는다.

## 4-5 return 내부에 for와 if 쓰기
> 1. 
>> 굉장히 길다... 걍 쓰지 말자..

## 5-1 리액트 라이프사이클 소개
> 1.
>> 클래스의 경우 -> construector -> render -> ref -> compoentDidMount -> setState/props -> shouldComponentUpdate(true) -> render -> componentDidUpdate -> compoentWillUnmount -> 소멸

## 5-2 setInterval과 라이프사이클 연동하기
> 1.
>> 처음 랜더링되면 componentDidMount()에 setInterval()같은 거 넣으면 되는데, 다만 컴퍼넌트가 사라졌을 때 setInterval()을 없애줄 게 필요하다. 
> 2.
>> setInterval 너무 많이 하면 메모리 너무 많이 먹어서 터지는데, 이것을 메모리 누수라고 한다.
> 3.
>> 비동기 함수가 바깥에 있는 함수를 참조하면 클로져 현상이 발생함.

## 5-4 고차 함수
> 1. 
>> 메소드 넣을 때 매개변수를 render부분에 넣지 말고 (e)부분을 따로 빼서 
>> <code>onClickBtn = (choice) => (e) => { ..... } </code>
>> 이렇게 만들 수 있다. 

## 5-5 Hooks로 전환하기
> 1.
>> 훅스는 라이프사이클이 없지만 흉내를 낼 수 있다.
>> 따라서 useEffect()라는 것을 써야함
>> <code>
    useEffect(() => {
        // componentDidMount, componentDidUpdate 역할 (1대1 대응은 아님, 둘의 기능을 합쳐 놓은 것과 같음.)
        interval.current = setInterval(() => {
            changeHand();
        }, 100)
        return () => { // componentWillUnmount 역할
            clearInterval(interval.current);
        }
    },[imgCoord]);  // 배열에 바뀌는 변수 적어줘야함, 안 넣으면 처음만 실행되고 실행이 되지 않음.
</code>

## 5-7 클래스와 Hooks 라이프사이클 비교 
> 1.
>> useEffect말고 useLayoutEffect라고 있다. 
>> 전자는 화면이 완전히 바뀌고 난 뒤에 실행하고, 후자는 바뀌기 전에 실행됨.
>> 실행하는 법은 똑같음.

<hr/>

# 6강

## 6-1 로또 추첨기 컴포넌트
> 1.
>> 보통 반복문을 기점으로 새로운 컴포넌트를 선언해(만들어) 준다
>> {winBalls.map((v)=> <Ball key={v} number={v} />)} 
>> 이거 익숙해 지자...

## 6-2 setTimeout 여러 번 사용하기
> 1.  
>> <code>
>> {bonus && <Ball number={bonus}/>}
>> {redo &&<button onClick={onClickRedo}>한 번 더</button>}
>> </code>
>> 이거 쓰면 조건문 없이 간단하게 show 또는 unShow 할 수 있다. 

## 6-4 useEffect로 업데이트하기
> 1. 
>> 다시 한 번 강조하지만 useEffect에 배열이 없으면 componentDidMount이고 
>> 배열이 있으면 componentUnDidMount이다. 

## 6-5 useMemo와 useCallback 사용하기
> 1. 
>> 보면 getWinNumbers가 계속 실행되고 있다. 
>> class에서는 안 그러는데 , Hooks는 코드 전체가 다시 실행되기 때문에 그렇다...
>> useMemo를 사용하면 캐싱이 가능하다. => 값을 기억한다. 함수()가 아니라.  useCallBack은 함수 자체를 기억하는 것임.
>> useMemo는 그 함수의 리턴값을 기억하는 것이고 useCallback은 그 함수 자체를 기억하는 것이다.
>> useMemo 좋은 게 메모리 과부화를 막아 줄 수 있다... 
> 2.
>> useCallback 같은 경우 자식 컴포넌트에 함수를 넣어 줄 떄는 그 함수에 useCallBack을 해 줘야함 
>> 왜나하면 안해주면 매번 새로 랜더링을 해 버린다. 

## 6-6 Hooks에 대한 자잘한 팁들
> 1.
>> Hook는 매우 중요하다. 
>> 만약에 useState 사이에 if 문을 넣으면 문제가 생길 수 있다.
>> 이해하기 쉽게 하면 5번 useState()에 조건문을 넣게 되면 랜더링 될 때 마다 1,2,3,4,5,6이 되다가 1,2,3,4,5가 되니깐 안된다.
> 2.
>> useEffect안에 useState 쓰면 안된다.
> 3.
>> useEffect 여러번 써도 된다.
> 4.
>> ajax는 보통 useEffect()에서 일어나게 된다. 

<hr/>

# 7강

## 7-1 틱택토와 useReducer 소개
> 1.
>> useReducer는 리덕스랑 비슷한 효과를 낼 수 있다. 
>> 규모가 큰 프로젝트는 리덕스를 써야하고 소규모 앱에서는 useReducer를 어느 정도 커버할 수 있다. 
>> 상위 컴포넌트의 데이터를 관리할 수 있게 하는 거임. (하위 컴포넌트에서 상위 컴포넌트에 접근할 수 있도록..)

## 7-2 reducer, action, dispatch의 관계
> 1. 
>> 컴포넌트에 넣는 이벤트는 무조건 useCallback 해줘야 함.
> 2. 
>> dispatch는 action 객체를 만드는 것이고 action을 dispatch 할 때 마다 reducer가 실행됨.
> 3.
>> state는 아무도 손될 수 없는 영역이고, state를 수정하고 싶으면 우리는 action을 만들고 dispatch 시켜야 바꿀 수 있음.
>> action을 어떻게 처리할 건지는 reducer에서 관리한다. 

## 7-3 action 만들어 dispatch 하기
> 1. 
>> ... 은 얕은 복사이다. 예를 들어 const a = {b:1,c:2} 하고 const b = a; 하면 a === b가 되는데, const c = { ...a }; 하면 c === a 는 false 이다.
> 2. 
>> dispatch 너무 어렵다. 나중에 더 좋은 거 나옴... 컨텍스트 api 같은 거 ...

## 7-4 틱택토 구현하기
> 1. 
>> 승자 판별하고, 한 번 누른 칸은 못 누르게 해 줄 것이다.
> 2.
>> ㄷㅏ시 정리 하자면, 원래는 useState를 써서 변수 설정했는데, 이제 reducer를 활용해서 변수를 지정하고
>> dispatch 써서 실행 함수를 정의한다. 그리고 변수들 바꿀 때는 ...같은 거 써서 불변성을 유지해 줘야 한다.

## 7-4 테이블 최적화 하기
> 1.
>> td를 클릭했는데, table 전체가 바뀌고 있음.
>> 최적화를 해야 한다.
> 2.
>> useEffect와 useRef를 활용해서 왜 죄다 랜더링 되는 지 확인해 볼 것이다.
> 3. 
>> memo로 감싸서 해결함

<hr/>

# 8강

## 8-1 Context API 소개와 지뢰찾기
> 1.
>> 부모와 자식 관계가 다층 관계일 때, reducer보다 context API 쓰면 더 편함.

## 8-2 createContext와 provider
> 1.
>> provider로 감싸야 context가 접근 가능해진다.

## 8-3 useContext 사용해서 지뢰찾기 렌더링
> 1.
>> 후.. 에러 고치는 데 힘 다 씀.. 일단 컴포넌트에 값 props받을 때 (값) 말고 ({값})로 해서 받아야 하고 Appcontainer 안에 {} 만 들어가니깐 {{}}같은 거 절대 넣지 말자.
