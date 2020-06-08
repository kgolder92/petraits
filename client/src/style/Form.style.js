import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  background-color: blanchedalmond;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 39%
`;

export const InputFields = styled.input`
  width: 25vh;
  height: 4vh;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  height: 27px;
  margin-left: -27px;
`;
