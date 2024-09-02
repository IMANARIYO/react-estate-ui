import "./singlePage.scss";
import Map from "../../map/Map";
import React from "react";
import Slider from "../slider/Slider";
import { singlePostData, userData } from "../../lib/dummyData";

export default function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="Location Pin" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">{singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt={userData.name} />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <div className="listVertical">
          <p className="title">General</p>
            <div className="feature">
              <img src="utility.png" alt="Utilities" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="pet.png" alt="Pet Policy" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="fee.png" alt="Property Fees" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>

          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="Size" />
              <span>80sqft</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="Bathroom" />
              <span>1 Bathroom</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="Beds" />
              <span>2 Beds</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="school.png" alt="School" />
              <div className="featureText">
                <span>School</span>
                <p>5 min drive</p>
              </div>
            </div>
            <div className="feature">
              <img src="restaurant.png" alt="Restaurant" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>10 min drive</p>
              </div>
            </div>
            <div className="feature">
              <img src="hospital.png" alt="Hospital" />
              <div className="featureText">
                <span>Hospital</span>
                <p>15 min drive</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>

          <div className="buttons">
            <button>
              <img src="/chat.png" alt="Chat" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="Save" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
