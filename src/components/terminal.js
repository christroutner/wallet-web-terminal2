/*
  Component for looking up the balance of a BCH address.
*/

// Global npm libraries
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ReactTerminal } from 'react-terminal'

// Local libraries
import CommandRouter from '../lib/command-router.js'
const commandRouter = new CommandRouter()

function GetBalance (props) {
  const { wallet } = props

  const commands = {
    help: (
      <span>
        <strong>clear</strong> - clears the console. <br />
        <strong>wallet_info</strong> - Display addresses, mnemonic, and private key for the wallet. <br />
      </span>
    ),

    wallet_info: commandRouter.routeCommand({ cmdStr: 'wallet_info', wallet })
  }

  const welcomeMessage = (
    <span>
      Type "help" for all available commands. <br />
    </span>
  )

  return (
    <>
      <Container>
        <Row>
          <Col style={{ minHeight: '100px' }}>
            <p>
              Enter the command 'help' below to get a list of commands.
            </p>
            <ReactTerminal
              showControlBar={false}
              showControlButtons={false}
              welcomeMessage={welcomeMessage}
              commands={commands}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default GetBalance
