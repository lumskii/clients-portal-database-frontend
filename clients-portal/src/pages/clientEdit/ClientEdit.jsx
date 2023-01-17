import { BsCalendar } from 'react-icons/bs';
import { RiImageEditFill } from 'react-icons/ri';
import {
  MdLocationSearching,
  MdMailOutline,
  MdPermIdentity,
  MdPhoneAndroid,
} from 'react-icons/md';
import './clientEdit.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import cogoToast from 'cogo-toast';
import { server } from '../../constance';
import { AiOutlineDelete } from 'react-icons/ai';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ClientEdit = () => {
  const [showContents, setShowContents] = useState(false);
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);
  const { clientsId } = useParams();
  // const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  console.log('params', clientsId);

  useEffect(() => {
    const getClient = async (id) => {
      setLoading(true);
      const details = await axios.get(`${server}/v1/clients/${id}`);

      if (details && details.data.success) {
        setLoading(false);
        setClient(details.data.client);
      }

      console.log('details', details);
    };

    getClient(clientsId);
  }, [clientsId]);

  const handleChange = (e) => {
    const newValue = {};
    newValue[e.target.name] = e.target.value;

    console.log(newValue);

    setClient({ ...client, ...newValue });
  };

  const handleUpdateClient = (e) => {
    e.preventDefault();
    setLoading(true);
    const updateClient = async (id) => {
      const details = await axios.patch(server + `/v1/clients/${id}`, client);

      if (details && details.data.success) {
        cogoToast.success('Client updated successfully', {
          position: 'top-center',
        });
        console.log('Updated', details.data);
        setLoading(false);
      } else {
        cogoToast.error('Could not submit client info');
        setLoading(false);
      }
    };

    updateClient(clientsId);
  };

  const handleDelete = (id) => {
    axios.delete(`${server}/v1/clients/${id}`).then((res) => {
      cogoToast.success(res.data.filmName + ' has been deleted successfully', {
        position: 'top-center',
      });
    });
    navigate('/clients');
    setClient(
      client.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div className="client_edit">
      <div className="clientTitleContainer">
        <h1 className="headerTitle">Edit Client</h1>
        <Link to="/client-setup">
          <button className="clientAddButton">Create</button>
        </Link>
      </div>
      {client && !loading && (
        <div className="clientContainer">
          <div className="clientShow">
            <div className="clientShowTop">
              <img
                src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="clientShowImg"
              />
              <div className="clientShowTopTitle">
                <span className="clientShowClientName">
                  {client && client.filmName}
                </span>
                <span className="clientShowClientDT">
                  {client && client.distributionType}
                </span>
              </div>
            </div>
            <div className="clientShowBottom">
              <span className="clientShowTitle">Account Details</span>
              <div className="clientShowInfo">
                <MdPermIdentity className="clientShowIcon" />
                <span className="clientShowClientCode">
                  {client && client.filmsCode}
                </span>
              </div>
              <div className="clientShowInfo">
                <BsCalendar className="clientShowIcon" />
                <span className="clientShowClientCode">
                  {client && client.effectiveDate}
                </span>
              </div>
              <span className="clientShowTitle">Contact Details</span>
              <div className="clientShowInfo">
                <MdPhoneAndroid className="clientShowIcon" />
                <span className="clientShowClientCode">+1 123 456 7890</span>
              </div>
              <div className="clientShowInfo">
                <MdMailOutline className="clientShowIcon" />
                <span className="clientShowClientCode">
                  {client && client.producersEmail}
                </span>
              </div>
              <div className="clientShowInfo">
                <MdLocationSearching className="clientShowIcon" />
                <span className="clientShowClientCode capi">
                  {client && client.stateLaw} | {client && client.countryLaw}
                </span>
              </div>

              {/* .........Account info starts here ......... */}

              <span className="clientShowTitle">Account Information</span>
              <div className="clientShowInfo">
                <h5 className="accountInfoTitle">Date of signature:</h5>
                <span className="clientShowClientCode">
                  {client && client.dateSignature}
                </span>
              </div>
              <div className="clientShowInfo">
                <h5 className="accountInfoTitle">Renewal Date:</h5>
                <span className="clientShowClientCode">
                  {client && client.renewalDate}
                </span>
              </div>
              <div className="clientShowInfo">
                <h5 className="accountInfoTitle">Renewal expiration:</h5>
                <span className="clientShowClientCode">
                  {client && client.renewalExpiration}
                </span>
              </div>
              <div className="clientShowInfo">
                <h5 className="accountInfoTitle">Expense Type:</h5>
                <span className="clientShowClientCode">
                  {client && client.expenseCap}
                </span>
              </div>
              <div className="clientShowInfo">
                <h5 className="accountInfoTitle">Customized Expenses:</h5>
                <span className="clientShowClientCode">
                  {client && client.customExp}
                </span>
              </div>
              <div className="clientShowInfo">
                <h5 className="accountInfoTitle">Film Expenses:</h5>
                <span className="clientShowClientCode">
                  ${client && client.expense}
                </span>
              </div>
              <div className="clientShowInfo">
                <h5 className="accountInfoTitle">Gross Corridor:</h5>
                <span className="clientShowClientCode">
                  {client && client.grossCor}%
                </span>
              </div>
              <div className="clientShowInfo">
                <h5 className="accountInfoTitle">Gross Corridor Rights:</h5>
                <span className="clientShowClientCode">
                  {client && client.grossCorRights}
                </span>
              </div>
              <div className="clientShowInfo">
                <h5 className="accountInfoTitle">Producer's Payment:</h5>
                <span className="clientShowClientCode">
                  {client && client.producerPay}
                </span>
              </div>
              <div className="clientShowInfo">
                <h5 className="accountInfoTitle">Distribution fees:</h5>
                <span className="clientShowClientCode">
                  {client && client.distributionFee}%
                </span>
              </div>
              <div className="clientShowInfo">
                <h5 className="accountInfoTitle">Income reserves:</h5>
                <span className="clientShowClientCode">
                  {client && client.incomeReserves}%
                </span>
              </div>
              <div className="clientShowInfo">
                <h5 className="accountInfoTitle">Accounting terms:</h5>
                <span className="clientShowClientCode">
                  {client && client.accountingTerms}
                </span>
              </div>
            </div>
            <div
              className={showContents ? '' : 'edit'}
              onClick={() => setShowContents(!showContents)}
            >
              {showContents === true ? '' : 'Edit'}
            </div>
          </div>
          {showContents && (
            <div className="clientUpdate">
              <span className="clientUpdateTitle">Edit </span>
              <Button
                variant="contained"
                startIcon={<AiOutlineDelete />}
                onClick={() => handleDelete(client._id)}
                sx={{
                  bgcolor: 'red',
                  fontWeight: 'bold',
                  margin: '-15px 0 0 60px',
                }}
              >
                Delete
              </Button>
              <form className="clientUpdateForm" onSubmit={handleUpdateClient}>
                <div className="clientUpdateLeft">
                  <div className="clientUpdateItem">
                    <label>Film Name</label>
                    <input
                      type="text"
                      placeholder="The Test"
                      className="clientUpdateInput"
                      value={client && client.filmName}
                      name="filmName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Producer's Email</label>
                    <input
                      type="email"
                      placeholder="producer@gmail.com"
                      className="clientUpdateInput"
                      value={client && client.producersEmail}
                      name="producersEmail"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Distribution Type</label>
                    <input
                      type="text"
                      placeholder="Sales only"
                      className="clientUpdateInput"
                      value={client && client.distributionType}
                      name="distributionType"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      placeholder="+1 123 456 7890"
                      className="clientUpdateInput"
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Location</label>
                    <input
                      type="text"
                      placeholder="{client && client.countryLaw}"
                      className="clientUpdateInput"
                      value={client && client.stateLaw}
                      name="stateLaw"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Effective Date</label>
                    <input
                      type="text"
                      placeholder="effective date"
                      className="clientUpdateInput"
                      value={client && client.effectiveDate}
                      name="effectiveDate"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Date of Signature</label>
                    <input
                      type="text"
                      placeholder="{client && client.countryLaw}"
                      className="clientUpdateInput"
                      value={client && client.dateSignature}
                      name="dateSignature"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Renewal Date</label>
                    <input
                      type="text"
                      placeholder="{client && client.countryLaw}"
                      className="clientUpdateInput"
                      value={client && client.renewalDate}
                      name="renewalDate"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Renewal Expiration</label>
                    <input
                      type="text"
                      placeholder="{client && client.countryLaw}"
                      className="clientUpdateInput"
                      value={client && client.renewalExpiration}
                      name="renewalExpiration"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Expense Type</label>
                    <input
                      type="text"
                      placeholder="Expense type"
                      className="clientUpdateInput"
                      value={client && client.expenseCap}
                      name="expenseCap"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Customized Expenses</label>
                    <input
                      type="text"
                      placeholder="Expenses"
                      className="clientUpdateInput"
                      value={client && client.customExp}
                      name="customExp"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Film Expenses</label>
                    <input
                      type="text"
                      placeholder="Expenses"
                      className="clientUpdateInput"
                      value={client && client.expense}
                      name="expense"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Gross Corridor</label>
                    <input
                      type="text"
                      placeholder="{client && client.countryLaw}"
                      className="clientUpdateInput"
                      value={client && client.grossCor}
                      name="grossCor"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Gross Corridor Rights</label>
                    <input
                      type="text"
                      placeholder="{client && client.countryLaw}"
                      className="clientUpdateInput"
                      value={client && client.grossCorRights}
                      name="grossCorRights"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Producer's Payment</label>
                    <input
                      type="text"
                      placeholder="{client && client.countryLaw}"
                      className="clientUpdateInput"
                      value={client && client.producerPay}
                      name="producerPay"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Distribution fees</label>
                    <input
                      type="text"
                      placeholder="{client && client.countryLaw}"
                      className="clientUpdateInput"
                      value={client && client.distributionFee}
                      name="distributionFee"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Income reserves</label>
                    <input
                      type="text"
                      placeholder="{client && client.countryLaw}"
                      className="clientUpdateInput"
                      value={client && client.incomeReserves}
                      name="incomeReserves"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="clientUpdateItem">
                    <label>Accounting terms</label>
                    <input
                      type="text"
                      placeholder="{client && client.countryLaw}"
                      className="clientUpdateInput"
                      value={client && client.accountingTerms}
                      name="accountingTerms"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="clientUpdateRight">
                  <div style={{ marginTop: '-40px' }}>
                    <div
                      className={showContents ? 'edit_close' : ''}
                      onClick={() => setShowContents(!showContents)}
                    >
                      {showContents === true ? 'Cancel' : ''}
                    </div>
                    <div className="clientUpdateUpload">
                      <img
                        src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                        className="clientUpdateImg"
                      />
                      <label for="file">
                        <RiImageEditFill className="clientUpdateIcon" />
                      </label>
                      <input
                        type="file"
                        id="file"
                        style={{ display: 'none' }}
                      />
                    </div>
                  </div>
                  <button
                    className="clientUpdateButton"
                    type="submit"
                    disabled={loading}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
      {loading && <p>Loading client's details...</p>}
    </div>
  );
};

export default ClientEdit;
