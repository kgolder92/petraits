import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Prata', serif;

`;

export const Logo = styled.img`
  width: 11vh;
  height: 11vh;
  padding-right: 44px;
  align-self: flex-end;
`;

export const LineBreak = styled.div`
  border-bottom-width: 1px !important;
  border-bottom-color: #EBEBEB !important;
  border-bottom-style: solid !important;
  margin-top: 12px;
  margin-bottom: 10px;
}
`;

export const Header = styled.div`
  font-family: 'Prata', serif;
  font-size: 26px;
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 16vh;
  background-color: #f5f0f0;
  color: #042228;
`;

export const Menu = styled.div`
  display: flex;
  align-self: center;
  margin-left: 30px;
  width: 100vh;
  justify-content: flex-end;
`;
export const Word = styled.div`
 margin-right: 35px;
 text-decoration: none;
`;
