import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from "../../actions/modal_actions";

function AboutDeveloper({ closeModal }) {
  return (
    <section className="about-developer-wrapper">
      <div className="button-wrapper">
        <button onClick={closeModal}>
          <i className="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <section className="developer-info">
        <div>
          <img src={window.photoJaredURL} alt="Photo of Jared Kaneshiro" />
        </div>
        <span>
          <a href="https://jmkaneshiro.github.io/" target="_blank">Jared Kaneshiro</a> is a software engineer based in New York, versed in the healthcare business, and a former QA lead at One Medical.
      </span>
      </section>
    </section>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(AboutDeveloper);
