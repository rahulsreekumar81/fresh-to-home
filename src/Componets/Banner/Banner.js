import { Carousel } from 'react-carousel-minimal';

function Banner() {
 const data = [
    {
      image: "f1.jpg",
      caption: "maththi"
    },
    {
      image: "f3.jpg",
      caption: "Ayala"
    },
    {
      image: "f2.jpg",
      caption: "choora"
    },
    {
      image: "m1.jpg",
      caption: "Beaf"
    },
    {
      image: "m2.jpg",
      caption: "Chicken"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={1000}
            width="100%"
            height="400px"
            captionStyle={captionStyle}
            radius="120px"
            captionPosition="center"
            automatic={true}
            dots={true}
            slideImageFit="cover"
            style={{
              textAlign: "top",
              maxWidth: "100%",
              maxHeight: "800px",
              margin: "100px ",
             
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;