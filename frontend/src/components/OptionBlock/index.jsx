import React from 'react'
import { Column, Container, Row, TitleHighlight, ItemContainer} from './styles'

const ActionBlock = ( { lefticon, title, description }) => {
  return (
    <Container>
      <Column>
        <Row>
          {lefticon ? (<ItemContainer>{lefticon}</ItemContainer>) : null}
        </Row>
        <Row>
          <TitleHighlight>
            { title }
          </TitleHighlight>
        </Row>
        <Row>
          <p>
          { description }
          </p>
        </Row>
      </Column>
    </Container>
  )
}

export { ActionBlock }