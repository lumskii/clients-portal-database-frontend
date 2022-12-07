import { FormControl, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';

registerPlugin(FilePondPluginFilePoster);

export default function Confirm({details, files, setFiles}) {
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
        "Gross Corridor %:",
        "Gross Corridor Rights:",
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
                            <FilePond 
                                files={files}
                                allowFilePoster={true}
                                filePosterHeight={20}
                                filePosterWidth={20}
                                stylePanelAspectRatio={20/20}
                             />  
                             {/* <label htmlFor='file'>Film Poster</label>
                             <input type="file" name="avatar" value={files}/> */}
                    </div>
                        <div>Film Name: {`${details.filmName}`}</div>
                        <span>Film's Code: {`${details.filmsCode}`}</span>
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
                                <li>{`${details.producersEmail}`}</li>
                                <li>{`${details.distributionType}`}</li>
                                <li>{`${details.rightSale}`}</li>
                                <li>{`${details.cama}`}</li>
                                <li>{`${details.countryLaw}`}</li>
                                <li>{`${details.stateLaw}`}</li>
                                <li>{`${details.effectiveDate}`}</li>
                                <li>{`${details.dateSignature}`}</li>
                                <li>{`${details.renewalDate}`}</li>
                                <li>{`${details.renewalExpiration}`}</li>
                                <li>{`${details.expenseCap}`}</li>
                                <li>{`${details.customExp}`}</li>
                                <li>{`${details.expense}`}</li>
                                <li>{`${details.grossCor}`}</li>
                                <li>{`${details.grossCorRights}`}</li>
                                <li>{`${details.producerPay}`}</li>
                                <li>{`${details.distributionFee}`}</li>
                                <li>{`${details.incomeReserves}`}</li>
                                <li>{`${details.accountingTerms}`}</li>
                            </ul>
                        </List>
                    </div>
                </div>
            </div>
        </FormControl>
    </>
    
  )
}
