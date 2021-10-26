import React from 'react';
import './styles.css';
import Table from 'react-bootstrap/Table';
import mario3 from "../../assets/smb3.jpg";
import dkc from "../../assets/dkc.jpg";
import tetris from '../../assets/tetris.jpg';

export default function GameList() {
    return(
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>System</th>
                    <th>Notes?</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='image'>
                        <img src={mario3} className="gameImage" />
                    </td>
                    <td className='title'>Super Mario Bros. 3</td>
                    <td className='system'>NES</td>
                    <td className='description'>In Box, 2 copies</td>
                </tr>
                <tr>
                    <td className='image'>
                        <img src={dkc} className='gameImage' />
                    </td>
                    <td className='title'>Donkey Kong Country</td>
                    <td className='system'>SNES</td>
                    <td className='description'>Some Scratches on Label</td>
                </tr>
                <tr>
                    <td className='image'>
                        <img src={tetris} className='gameImage' />
                    </td>
                    <td className='title'>Tetris</td>
                    <td className='system'>NES</td>
                    <td className='description'>Average</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}