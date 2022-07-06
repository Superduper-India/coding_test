// 220512

// board의 가장 위에 있는 것부터 바구니의 가장 아래에 쌓임
// 바구니에서 같은 것이 두 번 연속해서 쌓이면 사라짐
// board의 인형이 없는 곳에서 잡으면 아무일도 X

// 1. 어떻게 접근하려고 했지?
// (1) 뽑은 인형을 담는 바구니(basket), 사라진 인형의 수(result)
// (2) 

// 구현이 끝난 후 
// 2. 왜 이렇게 생각해?
// 3. 이게 맞다고 생각하면 더 좋은 방법이 있나?
// 4. 코드에 옮기자.

// 참고URL => https://velog.io/@qmasem/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%81%AC%EB%A0%88%EC%9D%B8-%EC%9D%B8%ED%98%95%EB%BD%91%EA%B8%B0-%EA%B2%8C%EC%9E%84-JavaScript

const putDoll = (basket, doll) => {
  // 바스켓의 가장 마지막 요소
  // 네모가 오고 바스켓에 가장마지막 요소가 네모면 바스켓의 가장 마지막 요소를 없애고 true반환
  // 세모가 오고 바스켓에 가장마지막 요소가 네모면 바스켓에 세모를 넣고 false를 반환
  const len = basket.length;
  if (doll === basket[len - 1]) {
    return [
      basket.slice(0, -1),
      true,
    ];
  }

  return [
    [...basket, doll],
    false
  ];
};

const pick = (board, index) => {
  const dollsIndex = board.findIndex((it) => it[index] !== 0);
  if (dollsIndex == -1) {
    return [board, 0];
  }

  return [
    board.map((dolls, i) => {
      if (i !== dollsIndex) {
        return dolls;
      }

      return dolls.map((doll, aIndex) => aIndex === index ? 0 : doll);
    }),
    board[dollsIndex][index],
  ];
};

for (let i = 0; i < 5; i++) {
  [1, 2, 3, 4, 5]

}

// effect 함수가 반환하는 것
const ?? =[1, 2, 3, 4, 5].forEach(() => {
  name = twetewtw
  console.log()
})

const [1, 2, 3, 4, 5].map((it) => it * 2);

[1, 2, 3, 4, 5].filter

[1, 2, 3, 4, 5].find
[1, 2, 3, 4, 5].findIndex

[1, 2, 3, 4, 5].reduce()

boolean = [1, 2, 3, 4, 5].every((it) => it.isNumber())

boolean = [1, 2, '', 4, 5].some((it) => it.isString())

// 선언적인 프로그래밍 => What만 있고 How가 없다
User.eat();

SELECT id FROM users WHERE age > 32;


const reducer = ({ board, basket, answer }, index) => {
  const [newBoard, doll] = pick(board, index);
  if (doll === 0) {
    return {
      board: newBoard,
      basket,
      answer,
    };
  }

  const [newBasket, sameDoll] = putDoll(basket, doll);
  if (sameDoll) {
    return {
      board: newBoard,
      basket: newBasket,
      answer: answer + 2,
    };
  }

  return {
    board: newBoard,
    basket: newBasket,
    answer,
  };
};

function solution(board, moves) {
  const { answer } = moves
    .map((it) => it - 1)
    .reduce(reudcer, {
      board,
      basket: [],
      answer: 0,
    });

  return answer;
  // const len = moves.length;
  // let answer = 0;
  // let basket = [];

  // // 인형을 집는다.
  // for (let i = 0; i < len; i++) {
  //   const [newBoard, doll] = pick(board, moves[i] - 1);
  //   if (doll === 0) {
  //     continue;
  //   }
  //   const [newBasket, sameDoll] = putDoll(basket, doll);
  //   basket = newBasket;
  //   if (sameDoll) {
  //     answer = answer + 2;
  //   }
  // }

  // return answer;
}
// ToDo result 4

test("solution", () => {
  expect(solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1]
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )).toBe(4);

  // expect(solution(
  //   [
  //     [0, 0, 0, 0, 0],
  //     [0, 0, 1, 0, 3],
  //     [0, 2, 5, 0, 1],
  //     [4, 2, 4, 4, 2],
  //     [3, 5, 1, 3, 1]
  //   ],
  //   [1, 5, 3]
  // )).toBe(0);
});

test("pick", () => {
  expect(
    pick(
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
      ],
      0
    )
  ).toEqual([
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [0, 2, 4, 4, 2],
      [3, 5, 1, 3, 1]
    ],
    4
  ]);
});

test("pick 인형이 비어있으면 안바뀐 보드와 0을 반환한다", () => {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [0, 2, 4, 4, 2],
    [0, 5, 1, 3, 1],
  ];

  expect(
    pick(
      board,
      0
    )
  ).toEqual([
    board,
    0
  ]);
});