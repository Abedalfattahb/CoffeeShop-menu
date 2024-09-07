import { Container } from "react-bootstrap";
import NavbarList from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";
import Cards from "./components/Card";
import { Items } from "./Data";
import { useState } from "react";
function App() {
  const allCat=['الكل',...new Set(Items.map((i)=>i.category))]
  const [itemsData,setitemsData]=useState(Items);
  const filterCat = (cat) => {
    if (cat === "الكل") {
      setitemsData(Items); // Show all items when "الكل" is selected
    } else {
      const newArr = Items.filter((item) => item.category === cat);
      setitemsData(newArr);
    }
  };
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = Items.filter((item) =>
        item.title.toLowerCase().includes(word.toLowerCase())
      );
      setitemsData(newArr);
    } else {
      setitemsData(Items); // Reset to all items if the search input is empty
    }
  };
  
  
  
   
  return (
   <div className="color-body">
     <NavbarList filterbySearch={filterbySearch}/>
      <Container>
        <Header/>
        <Category filterCat={filterCat} allCat={allCat}/>
        <Cards itemsData={itemsData}/>

      </Container>
   </div>
  )
  
}

export default App;
