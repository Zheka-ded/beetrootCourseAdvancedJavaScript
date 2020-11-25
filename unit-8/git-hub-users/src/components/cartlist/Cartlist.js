import Cart from '../cart/Cart';

const Cartlist = ({ data, removeUser }) => (
    <div className="cart-box">

        {data.map((profile) => (

            <Cart key={profile.id} 
                    profile={profile} 
                    removeUser={removeUser} />

        ))}

    </div>
)

export default Cartlist;