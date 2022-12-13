import style from "./contactConfirm.module.scss";

const ContactConfirm = ({ select, setSelect, setInput, currentUser }) => {
  const handleSelect = (e) => {
    setSelect((prev) => ({ ...prev, [e.target.name]: e.target.id }));
  };

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={style.UserInfo}>
      <div className={style.InfoContainer}>
        <div className={style.Option}>
          <input
            name="phone"
            type="radio"
            id="defaultPhone"
            onChange={handleSelect}
            defaultChecked
          />
          <label htmlFor="defaultPhone">Default phone:</label>
          <span>{currentUser?.phone}</span>
        </div>

        <div className={style.Option}>
          <input
            name="phone"
            type="radio"
            id="newPhone"
            onChange={handleSelect}
          />
          <label htmlFor="newPhone">New phone:</label>
          <input
            name="phone"
            placeholder="new phone"
            className={style.Phone}
            onChange={handleInput}
            disabled={select.phone === "defaultPhone"}
          />
        </div>
      </div>

      <div className={style.InfoContainer}>
        <div className={style.Option}>
          <input
            name="address"
            type="radio"
            id="defaultAddress"
            defaultChecked
            onChange={handleSelect}
          />
          <label htmlFor="defaultAddress">Default address:</label>
          <span>{currentUser?.address}</span>
        </div>

        <div className={style.Option}>
          <input
            name="address"
            type="radio"
            id="newAddress"
            onChange={handleSelect}
          />
          <label htmlFor="newAddress">New address:</label>
          <div>
            <textarea
              name="address"
              placeholder="new address"
              className={style.AddressText}
              onChange={handleInput}
              disabled={select.address === "defaultAddress"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactConfirm;
