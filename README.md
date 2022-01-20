## 인피니티 스크롤 예제
스크롤 이벤트가 아닌 IntersectionObserver 이용한 구현

-------------
### IntersectionObserver 란?
Intersection Observer API는 타겟 요소와 상위 요소 또는 최상위 document 의 viewport 사이의 intersection 내의 변화를 비동기적으로 관찰하는 방법입니다. 라고 mdn에 설명되어 있으나 쉽게 말하면 화면에 타겟이 보여지는지를 관찰하는 비동기적 api 이다.

### 스크롤 이벤트 대신 IntersectionObserver 사용하는 이유
스크롤 이벤트로 할경우 굉장히 많은 수의 이벤트가 발생하여 Debounce 등을 따로 구현해주어 제어를 해줘야 하는 반면 IntersectionObserver는 보여질경우에 이벤트가 발생하기 때문에 스크롤 이벤트의 경우보다 적은 메모리 소모가 발생하여 이점이 생긴다.

### 구현방법
구현방법은 간단하다


    1. option 을 선언 초기화를 해준다.
    2. callback 함수를 선언 해준다.
    3. IntersectionObserver를 위의 option과 callback 함수를 이용하여 생성해준다.
    4. IntersectionObserver로 만들어준 객체의 observe 함수를 사용한다 인자는 타겟을 넣어준다.
    5. useEffect 를 사용하여 이벤트를 붙여준다.