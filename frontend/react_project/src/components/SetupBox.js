import React from "react";
import { FlexColumn } from "./FlexColumn";


export const SetupBox = ({children}) => {

    return (
        <div className="setup-box p-4 rounded" style={{ backgroundColor: '#e8e4e6' }}>
            <FlexColumn>
                {children}
            </FlexColumn>
        </div>
    )
}