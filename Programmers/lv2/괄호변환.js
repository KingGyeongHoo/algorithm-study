function solution(p) {
  return getStr(p);
}

//지문에 나온 문자열을 변환하는 함수
const getStr = (str) => {
  //1. 빈 문자열을 받을시 빈 문자열 리턴
  if (str.length === 0) return "";

  //문자열 더해가며 처음으로 나오는 균형잡힌 문자열을 찾음
  let newStr = "";

  //균형잡힌 문자열 u와 v
  let u = "";
  let v = "";

  //입력으로 받은 문자열을 반복 순회하여
  for (let i = 0; i < str.length; i++) {
    //이전까지의 문자열에 현재 탐색중인 문자를 더함
    newStr += str[i];

    //2. 현재 문자열이 균형잡힌 문자열인지 판단하여 균형잡힌 문자열 u,v로 분리
    if (isBal(newStr)) {
      //균형잡힌 문자열이라면, 현재 문자열을 u에 할당
      u = newStr;
      //해당 문자열 뒤에 붙는 문자열을 v에 할당
      v = str.slice(i + 1);
      break;
    }
  }

  // 3. u가 올바른 문자열인지 판단
  if (isRight(u)) {
    //3-1. 올바른 문자열이라면, v에 위의 로직을 재귀적으로 적용
    return u + getStr(v);
  } else {
    //4. 올바른 문자열이 아닌 경우

    //4-1, 4-2, 4-3. 빈 문자열에 '(', v에 대해 위 로직을 적용한 결과, ')'를 차례로 붙임
    let newV = "(" + getStr(v) + ")";
    //4-4. u의 앞 뒤 문자열을 제거
    let newN = u.split("");
    newN.shift();
    newN.pop();
    //이후 괄호 방향을 변경 => '('는 ')'로, ')'는 '('로 변경
    newN = newN.map((el) => (el === "(" ? ")" : "(")).join("");
    // 4-5. 생성된 문자열 반환
    return newV + newN;
  }
};

//균형잡힌 문자열인지 판단
const isBal = (str) => {
  //왼쪽 괄호와 오른쪽 괄호의 개수를 비교하여, 두 괄호의 값이 같을 때 리턴
  let left = str[0] === "(" ? 1 : 0;
  let right = str[0] === ")" ? 1 : 0;
  for (let i = 1; i < str.length; i++) {
    const s = str[i];
    if (s === "(") {
      left += 1;
    } else {
      right += 1;
    }
  }
  if (left === right) return true;
  return false;
};

//올바른 문자열인지 판단
const isRight = (str) => {
  //스택에 왼쪽 괄호를 넣고, 오른쪽 괄호가 들어오면 스택에서 제거
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const last = stack.length - 1;
    const s = str[i];
    if (s === "(") {
      stack.push(s);
    } else {
      if (stack[last] === "(") {
        stack.pop();
      } else {
        stack.push(s);
      }
    }
  }
  if (stack.length === 0) return true;
  return false;
};
