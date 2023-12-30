'use client'
import styles from './styles.module.scss'
import { useState } from 'react'
import Project from '../Projects/Project';
import Modal from '../Projects/Modal';

// Create projects Array

const projects = [
    {
        title: "title",
        src: "src.png",
        color: "#000",
    },
    {
        title: "title",
        src: "src.png",
        color: "#000",
    }
]

/**
 * Renders the Home component which displays a list of projects.
 * 
 * @returns {JSX.Element} The rendered Home component.
 */


export default function Home() {
    // State for managing the modal
    const [modal, setModal] = useState({active: false, index: 0});

    return (
        <main className={styles.main}>
            <div className={styles.body}>
                {
                    projects.map( (project, index) => {
                        return <Project 
                        key={index} 
                        title={project.title} 
                        src={project.src} 
                        color={project.color} 
                        index={index}
                        setModal={setModal}
                        />
                    })
                }
            </div>
            <Modal modal={modal} projects={projects}/>
        </main>
    )
}