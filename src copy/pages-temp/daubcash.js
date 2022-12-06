import React from "react"
import $ from "jquery"
import mockup from "../images/invite/daubCashBanner.png"
import "bootstrap/dist/css/bootstrap.min.css"
import { isIOS, isAndroid, isBrowser } from "react-device-detect"

export default function daubcash() {
  //window will not work in server environment
  let pathArray =
    typeof window !== "undefined" && window.location.search.split("=")
  let inviteCode = pathArray[1]

  const download = () => {
    if (isIOS) {
      window.location.href =
        "https://apps.apple.com/us/app/daub-cash/id1513396754"
    } else if (isAndroid) {
      window.location.href =
        "https://celer.oss-cn-shanghai.aliyuncs.com/celer-app-celerx-release.apk"
    } else if (isBrowser) {
      window.location.href = "https://app.appsflyer.com/app/cxioswebsite"
    }
  }

  const copy = () => {
    /* Get the text field */
    var copyText = document.getElementById("myInput")

    /* Select the text field */
    copyText.select()
    copyText.setSelectionRange(0, 99999) /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy")

    /* Alert the copied text */
    copiedAlert()
  }

  const copiedAlert = () => {
    $("#alert").fadeIn("fast", function() {
      $(this)
        .delay(100)
        .fadeOut("slow")
    })
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "#E978",
          backgroundImage:
            "radial-gradient(62.71% 46.53% at 50% 48.9%, #10DFF6 0%, #4068F7 100%)",
          height: "100vh",
          margin: "0 auto",
          padding: "0",
        }}
      >
        <img
          src={mockup}
          width="100%"
          style={{
            position: "fixed",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          alt="mockup"
        />
        <div
          style={{
            backgroundColor: "white",
            height: "56%",
            position: "fixed",
            bottom: "0",
            zIndex: "5",
            width: "100%",
            borderTop: "1px solid #DEDDE0",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "28px",
              marginTop: "8px",
              padding: "0px 16px 0px 16px",
            }}
          >
            Download Daub Cash <br />
            and WIN CASH!
          </h1>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "16px",
              padding: "4px",
            }}
          >
            The best bingo-style game!
          </h2>
          <div
            style={{
              position: "relative",
              width: "280px",
              height: "64px",
              marginTop: "0.25rem",
              transform: "translateX(-50%)",
              left: "50%",
            }}
          >
            <input
              type="text"
              defaultValue={inviteCode}
              id="myInput"
              style={{
                border: "1px solid #dbdbdb",
                borderRadius: "12px",
                padding: "12px",
                margin: "8px",
                width: "100%",
                fontWeight: "bold",
              }}
            />

            <button
              onClick={copy}
              style={{
                position: "absolute",
                right: "-36px",
                top: "11px",
                backgroundColor: "rgba(0,0,0,.5)",
                color: "white",
                borderRadius: "8px",
                padding: "8px 12px 8px 12px",
                transform: "translateX(-50%)",
              }}
            >
              Copy
            </button>
            <h2 id="alert" style={{ display: "none" }}>
              <span
                className="badge badge-success"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "14px",
                  transform: "translate(-50%)",
                }}
              >
                Copied
              </span>
            </h2>
          </div>
          <div style={{ backgroundColor: "#f7f7f9", padding: "4px 0px" }}>
            <p className="text-center" style={{ fontSize: "0.825rem" }}>
              <span className="font-weight-bold">Step 1: </span>Download the app
            </p>

            <p className="text-center" style={{ fontSize: "0.825rem" }}>
              <span className="font-weight-bold">Step 2: </span> Enter the
              invite code before making the first deposit
            </p>
          </div>
          <a
            style={{
              margin: "auto",
              marginTop: "32px",
              display: "block",
              width: "334px",
              height: "64px",
              backgroundImage:
                "linear-gradient(180deg, #82BFFF 0%, #4AA2FF 9.56%, #007CFF 85.07%, #1C71AA 96.44%)",
              boxShadow: "inset 0px 0px 0px 2px #ffff",
              border: "2px solid #dbdbdb",
              color: "white",
              borderRadius: "16px",
              cursor: "pointer",
              fontSize: "24px",
              textAlign: "center",
              padding: "0.75rem",
            }}
            id="inviteArcadeWin"
            onClick={download}
          >
            Win Today!
          </a>
        </div>
      </div>
    </>
  )
}
