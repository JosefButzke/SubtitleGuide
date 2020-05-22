import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight(true)}px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
`;

export const SubTitleContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 20px;
  margin-top: 30px;
`;

export const SubTitleLine = styled.Text``;
