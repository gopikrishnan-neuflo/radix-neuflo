"use client";
import { Carousel } from "../../components/Carousel";

const ImageData = [
  {
    image:
      "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591348122449-02525d70379b?ixlib=rb-1.2.1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1",
  },
];

export default function App() {
  return (
    <div style={{ height: "40vh", width: "100vw", border: "1px solid yellow" }}>
      <Carousel slides={ImageData} />
    </div>
  );
}
