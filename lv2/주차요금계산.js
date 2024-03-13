//시간 계산 함수 
const timeCalculate = (inT, outT) => {
  let [inHour, inMinute] = inT.split(':')
  let [outHour, outMinute] = outT.split(':')
  let hour = outHour/1 - inHour/1
  let minute = outMinute/1 - inMinute/1
  
  if(minute < 0){
      minute += 60
      hour -=1
  }
  return hour * 60 + minute
}

function solution(fees, records) {
  const [defTime, defFee, addTime, addFee] = fees
  
  //차량 출입을 기록하는 객체 recordObj와
  //누적 주차 시간을 기록하는 객체 timeObj
  const recordObj = {}
  const timeObj = {}
  
  //큐를 이용해 하나씩 내보냄
  while(records.length > 0){
      let [time, number, type] = records.shift().split(' ')
      
      if(!recordObj[number]){
          timeObj[number] = 0
      }
      //입차시 입차 시간 기록
      if(type === 'IN'){
          recordObj[number] = time
          //입차 후 출차 기록이 없을 시 출차 시간을 23:59로 설정하여 주차 시간 계산
          if(records.filter(el => el.includes(number) && el.includes("OUT")).length < 1){
              timeObj[number] = timeObj[number] + timeCalculate(recordObj[number], '23:59')
          }
      } else if(type === "OUT"){
          //출차시 저장된 입차 시간과 현재 출차 시간을 바탕으로 주차 시간 계산
          timeObj[number] = timeObj[number] + timeCalculate(recordObj[number], time)
      }
  }
  //먼저 차량 번호 순으로 정렬한 후, 주차 시간별 요금을 계산하여 리턴
  return Object.
  entries(timeObj).
  sort((a, b) => a[0] - b[0]).
  map(el => {
      let [num, min] = el
      if(min <= defTime){
          return defFee
      } else {
          let overTime = min - defTime
          return defFee + Math.ceil(overTime / addTime) * addFee
      }
  })
}