const ItemsCard = ({item}) => {
    

    let isoDate = new Date(item.date)

    let date = `${isoDate.getFullYear()}/${isoDate.getMonth()}/${isoDate.getDate()}`

    
    return (
        <div class="bg-gray-100 rounded-xl p-8 m-4 md:p-0 w-60 h-96 shadow-lg border border-gray-200">
            <img class="w-full p-2 h-44 rounded-xl" 
            src="https://c8.alamy.com/comp/T58125/selection-of-fruit-and-vegetables-on-white-background-T58125.jpg" alt="Generic"/>
            <h1 class="text-center text-2xl font-bold">{item.name}</h1>
            <h1 class="text-center text-lg">{item.type}</h1>
            
            <h1 class="text-left pl-2 pt-2 text-base">Price: ${item.price}</h1>
            <h1 class="text-left pl-2 text-base">Quantity: ${item.quantity}</h1>
            <div>
                <p class="text-center text-base">{item.details}</p>
            </div>
            <p class="text-right pr-2 text-sm">Date: {date}</p>
            
        </div>
    )
}

export default ItemsCard;