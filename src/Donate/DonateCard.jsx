import { useForm } from "react-hook-form";
import { SnackContext, DonationContext } from "./Donate";
import { useContext } from "react";
import "./DonateCard.css";
import { useEffect } from "react";

const DonateCard = ({ name, close }) => {
  const { register, handleSubmit } = useForm();

  const { state, handleClick } = useContext(SnackContext);
  const { donationData, setDonData } = useContext(DonationContext);

  useEffect(() => {
    const existingDonations = JSON.parse(localStorage.getItem('donationCart')) || [];
    setDonData(existingDonations);
  }, []);

  const onSubmit = (data) => {
    handleClick();
    const existingDonations = JSON.parse(localStorage.getItem('donationCart')) || [];
    const updatedCart = [...existingDonations, data];
    localStorage.setItem('donationCart', JSON.stringify(updatedCart));
    setDonData(updatedCart);
  };

  return (
    <div className="donatecard-overlay">
      <div className="donatecard-container">
        <div className="donatecard-header">
          <h1 className="donatecard-title">Donate {name}</h1>
          <svg
            onClick={close}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="donatecard-close"
          >
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
          </svg>
        </div>

        <h2 className="donatecard-subtitle">Please provide details about your {name} donation.</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="donatecard-form">
            <div className="donatecard-field">
              <label htmlFor="quantity">Quantity</label>
              <input {...register("quantity")} type="text" id="quantity" />
            </div>

            <div className="donatecard-field">
              <label htmlFor="condition">Condition</label>
              <select id="condition" {...register("condition")}>
                <option value="new">New</option>
                <option value="used">Like New</option>
                <option value="gently-used">Gently Used</option>
                <option value="used">Used</option>
              </select>
            </div>

            <div className="donatecard-field">
              <label htmlFor="instructions">Instructions</label>
              <textarea {...register("instructions")} id="instructions"></textarea>
            </div>

            <div className="donatecard-field">
              <label htmlFor="pickup">Pickup Address</label>
              <input {...register("address")} type="text" id="pickup" />
            </div>
          </div>

          <button type="submit" className="donatecard-button">
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonateCard;
