##1-8 
    >1. 
    >><React.Fragment>를 사용하면 render() 안에 쓸 데 없는 <div>를 없앨 수 있다.
    >>babel2를 설치하면 더 간단힌 <>로만으로도 쓸 수 있음.
    >2. 
    >>render() 안에 return 에 () 들어가는 것은 논리연산자로 우선 순위를 위해 쓴 거고 사실 의미가 크지 않다. 
    >3. 
    >>super, constructor 굳이 안 써도 됨.

##1-9
    >1.
    >>setState안에 화살표 함수를 이용해서 return를 넣을 수 있다.
    >>이렇게 하는 이유는 setState를 여러 번 쓸 때 변수가 제대로 반영안될 수 있음. 
    >>그래서 원칙적으로 예전 state값으로 새로운 state값을 만든 다면 return을 통해서 값을 바꿔줄 것
    >>return 안에 this.state가 prevState로 바뀌면 됨.