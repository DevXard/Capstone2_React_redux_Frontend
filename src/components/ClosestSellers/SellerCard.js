import { Link } from 'react-router-dom';
 
const SellerCard = ({data}) => {

    return (
        <Link to={data.uid}>
        <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 w-80 h-40">
        <img class="w-20 h-20 md:w-20 rounded-full p-1" 
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <h1>
            Username: {data.username}
          </h1>
          <figcaption class="font-medium">
            <div class="text-cyan-600">
              City: {data.city}
            </div>
            <div class="text-gray-500">
              State: {data.state}
            </div>
          </figcaption>
        </div>
      </figure>
        </Link>
    )
}

export default SellerCard;