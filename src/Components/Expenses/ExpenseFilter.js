import React, { useState } from "react";
const ExpenseFilter = (props) =>{ 
    const DateChangeHandler = (event) => {
        props.onDateChange(event.target.value);
      };
    return(
        <div className="grid grid-cols-2 m-0">
            <div className="mt-2">
                <h1 className="text-gray-100">aqui van los filtros</h1>
            </div>
            <div className="flex justify-end mt-1 mb-0">
            <select  value={props.defaultYear} onChange={DateChangeHandler} class="form-select appearance-none
                text-center
                block
                w-[130px]
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};
export default ExpenseFilter;