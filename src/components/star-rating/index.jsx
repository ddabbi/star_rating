//컴포넌트를 만들어서 냅보낸다

import {FaStar} from 'react-icons/fa';
//전용 css연결
import './style.css';
import {useState} from 'react';

// StarRating 컴포넌트
export default function StarRating({starCount = 5}){
  // startCount(별갯수)는 5개를 기본값. 컴포넌트를 사용하는 곳에서 정할 수 있게 매개변수로
  let[score, setScore] = useState(0);     //별점
  let[hover, setHover] = useState(0);     // 마우스 위치

  let starts = [];
  for(let i = 0; i<starCount; i++){
    starts.push(i+ 1);
  }

  function handleMouseClick(element){
    console.log(element);
    setScore(element);
    
  }
  function handleMouseMove(element){
    // 마우스 들어간 ㅂ별에다가 setHover{}
    // 어느 별 위에 마우스가 올라가있는디: 받아와야함
    setHover(element);
  }
  function handleMouseLeace(element){
    setHover(score);
  }

  return(
    <>
      <div>
        {
          // jsx안에다가 자바스크립트 넣으려면 {}
          // map: 배열의 갯수만큼 반복, 첫번째는 각 내부요소의 값, 두번째는 인덱스(위치)
          // map안에 콜백함수르 넣어서 동작
          starts.map((e, idx) => {
            //e: 1,2,3,4,5
            // ids: 0,1,2,3,4
            return(
              <FaStar size={40} key={e} className={e <= (hover || score) ? 'active' : 'inacive'} 
              // 마우스가 올라가 있거나, 선택된 상태면 클래스명을 변경
              onClick={() => {handleMouseClick(e)}}
              onMouseMove={()=>{handleMouseMove(e)}}
              onMouseLeave={()=>{handleMouseLeace(e)}}
              />
              
            )
          })
        }
      </div>
    </>
  )
}