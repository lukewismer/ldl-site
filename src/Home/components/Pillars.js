import { PillarCard, PillarImage, PillarsContainer, PillarTitle, PillarHeader, PillarCol, PillarRow } from "../styles/Pillars.style";

const Pillars = () => {
    return (
        <PillarsContainer>
            <PillarHeader>4 Pillars Of The LDL</PillarHeader>
            <PillarRow>
                <IndPillarCard image={require("../../assets/team-pic-stock.jpeg")} title="Sportsmanship" left={true}></IndPillarCard>
                <IndPillarCard image={require("../../assets/team-pic-stock.jpeg")} title="Teamwork" left={false}></IndPillarCard>
                <IndPillarCard image={require("../../assets/team-pic-stock.jpeg")} title="Love of the game" left={true}></IndPillarCard>
                <IndPillarCard image={require("../../assets/team-pic-stock.jpeg")} title="Skill" left={false}></IndPillarCard>
            </PillarRow>
            
        </PillarsContainer>
    );
}

const IndPillarCard = ({image, title, isLeft}) => {
    if (isLeft)
    {
        return (
            <PillarCol>
                <PillarCard>
                    <PillarImage src={image}></PillarImage>
                    <PillarTitle>{title}</PillarTitle>
                </PillarCard>
            </PillarCol>
            
        )
    } else {
        return (
            <PillarCol>
                <PillarCard>
                    <PillarTitle>{title}</PillarTitle>
                    <PillarImage src={image}></PillarImage>
                </PillarCard>
            </PillarCol>
            
        )
    }
    
}

export default Pillars;