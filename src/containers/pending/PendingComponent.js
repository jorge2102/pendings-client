import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Button, Paper, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneModal from '../../components/pending/DoneModal';
import AddModal from '../../components/pending/AddModal';

const PendingComponent = (props) => {
    const pendings = props.pendings || [];

    const [currentPending, setCurrentPending] = useState({});
    const [searchText, setSearchText] = useState('');
    const [showDoneModal, setShowDoneModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    const showDonePendingModal = (pending) => {
        setCurrentPending(pending);
        switchShowDonePendingModal();
    };

    const switchShowDonePendingModal = () => {
        setShowDoneModal(!showDoneModal);
    };

    const switchShowAddPendingModal = () => {
        setShowAddModal(!showAddModal);
    };

    const setCompletedStatus = (pending) => {
        pending.done = true;
        props.updatePendings(pending);
    };

    const changeSearchText = (e) => {
        const { value } = e.target;
        setSearchText(value);
    };

    const search = () => {
        if (searchText == '') {
            props.getPendings();
        } else {
            props.searchPendings(searchText);
        }
    }

    return (
        <>
            <div style={{ padding: 16, margin: 'auto', maxWidth: 800 }}>
                <div align="right">
                    <Link style={{ textDecoration: 'none', color: 'white' }} onClick={() => switchShowAddPendingModal()} to="#">
                        <Button variant="contained" color="primary">Create Pending</Button>
                    </Link>
                </div>

                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search pending"
                        inputProps={{ 'aria-label': 'search pending' }}
                        onChange={(e) => changeSearchText(e)}
                        value={searchText}
                    />

                    <Link style={{ textDecoration: 'none', color: 'white' }} onClick={search} to="#">
                        <SearchIcon color="primary" />
                    </Link>
                </Paper>

                <br /><br />

                <Paper style={{ padding: 16 }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>N°</TableCell>
                                    <TableCell>Task</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {pendings.map((pending, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{(index + 1)}</TableCell>
                                        <TableCell>{pending.description}</TableCell>
                                        <TableCell>{pending.done ? 'Completed' : 'Pending'}</TableCell>
                                        <TableCell>
                                            {
                                                !pending.done && 
                                                <Link onClick={() => showDonePendingModal(pending)} to="#">
                                                    <CheckCircleIcon color="primary" />
                                                </Link>
                                            }
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <DoneModal item={currentPending} show={showDoneModal} close={switchShowDonePendingModal} actionItem={setCompletedStatus} />
                <AddModal show={showAddModal} close={switchShowAddPendingModal} actionItem={props.createPendings} />
            </div>
        </>
    );
}

export default PendingComponent;