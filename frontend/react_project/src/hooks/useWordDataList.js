import React, { useState } from "react";


export const useWordDataList = () => {

    const [wordDataList, setWordDataList] = useState([])

    return {wordDataList, setWordDataList}
}