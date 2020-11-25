import './Cart.css';

const Cart = ({ profile, removeUser }) => (
    <div className="cart">
        <h3>{profile.name}</h3>
        <p>{profile.login}</p>
        <img src={profile.avatar_url} alt="https://placehold.it/75"/>
        <button onClick={() => {removeUser(profile.id)}}>delete<br/>{profile.login}</button>
    </div>
)

export default Cart;