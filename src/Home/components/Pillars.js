import { PillarCard, PillarImage, PillarsContainer, PillarTitle, PillarHeader } from "../styles/Pillars.style";

const Pillars = () => {
    return (
        <PillarsContainer>
            <PillarHeader>4 Pillars Of The LDL</PillarHeader>
            <PillarRow></PillarRow>
            <IndPillarCard image={require("../../assets/team-pic-stock.jpeg")} title="Sportsmanship"></IndPillarCard>
        </PillarsContainer>
    );
}

const PillarRow = ({image, title, desc}) => {
    return (
        <>
            
        </>
    )

}

const IndPillarCard = ({image, title}) => {
    return (
        <PillarCard>
            <PillarImage src={image}></PillarImage>
            <PillarTitle>{title}</PillarTitle>
        </PillarCard>
    )
}

export default Pillars;