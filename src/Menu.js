import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

export default function Menu() {
    return (
        <>
        <section className="nav-menu">
            <table>
                <tr>
                    <td><Link to="/">Home</Link></td>
                    <td><Link to="/">About</Link></td>
                </tr>
            </table>
        </section>
        </>
    )
}