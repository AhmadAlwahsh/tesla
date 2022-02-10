import React from 'react';
import styled from 'styled-components';
import Section from './Section'

export default function Home(){

  return(
    <Container>

      <Section
      title="Model S"
      dis="Order Online for Touchless Delivery"
      backImg="model-s.jpg"
      lBtn="CUSTOM ORDER"
      rBtn="EXISTING INVENTORY"
      id="model-s"
      />

      <Section
      title="Model Y"
      dis="Order Online for Touchless Delivery"
      backImg="model-y.jpg"
      lBtn="CUSTOM ORDER"
      rBtn="EXISTING INVENTORY"
      id="model-y"
      />

      <Section
      title="Model 3"
      dis="Order Online for Touchless Delivery"
      backImg="model-3.jpg"
      lBtn="CUSTOM ORDER"
      rBtn="EXISTING INVENTORY"
      id="model-3"
      />

      <Section
      title="Model X"
      dis="Order Online for Touchless Delivery"
      backImg="model-x.jpg"
      lBtn="CUSTOM ORDER"
      rBtn="EXISTING INVENTORY"
      id="model-x"
      />

      <Section
      title="Solar Panels"
      dis="Lowest Cost Solar Panels in America"
      backImg="solar-panel.jpg"
      lBtn="ORDER NOW"
      rBtn="LEARN MORE"
      />

      <Section
      title="Solar Roof"
      dis="Produce Clean Energy From Your Roof"
      backImg="solar-roof.jpg"
      lBtn="ORDER NOW"
      rBtn="LEARN MORE"
      />

      <Section
      title="Accessories"
      dis=""
      backImg="accessories.jpg"
      lBtn="ORDER NOW"
      rBtn=""
      />

    </Container>
  )
}

const Container = styled.div`
  height:100vh;
`