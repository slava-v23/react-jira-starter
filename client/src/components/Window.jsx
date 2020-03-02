import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

const Window = ({ show, onClose, item }) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}
        >
            <div className={"close-btn-ctn"}>
                <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div>
                <h2>Description</h2>
                <p>{item.content}</p>
                <h2>Status</h2>
                <p>{item.icon} {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}</p>
                <h2>Priority</h2>
                <p>{item.priority}</p>
                <h2>Estimate</h2>
                <p>{item.estimate}</p>
                <h2>Issue type</h2>
                <p>{item.issueType}</p>
            </div>
        </Modal>
    );
};

export default Window;