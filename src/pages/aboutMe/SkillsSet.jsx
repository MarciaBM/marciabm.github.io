import React from "react";
import {Container, Row} from "react-bootstrap";
import "./aboutMe.css";
import Skill from "./Skill.jsx";

export default function SkillsSet(props) {
    return (
        <Container fluid className="skills-section">
            <Container>
                <h3>{props.name}</h3>
                <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    {props.skills.map(p => <Skill skill={p}/>)}</div>
            </Container>
        </Container>
    );
}
