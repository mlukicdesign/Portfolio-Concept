'use client';
import React from 'react'
import styles from './styles.module.scss'

export default function index({index, title, setModal}) {


// Represents a single project and has a hover interactivity on it. When hovering, changes the setModal state to true
// Project animations are done with pure css

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h2>{title}</h2>
            <p>Design & Development</p>
        </div>
    )
}