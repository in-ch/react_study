### 1강 
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

### 2rkd
## 2-1 React Hooks 사용하기
> 1.
>> Hooks가 별건 아니고 기존에 class 형식이였던 걸 함수 컨퍼넌트(const)로 바꾸고 거기서 setState나 ref 기능 같은 걸 추가해 준 것이다.
>> 여기서 바뀐 것은 setState가 선언은 useState 값을 바꾸는 건 setState로 바뀌고 ref는 useRef를 써야하고 this.state가 안 들어 간다. 