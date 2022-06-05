import styled from 'styled-components';

export const Game = styled.div`
  display: block;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  text-align: center;
  > * {
    box-sizing: border-box;
  }
`;

export const Section = styled.div`
  display: block;
  flex: 1 1 auto;
  padding: 0.5rem 0;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  background: #000;
  max-width: 100%;
  width: 200px;
  margin: 0 auto 10px auto;
  &.plain {
    background: transparent;
    color: #000;
    & > h1 {
      margin: 0;
    }
  }
  &.up {
    background: #00ff00;
  }
  &.down {
    background: #ff0000;
  }
  &.even {
    background: #999;
  }
  &.row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    margin: 0;
  }
`;

export const PayoutBar = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 78px;
  width: 432px;
  background: rgba(0, 0, 0, 0.14);
  &.win {
    background: rgba(0, 255, 0, 0.14);
  }
  &.lose {
    background: rgba(255, 0, 0, 0.14);
  }
  &.deposit {
    &:after {
      visibility: visible;
      content: "YOUR BET EXCEEDS BALANCE";
      padding-top: 24px;
      background: rgba(0, 0, 0, 0.54);
    }
  }
  &.default {
    &:after {
      visibility: visible;
      content: "SPIN TO BEGIN GOOD LUCK!";
    }
  }

  &:after {
    content: "";
    visibility: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: -76px;
    bottom: -76px;
    background: rgba(0, 0, 0, 0.54);
    color: #fff;
    font-size: 42px;
    font-weight: 900;
    white-space: break-word;
    vertical-align: middle;
    padding-top: 54px;
  }
`;

export const SlotWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ReelCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ReelSquare = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 76px;
  vertical-align: top;
  flex: 1 1 76px;
  border: 2px solid #000;
  padding: 10px;
  margin: 5px;
  .win {
    border: 2px solid #99ff99;
  }
`;

export const Square = styled.div`
  max-height: 64px;
  max-width: 64px;
  font-size: 40px;
`;

export const SpinButton = styled.button`
  margin-top: 20px;
  border: 2px solid #000;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  width: 80px;
  padding: 5px;
  color: #fff;
  background: #333;
  display: inline-block;
  cursor: pointer;
  opacity: 0.87;
  transition: opacity ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
