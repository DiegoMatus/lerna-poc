"use client";

import React from 'react'
import { usePerson } from "@starmedica/common";



export const Test  = () => {
    const {data, getName} = usePerson()

        const callData = () => {
          console.log("hola")
        }

        return (
            <button onClick={callData}>
                test
            </button>
        )
}