import Nav from "./Components/NavBar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";



function App() {
  const cards = data.map(element => {
    return <Card
         key={element.id}
         img={element.coverImg}
         rating={element.stats.rating}
         reveiwCount={element.stats.reviewCount}
         location={element.location}
         title={element.title}
         price={element.price}



    />
  })





  return (
    <>
      <Nav />
      <Hero />
     <section className="cards-list"> 
     {cards}
      </section> 
    </>
  );
}

export default App;
