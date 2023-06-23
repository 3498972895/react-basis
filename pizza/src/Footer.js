function Footer(props) {
  const hour = new Date().getHours();
  const openHour = props.openHour;
  const closeHour = props.closeHour;
  const isOpen = hour > openHour && hour < closeHour;
  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <div className="order">
            <p>We are open util{closeHour}:00 Come to visit or order online</p>
            <button className="btn">Order</button>
          </div>
        ) : (
          <p>We are closed</p>
        )}
      </footer>
    </>
  );
}
export default Footer;
