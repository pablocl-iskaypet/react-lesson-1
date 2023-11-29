import React from "react";
import Banner from "../../shared/components/Banner"

const data = [
    {id:0,  title: "gato",source:"https://www.tiendanimal.es/on/demandware.static/-/Library-Sites-TiendanimalSharedLibrary/default/dw6646efa6/images/2023/home/12/ta_es_main_cupones_eur_web.jpg"},
    {id:1,  title: "perro",source:"https://www.tiendanimal.es/on/demandware.static/-/Library-Sites-TiendanimalSharedLibrary/default/dwa5e0d0a5/images/2023/home/12/30_ta_es_main_criadores_20dto.jpg"}
]

const Home = (props) =>{
    return(
        <div className="container mx-auto px-4 font-sans">
            <ul>
                {
                    data.map((item)=>(<Banner key={item.id} title={item.title} source={item.source}></Banner>))
                }
            </ul>
        </div>
    )
}

export default Home