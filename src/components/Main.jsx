import Card from "./Card/Card";
import cardsData from "./../data/data.json";

function Main() {

    // console.log(cardsData)
    return (
        <main className="main">
            <div className="container">
                <div className="main_cards">
                    {cardsData.map((item, index)=>{
                        return <Card data={item} key={index} />
                    })}
                    
                </div>
            </div>

        </main>
    )
}

export default Main;