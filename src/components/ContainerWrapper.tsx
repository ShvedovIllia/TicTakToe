import { styled } from "../styles";

export const ContainerWrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.lightGray};
`;
