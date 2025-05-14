import { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("donationCart")) || [];
    setDonations(storedCart);
  }, []);

  const handleConfirm = (index) => {
    const updatedCart = donations.filter((_, i) => i !== index);
    setDonations(updatedCart);
    localStorage.setItem("donationCart", JSON.stringify(updatedCart));

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = "✅ Donation Confirmed!";
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => document.body.removeChild(toast), 300);
      }, 2000);
    }, 100);
  };

  return (
    <div className="cart-wrapper">
      <h2>Your Donation Cart</h2>
      {donations.length === 0 ? (
        <p className="empty-text">No items in your cart yet.</p>
      ) : (
        <ul className="cart-list">
          {donations.map((item, index) => (
            <li key={index} className="cart-item">
              <strong>Qty:</strong> {item.quantity} &nbsp;|&nbsp;
              <strong>Condition:</strong> {item.condition} <br />
              <strong>Address:</strong> {item.address}
              {item.instructions && (
                <>
                  <br />
                  <strong>Instructions:</strong> {item.instructions}
                </>
              )}
              <br />
              <button className="confirm-btn" onClick={() => handleConfirm(index)}>
                Confirm
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
