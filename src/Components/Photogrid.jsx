import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Grid, Hidden, Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";

const data = [
  {
    key: 1,
    title: "Love",
    content: "Fly me to the moon",
    image: "/Images/preview.webp",
  },
  {
    key: 2,
    title: "Passion",
    content: "In search of reasons",
    image: "/Images/2.webp",
  },
  {
    key: 3,
    title: "Delusions",
    content: "A way to Stay Alive",
    image: "/Images/3.webp",
  },
  {
    key: 4,
    title: "Determination",
    content: "Never Give Up",
    image: "/Images/1.1.webp",
  },
  {
    key: 5,
    title: "Admiration",
    content: "In a room full of art",
    image: "/Images/16.jpg",
  },
  {
    key: 6,
    title: "Triumph",
    content: "Success that comes with a Cost",
    image:"/Images/19.jpg",
  },
  {
    key: 7,
    title: "Battles",
    content: "Fight for your fairytale",
    image:  "/Images/14.jpg",
  },
  {
    key: 8,
    title: "Regrets",
    content: "A happily never after",
    image: "/Images/15.jpg",
  },
];
const imgItem = [
  {
    key: 1,
    image: "/Images/12.jpg",
    title: " Locker of pain",
    content: "Some wounds never heal. We can move past it, yet some leave scars.",
    author: "PinkPanther",
  },
  {
    key: 2,
    image: "/Images/9.jpg",
    title: "Galaxy",
    content: "Broken but beautiful, the stars that are held together, out of our reach",
    author: "PinkPanther",
  },
  {
    key: 3,
    image: "/Images/7.jpg",
    title: "Abyss",
    content: "No way out is also a way, maybe not the best, but at least it could lead you somewhere",
    author: "PinkPanther",
  },
  {
    key: 4,
    image: "/Images/10.jpg",
    title: " In a Room Full of Arts",
    content: "The colors that makes every portrait different may or maynot be true ",
    author: "PinkPanther",
  },
  {
    key: 5,
    image: "/Images/8.jpg",
    title: " Lost stars",
    content: "At night, they bloom. And in the morning, they wither",
    author: "PinkPanther",
  },
  {
    key: 6,
    image: "/Images/6.jpg",
    title: " Love in the city",
    content: "In the allies,above the sky, in the middle of rain of, we pursue life",
    author: "PinkPanther",
  },
  {
    key: 7,
    image: "/Images/11.jpg",
    title: "Soulessness",
    content: "And we need reasons to stay, choose, and leave. A life without is just a dream",
    author: "PinkPanther",
  },
  {
    key: 8,
    image: "/Images/5.jpg",
    title: "Make It Right",
    content: "A day will come where we will be fine, if not, it's not just our day",
    author: "PinkPanther",
  },
];

function Photogrid() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredID, setHoveredID] = useState(undefined);
  const handleMouseEnter = (id) => {
    setHoveredID(id);
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setHoveredID(undefined);
    setIsHovered(false);
  };
  const scaleAmount = isHovered ? 1.1: 1;

  return (
    <div className="photogrid">
      <Container>
        <h4>Featured Stories</h4>
        <Row>
          {data.map((item) => (
            <Col lg={3} md={4} key={item.key} className="photocardblock">
              <Card className="photocard">
                <Card.Img variant="top" src={item.image}/>
                 <div className="hoverOverlay">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="hoverContent ">{item.content}</Card.Text>
                </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>


        {/* Masonry Photo Grid */}

            <div><br/><br/>
        <h4>Latest Stories</h4>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 280:1, 450: 2, 750: 3, 900: 4 }}>
          <Masonry className="imggrid" gutter={"10px"}>
            {imgItem.map((items) => (
              <>
                <img
                  className="picgrid"
                  key={items.key}
                  src={items.image}
                  loading="lazy"
                  onMouseEnter={() => handleMouseEnter(items.key)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: `scale(${hoveredID==items.key? scaleAmount:1})`,
                    transition: "transform 0.2s ease-in-out",
                  }}
                />
                <div className="imgcaptions">
                  <p className="photocaptions">{items.title}</p>
                  <p className="photocontent">{items.content}</p>
                </div>
              </>
            ))}
            <div className="captions"></div>
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </div>
  );
}
export default Photogrid;
