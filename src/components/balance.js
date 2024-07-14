/*
  Component for looking up the balance of a BCH address.
*/

// Global npm libraries
import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap'
import { ReactTerminal } from "react-terminal";

function GetBalance (props) {
  const { wallet } = props

  // State
  // const [balance, setBalance] = useState('')
  // const [textInput, setTextInput] = useState('')

  // Button click handler
  // const handleGetBalance = async (event) => {
  //   try {
  //     // Exit on invalid input
  //     if (!textInput) return
  //     if (!textInput.includes('bitcoincash:')) return
  //
  //     setBalance(<span>Retrieving balance... <Spinner animation='border' /></span>)
  //
  //     const balance = await wallet.getBalance({ bchAddress: textInput })
  //     console.log('balance: ', balance)
  //
  //     const bchBalance = wallet.bchjs.BitcoinCash.toBitcoinCash(balance)
  //
  //     setBalance(`Balance: ${balance} sats, ${bchBalance} BCH`)
  //   } catch (err) {
  //     setBalance(<p><b>Error</b>: {`${err.message}`}</p>)
  //   }
  // }

  // Define commands here
  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`
  };

  return (
    <>
      <Container>
        <Row>
          <Col style={{ minHeight: '100px' }}>
            <p>
              Enter the command 'help' below to get a list of commands.
            </p>
            <ReactTerminal
              commands={commands}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default GetBalance
