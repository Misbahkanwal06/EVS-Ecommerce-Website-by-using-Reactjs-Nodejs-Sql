


import styled from '@mui/material/styles';

const StyledCard = styled(Card)`
  width: 240px;
  margin-bottom: ${(theme) => theme.spacing(2)};
  cursor: pointer;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 140px;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${(theme) => theme.spacing(2)};
`;

const StyledCategoryName = styled(Typography)`
  text-align: center;
  margin-top: ${(theme) => theme.spacing(1)};
`;

export { StyledCard, StyledCardMedia, StyledCardContent, StyledCategoryName };
