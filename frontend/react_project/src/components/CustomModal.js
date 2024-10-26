import React from "react"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const CustomModal = ({ show, onClose }) => {
  
  return (
    <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
        <Modal.Title>How to Play</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{
            margin: '10px',
            padding: '10px',
        }}>
            <h1 style={{
                color: '#004643',
                textAlign: 'center',
            }}>Word Wolf</h1>
            <p>
                Word Wolf is a conversation-based party game that can be enjoyed by multiple players. The objective of the game is to find the "wolf," which is a player (or players) who has a different topic than the others, while engaging in conversation based on a common theme.
            </p>
            
            <h2 style={{
                color: '#333',
                marginTop: '20px',
            }}>Basic Rules</h2>
            <ul style={{
                margin: '10px 0',
                padding: '0 20px',
            }}>
                <li style={{
                    marginBottom: '10px',
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    padding: '10px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                }}>
                    <strong>All participants receive a topic</strong><br />
                    At the start of the game, a topic is assigned to each participant. Most players will receive the same topic, but one (or more) players will receive a different topic (word). The player(s) with the different topic is referred to as the "wolf."
                </li>
                <li style={{
                    marginBottom: '10px',
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    padding: '10px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                }}>
                    <strong>Infer the topic through conversation</strong><br />
                    Players engage in conversation to determine whether their topic matches others'. They try to deduce who the wolf is while keeping their own topic hidden. The wolf also participates in the conversation, blending in with common topics to avoid detection.
                </li>
                <li style={{
                    marginBottom: '10px',
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    padding: '10px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                }}>
                    <strong>Vote to find the wolf</strong><br />
                    After a set amount of conversation time, all participants vote on who they think the wolf is. If the wolf is identified in the vote, the regular players win. If the wolf remains undetected, the wolf wins.
                </li>
            </ul>

            <h2 style={{
                color: '#333',
                marginTop: '20px',
            }}>Winning Conditions</h2>
            <ul style={{
                margin: '10px 0',
                padding: '0 20px',
            }}>
                <li style={{
                    marginBottom: '10px',
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    padding: '10px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                }}>If the wolf is identified in the vote, the regular players win.</li>
                <li style={{
                    marginBottom: '10px',
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    padding: '10px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                }}>If the wolf manages to keep their identity hidden until the end, the wolf wins.</li>
            </ul>

            <h2 style={{
                color: '#333',
                marginTop: '20px',
            }}>Example</h2>
            <p>
                For example, if the regular players' topic is "dog," and the wolf's topic is "cat," players will converse without revealing their topics. They might say things like, "I often take them for walks" or "Their sound is like ___," trying to figure out who has the different topic.
            </p>

            <p>
                Word Wolf is a game that allows players to enjoy psychological battles through conversation and is popular for gatherings with friends and family.
            </p>
        </div>
        </Modal.Body>
        <Modal.Footer>
        <Button className='custom-button' onClick={onClose}>
        Close
        </Button>
        </Modal.Footer>
    </Modal>
  )
}

