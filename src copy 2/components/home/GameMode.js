import React from "react";
import Section from "../global/Section";

export default function GameMode() {
  return (
    <Section bgColor={"#f7f7f9"}>
      <div className="row">
        <div className="col-sm-12">
          <h3 className="font-w-bold text-center space-bottom-small">
            Flexible Game Modes and Types
          </h3>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 py-3">
          <div
            style={{
              padding: "20px 0 40px 0",
              borderRadius: "16px",
              border: "3px solid #f2f2f2"
            }}
          >
            <p className="content-medium-title text-center font-w-semibold mt-2">
              Game Modes
            </p>
            <p className="content-medium d-grey mt-2 text-center px-5">
              Celer Gaming SDK offers flexible integration modes, ranging from
              fully decentralized integration mode to centralized integration
              mode. Game developers can pick the one that fits their needs.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 py-3">
          <div
            style={{
              padding: "20px 0 40px 0",
              borderRadius: "16px",
              border: "3px solid #f2f2f2"
            }}
          >
            <p className="content-medium-title text-center font-w-semibold mt-2">
              Game Types
            </p>
            <p className="content-medium d-grey mt-2 text-center px-5">
              Celer Gaming SDK also supports the integration with multiple game
              types, including solo games, 1v1 turn-based games and 1v1
              real-time synchronous games.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
