import './features.css'


function CardImage(props) {
    const theStyle = {
        background: `url(${props.image}) center center`,
        backgroundSize: 'cover',
        width: '100%',
        height: '250px'
    }
    return (
        <div style={theStyle}></div>
    )
}

function Features() {
    return (
        <div className="container px-4 py-5" id="hanging-icons">
            <h3 className="pb-2 border-bottom" style={{"color":"#ffc107","textAlign":"center", "padding":"5px", "marginBottom":"15px","fontSize":"36px","color":"#ffc107", "lineHeight":"normal"}}>Our mission is to conserve nature and reduce the most pressing threats to the diversity of life on Earth</h3>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="col grid-image align-items-start">
                    
                    <div>
                        <CardImage image="./pictures/seaturtle.jpeg" alt="" />
                        <h2>Sea Turtles</h2>
                        <p>According to the International Union for Conservation of Nature (IUCN), many turtle species are listed as threatened, endangered or critically endangered. For example, the ploughshare tortoise and radiated tortoise are estimated to be extinct in the next 45 years.</p>
                        
                    </div>
                </div>
                <div className="col grid-image align-items-start">
                    
                    <div>
                        <CardImage image="./pictures/panda.jpeg" alt="" />
                        <h2>Panda</h2>
                        <p>The biological diversity of the panda’s habitat is unparalleled in the temperate world and rivals that of tropical ecosystems, making the giant panda an excellent example of an umbrella species conferring protection on many other species where pandas live. In other words, when we protect pandas, we invariably protect other animals that live around them, such as multicolored pheasants, the golden monkey, takin, and crested ibis.</p>
                        
                    </div>
                </div>
                <div className="col grid-image align-items-start">
                    
                    <div>
                        <CardImage image="./pictures/penguins.jpeg" alt="" />
                        <h2>Penguins</h2>
                        <p>These species depend on sea ice for access to food and for places to breed. But the sea ice has been disappearing, and penguin populations along with it. 50% of the emperor penguins and 75% of the Adelie penguins will likely decline or disappear if global average temperatures rise above pre-industrial levels by just 2 degrees Celsius</p>
                    
                    </div>
                </div>
            </div>

            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="col grid-image align-items-start">
                    
                    <div>
                        <CardImage image="./pictures/elephants.jpeg" alt="" />
                        <h2>Elephants</h2>
                        <p>Today, the greatest threat to African elephants is wildlife crime, primarily poaching for the illegal ivory trade, while the greatest threat to Asian elephants is habitat loss, which results in human-elephant conflict. WWF has advocated for an end to commercial elephant ivory sales in the US and other major markets like China, Thailand, and Hong Kong as the most effective and efficient solution to end this illegal ivory trade.</p>
                        
                    </div>
                </div>
                <div className="col grid-image align-items-start">
                    
                    <div>
                        <CardImage image="./pictures/polarbear.jpeg" alt="" />
                        <h2>Polar Bear</h2>
                        <p>The loss of sea ice habitat from climate change is the biggest threat to the survival of polar bears. Other concerns for polar bears include lethal response to human-polar bear conflict, toxic pollution in the environment, and direct impacts from industrial development, such as disturbance of maternal dens or contact with an oil spill, and potential overhunting of some subpopulations.</p>
                        
                    </div>
                </div>
                <div className="col grid-image align-items-start">
                    
                    <div>
                        <CardImage image="./pictures/monkey.jpeg" alt="" />
                        <h2>Orangutans</h2>
                        <p>Orangutans are massively threatened by extinction through deforestation and shrinking habitat. This is why the serene apes with their reddish hair have already been on the International Union for Conservation of Nature (IUCN) Red List for years, and the number one reason why their numbers continue to decline.</p>
                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features;