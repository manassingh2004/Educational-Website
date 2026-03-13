function Payment() {
  return (
    <div className="payment-page">
      <div className="payment-card">
        <h2>Course Payment</h2>
        <p>Complete your payment to enroll in the course.</p>

        <form className="payment-form">
          <input type="text" placeholder="Card Holder Name" />
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Expiry Date (MM/YY)" />
          <input type="text" placeholder="CVV" />
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;