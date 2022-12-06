import React from "react"
import { FaQrcode, FaTimesCircle } from "react-icons/fa"
import modalStyle from "../style/modal.module.scss"
import fakeqr from "../../images/downloadBtn/qr.png"

export default class ShowQr extends React.Component {
  state = {
    modalStyle: modalStyle.modalContainer,
  }
  handleModal = () => {
    this.setState({
      modalStyle: modalStyle.modalContainerActive,
    })
  }
  closeModal = () => {
    this.setState({
      modalStyle: modalStyle.modalContainer,
    })
  }
  render() {
    return (
      <>
        <div className="mt-3 text-center text-lg-left d-none d-lg-block">
          <a
            href="javascript:void(0)"
            onClick={this.handleModal}
            id="qr_download"
          >
            <span className="qr_download">
              <FaQrcode />
              <span className="ml-2">Show Download QR code</span>
            </span>
          </a>
        </div>

        <div
          className={modalStyle.fade + " " + this.state.modalStyle}
          onClick={this.closeModal}
        >
          <div className={modalStyle.modalInner + " " + modalStyle.slideDown}>
            <div className={modalStyle.modalClose} onClick={this.closeModal}>
              <FaTimesCircle size={24} />
            </div>

            <p className="mt-5 text-center">Scan to download</p>
            <img
              src={fakeqr}
              alt="QR code"
              className="mx-auto d-block"
              width="80%"
            />
          </div>
        </div>
      </>
    )
  }
}
