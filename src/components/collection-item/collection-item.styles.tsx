import styled, {css} from 'styled-components';
import { CustomButton } from '../custom-button/custom-button.components';


export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {    
    .image {
      opacity: 0.8;
    }
     button {
      opacity: 0.85;
      display: flex;
    }
  }
`
export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;  
`

export const AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: .75;
  position: absolute;
  bottom: 5.9rem;
  display: none;
`

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 2rem;
`

export const Name = styled.span`
  margin-bottom: 15px;
`

export const Price = styled.span`
  justify-self:flex-end;
`
