import React from 'react'
import { useState } from 'react';

export default function MarketingExp({details, setDetails, handleChange}) {
    const [showContents, setShowContents] = useState(false);

  return (
    <div id="marketing">
            <div
              className={showContents ? "exp_btn_close" : "exp_btn"}
              onClick={() => setShowContents(!showContents)}
            >
              {showContents === true ? "Close" : "Add"}
            </div>
            {showContents && (
              <div className="dropDown">
                <span className="sub_heading">Please Choose Expense Type</span>
                <div className="selectorContainer">
                  <select
                    id="dropdown5"
                    className="text_area2"
                    name="expenseCap"
                    value={details.expenseCap}
                    onChange={handleChange}
                  >
                    <option disabled selected value="">
                      Please select category
                    </option>
                    <option value="Distribution Expense">
                      Distribution Expense
                    </option>
                    <option value="Delivery Expense">Delivery Expense</option>
                    <option value="Sales Expense">Sales Expense</option>
                  </select>
                  {/* <div className="exp_btn2 adjust" type='submit'>add</div> */}
                </div>

                <span className="sub_heading">Or Add Customized Details</span>
                <textarea
                  className="text_area2 adjust2"
                  type="text"
                  placeholder="Enter your description here"
                  name="customExp"
                  value={details.customExp}
                  onChange={handleChange}
                />

                <span className="sub_heading">Or Enter the Amount</span>
                <input
                  className="text_area2"
                  type="number"
                  placeholder="$"
                  min="0"
                  name="expense"
                  value={details.expense}
                  onChange={handleChange}
                />
              </div>
            )}

            <span className="sub_heading">Gross Corridor %</span>
            <input
              className="text_area2"
              type="number"
              min="1"
              max="100"
              name="grossCor"
              value={details.grossCor}
              onChange={handleChange}
            />

            <span className="sub_heading">Gross Corridor Rights</span>
            <select
              id="dropdown4"
              className="text_area2"
              name="grossCorRights"
              value={details.grossCorRights}
              onChange={handleChange}
            >
              <option disabled selected value="">
                Please select category
              </option>
              <option value="tvod">TVOD</option>
              <option value="svod">SVOD</option>
              <option value="avod">AVOD</option>
              <option value="tv">TV</option>
              <option value="sell_thru">SELL THROUGH</option>
            </select>

            <span className="sub_heading">Producer Payment Terms</span>
            <input
              className="text_area2"
              type="text"
              name="producerPay"
              maxlength="20"
              value={details.producerPay}
              onChange={handleChange}
            />

            <span className="sub_heading">Distribution Fee %</span>
            <input
              className="text_area2"
              type="number"
              min="1"
              max="100"
              name="distributionFee"
              value={details.distributionFee}
              onChange={handleChange}
            />

            <span className="sub_heading">Income Reserves %</span>
            <input
              className="text_area2"
              type="number"
              min="1"
              max="100"
              name="incomeReserves"
              value={details.incomeReserves}
              onChange={handleChange}
            />
            </div>
  )
}
