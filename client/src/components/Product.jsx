import {
  Favorite,
  Search,
  ShoppingCart
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fcf1ed69;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  border-radius: 13px;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FCF1ED;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  border-radius: 13px;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCart 
            onMouseOver={({target})=>target.style.color="green"}
            onMouseOut={({target})=>target.style.color="black"}
          />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
          <Search
            onMouseOver={({target})=>target.style.color="blue"}
            onMouseOut={({target})=>target.style.color="black"}
          />
          </Link>
        </Icon>
        <Icon>
          <Favorite
            onMouseOver={({target})=>target.style.color="red"}
            onMouseOut={({target})=>target.style.color="black"}
          />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
