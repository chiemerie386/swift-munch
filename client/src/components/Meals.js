import {Entity, Body, Card, MealImage, MealText} from './Meals.styles.js'
// import styled from 'styled-components'

// const Ctyle = styled.div`
// background-color: black;
// font-size: 32px;
// color: white;
// `

const Meals = () => {
    return (
        // <div  style =  {{backgroundColor:"red"}}>
        <Entity>
            <Body>
                <Card>
                    <MealImage src="https://img.icons8.com/color/96/000000/pizza-delivery.png" /> 
                    <MealText>
                           Awesome Delivery
                           <p style = {{fontSize: "1rem"}}>We provide quick meal deliveries for your happiness </p>                      
                    </MealText>
                </Card>
                <Card>
                    <MealImage src="https://img.icons8.com/color/96/000000/pizza-delivery.png" /> 
                    <MealText>
                           Awesome Delivery
                           <p style = {{fontSize: "1rem"}}>We provide quick meal deliveries for your happiness </p>                      
                    </MealText>
                </Card>
                <Card>
                    <MealImage src="https://img.icons8.com/color/96/000000/pizza-delivery.png" /> 
                    <MealText>
                           Awesome Delivery
                           <p style = {{fontSize: "1rem"}}>We provide quick meal deliveries for your happiness </p>                      
                    </MealText>
                </Card>
                <Card>
                    <MealImage src="https://img.icons8.com/color/96/000000/pizza-delivery.png" /> 
                    <MealText>
                           Awesome Delivery
                           <p style = {{fontSize: "1rem"}}>We provide quick meal deliveries for your happiness </p>                      
                    </MealText>
                </Card>
                <Card>
                    <MealImage src="https://img.icons8.com/color/96/000000/pizza-delivery.png" /> 
                    <MealText>
                           Awesome Delivery
                           <p style = {{fontSize: "1rem"}}>We provide quick meal deliveries for your happiness </p>                      
                    </MealText>
                </Card>
                {/* <Card>gujvhk</Card>
                <Card></Card>
                <Card></Card>
                <Card></Card> */}
            </Body>
        </Entity>
    )
}

export default Meals
