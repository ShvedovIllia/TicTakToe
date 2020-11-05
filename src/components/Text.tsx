import { styled } from "../styles";

export const H1 = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.util.wp('4%')};
  line-height: ${({ theme }) => theme.util.wp('4.5%')};
`;
