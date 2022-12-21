import { FormControl, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';

registerPlugin(FilePondPluginFilePoster);

export default function Confirm({details, files, formik}) {
    const primary = [
        "Producer's Email:",
        "Distribution Type:",
        "Right of Sale:",
        "CAMA Involved:",
        "Country of Law:",
        "State of Law:",
        "Effective Date:",
        "Date of Signature:",
        "Renewal Date:",
        "Renewal Expiration:",
        "Expense Type:",
        "Customized Expenses:",
        "Film Expenses:",
        "Gross:",
        "Fees:",
        "Producer Payment Terms:",
        "Distribution Fee %:",
        "Income Reserves%:",
        "Accounting Terms:",
    ];

  return (
    <>
        <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
            <div className="confirm_bg">
                <div className="confirm_bg_left">
                    <div className="film_image">
                        <div>
                            {/* <FilePond 
                                files={files}
                                allowFilePoster={true}
                                filePosterHeight={20}
                                filePosterWidth={20}
                                stylePanelAspectRatio={20/20}
                             />   */}
                             {/* <label htmlFor='file'>Film Poster</label>
                             <input type="file" name="avatar" value={files}/> */}
                    </div>
                        <div>Film Name: {`${formik.values.filmName}`}</div>
                        <span>Film's Code: {`${formik.values.filmsCode}`}</span>
                    </div>
                </div>
                <div className="confirm_bg_right">
                    <div className="film_info">
                        <List>
                            {primary.map((data) => (
                                <ListItem 
                                    key={data}>
                                    <ListItemText primary={`${data}`} />
                                </ListItem>
                            ))}
                            <ul className="results">
                                <li>{`${formik.values.producersEmail}`}</li>
                                <li>{`${formik.values.distributionType}`}</li>
                                <li>{`${formik.values.rightSale}`}</li>
                                <li>{`${formik.values.cama}`}</li>
                                <li>{`${formik.values.countryLaw}`}</li>
                                <li>{`${formik.values.stateLaw}`}</li>
                                <li>{`${formik.values.effectiveDate}`}</li>
                                <li>{`${formik.values.dateSignature}`}</li>
                                <li>{`${formik.values.renewalDate}`}</li>
                                <li>{`${formik.values.renewalExpiration}`}</li>
                                <li>{`${formik.values.expenseCap}`}</li>
                                <li>{`${formik.values.customExp}`}</li>
                                <li>{`${formik.values.expense}`}</li>
                                <li>{`${formik.values.gross}`}</li>
                                <li>{`${formik.values.fees}`}</li>
                                <li>{`${formik.values.producerPay}`}</li>
                                <li>{`${formik.values.distributionFee}`}</li>
                                <li>{`${formik.values.incomeReserves}`}</li>
                                <li>{`${formik.values.accountingTerms}`}</li>
                            </ul>
                        </List>
                    </div>
                </div>
            </div>
        </FormControl>
    </>
    
  )
}
