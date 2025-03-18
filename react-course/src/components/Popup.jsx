function Popup() {
  return (
    <>
      <div className="popup">
      <span>Are you sure?</span>
      <div className="popup_btns">
        <button className="popup_btn">Confirm</button>
        <button className="popup_btn popup_btn--cancel">Cancel</button>
      </div>
    </div>
    <div className="backdrop"></div>
    </>
    
  );
}

export default Popup;
