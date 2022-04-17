import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: darkred;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold 500;
`

const Announcements = () => {
  return (
    <Container>
    <h3>
        SoulAmmo Bullet on Sale for $15 All Month Long!
    </h3>
    </Container>
  )
}

export default Announcements