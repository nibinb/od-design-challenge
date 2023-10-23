import React from 'react'
import { useRive, Layout, Fit, Alignment, useStateMachineInput } from "@rive-app/react-canvas";


export const RiveDemo = () => {

  const SELL_TRIGGER = "selll trigger";
  const CLICK_TRIGGER = "click trigger";
  const STATE_MACHINE = "od";
  const { rive, RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: "od.riv",
    // Be sure to specify the correct state machine (or animation) name
    stateMachines: STATE_MACHINE,
    // This is optional.Provides additional layout control.
    layout: new Layout({
      fit: Fit.Cover, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center
    })
  });

  const onClick = useStateMachineInput(rive, STATE_MACHINE, CLICK_TRIGGER)


  return <RiveComponent onClick={() => onClick.fire()} />;
};

function Home() {
  return (
    <div className='home'>
    {/* plan showcase */}
    <section>
    <div className="cards-container">
        {/* render cards */}
      </div>
      <div className="accordion"></div>
    </section>
    <RiveDemo />
    </div>
  )
}

// 85 
// 117

export default Home
