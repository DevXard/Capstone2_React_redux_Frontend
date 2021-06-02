const CartCard = ({data}) => {

    function date(date) {
        let isoDate = new Date(date)

        let d = `${isoDate.getFullYear()}/${isoDate.getMonth()}/${isoDate.getDate()}`
        return d
    }

    return (
        <div className="border border-gray-500 m-3">
            <div className='m-3 flex justify-between'>
                <div>
                <p> Order: {data.orderid}</p>
                <p>Order Date: {date(data.o_date)}</p>
                </div>
                <div>
                    <p>{data.name}</p>
                    <div className='flex justify-center'>
                        <p className='px-1'>{date(data.i_date)}</p>
                        
                    </div>
                </div>
                
                <div>
                <p>Price: ${data.price}</p>
                <p>Quantity: {data.o_quantity}</p>
                </div>
                
            </div>
        </div>
    )
}

export default CartCard;