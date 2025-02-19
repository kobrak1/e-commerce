import "./globalNotification.css";

export default function GlobalNotification({status}) {
  return (
    <div className={`global-notification ${!status ? "inactive" : ""}`}>
      <div className="container">
        <p>
          SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY
          - OFF 50%!
          <a href="shop.html">SHOP NOW</a>
        </p>
      </div>
    </div>
  );
}