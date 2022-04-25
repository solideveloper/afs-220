import styled from "styled-components";
import { categories } from "../data";

import { mobile } from "../responsive";

import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
  `
const Heading = styled.div`
color: darkred;
text-decoration: underline;
font-size:20px;`

const Categories = () => {
  return (
    <Container>
    <Heading >Sizes & Flavors</Heading>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;