import React from "react";
import {TravelsSummery} from "./travelsSummery";
import { Availableseats } from "./availableseats";

export const Tour=()=>{
    return(
        <React.Fragment>
  <TravelsSummery />
<Availableseats />
        </React.Fragment>
    )
}