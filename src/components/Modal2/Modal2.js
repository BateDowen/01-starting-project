import React from "react";
import { useNavigate } from "react-router-dom";
import "./Modal2.styles.css";

const Modal2 = ({ children }) => {
  const navigate = useNavigate();

  const goBackHandler = React.useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className="modal-backdrop">
      <div onClick={goBackHandler} className="modal-overlay"></div>
      <div className="modal-content">
        Modal
        {/* {children} */}
      </div>
    </div>
  );
};

export default React.memo(Modal2);
