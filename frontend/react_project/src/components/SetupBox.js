import React from "react";
import { FlexColumn } from "./FlexColumn";


export const SetupBox = ({children}) => {

    return (
        <div className="setup-box bg-light p-4 rounded">
            <FlexColumn>
                {children}
            </FlexColumn>
        </div>
    )
}