# 리덕스 상태 관리

![blog](https://miro.medium.com/max/700/0*Z18iLsM7Bf1xoNth.)

- action 포멧
```json
{
    type: "액션의 종류를 한번에 식별할 수 있는 문자열 혹은 심볼",
    payload: "액션의 실행에 필요한 임의의 데이터",
}
```

- react-redux 자료 https://react-redux.js.org/introduction/quick-start

- 불변관리 함수 기초 공부 자료
  https://blog.naver.com/getinthere

- yarn create react-app redux-app
- VSCODE 확장 프로그램 ESLint, Prettier 설치
- 환경 설정에서 format on save 설정
- .prettierrc 파일 생성

```json
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

- yarn add redux react-redux
- 크롬확장프로그램 redux-devtool 설치
- yarn add redux-devtools-extension
- npm install --save styled-components
- VSCODE 확장 프로그램 vscode-styled-components 설치 (styled-component 자동완성)

## combineReducers

```js
export default combineReducers({
    addNumber: addReducer,
    displayNumber: displayReducer
})
```

이렇게 하면, Reducer분할에 쓰인 Key가 그대로 State분할에도 쓰입니다. 또한 실제로 각각의 reducer의 정의 자체도 다른 파일로 나누는 것이 일반적입니다.