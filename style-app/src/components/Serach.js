import React from 'react';
import styled from 'styled-components';

const Serach = () => {
  const SearchS = styled.div`
    width: 430px;
    height: 500px;
    display: inline-block; /* inline 하면 세로크기 불가 */
    background-color: white;
    position: relative; /* 관계형 : 자기 사방에 있는놈들이랑 관계를 설정 할 수 있음. */
    /* default값인 static는 밑의 top, left가 적용 안됨 ㅜ */
    top: 10px;
    left: 50px;
    padding: 20px 30px; /* 세로 가로, 4개 입력시 12시부터 시계방향으로  */
    box-shadow: 0 2px 2px 0 rgb(214, 214, 214);
  `;

  const SerachTitleS = styled.div`
    padding: 10px 0px;
    font-size: 30px;
    font-weight: 800;
    color: rgb(70, 70, 70);
  `;

  const SerachSubTitleS = styled.td`
    padding: 10px 0px;
    font-size: 12px;
    font-weight: 600;
  `;

  const SearchInputS = styled.input`
    height: 45px;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;

  const SearchSelectS = styled.select`
    height: 45px;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;

  const SearchButtonBoxS = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: end;
    padding: 20px 0px;
  `;

  const SearchButtonS = styled.button`
    background-color: rgb(255, 90, 95);
    color: white;
    width: 70px;
    height: 45px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    border: 0px;
    cursor: pointer;
  `;
  return (
    <SearchS>
      <SerachTitleS>
        특색 있는 숙소와 즐길 <br />
        거리를 예약하세요.
      </SerachTitleS>
      <table style={{ width: '100%' }}>
        <tr>
          <SerachSubTitleS colSpan="2">목적지</SerachSubTitleS>
        </tr>
        <tr>
          <td colspan="2">
            <SearchInputS type="text" placeholder=" 모든 위치" />
          </td>
        </tr>
        <tr>
          <SerachSubTitleS>체크인</SerachSubTitleS>
          <SerachSubTitleS>체크아웃</SerachSubTitleS>
        </tr>
        <tr>
          <td>
            <SearchInputS type="date" />
          </td>
          <td>
            <SearchInputS type="date" />
          </td>
        </tr>
        <tr>
          <SerachSubTitleS colSpan="2">인원</SerachSubTitleS>
        </tr>
        <tr>
          <td colSpan="2">
            <SearchSelectS>
              <option>인원</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </SearchSelectS>
          </td>
        </tr>
      </table>
      <SearchButtonBoxS>
        <SearchButtonS>검색</SearchButtonS>
      </SearchButtonBoxS>
    </SearchS>
  );
};

export default Serach;
