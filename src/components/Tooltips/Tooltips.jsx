import React from 'react';
// import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Tooltips({Icon, clase }) {
 
    return (
    <>
        <OverlayTrigger
        //   key={"right"}
          placement={"right"}
          overlay={
            <Tooltip id={`tooltip-${"right"}`}>
              Tooltip on <strong>{"right"}</strong>.
            </Tooltip>
          }
        >
          <div variant="secondary"><Icon></Icon></div>
        </OverlayTrigger>
    </>
  );
}
