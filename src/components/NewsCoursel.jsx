import sample from "../assets/chat_wallpaper.jpg";
import sample2 from "../assets/ProgPinnacle-removebg-preview.png";

function NewsCoursel(props) {
  const { title, title2, title3, title4, title5, imageUrl } = props;
  return (
    <div className="coursel-container">
      <div className="sub-container">
        <div className="section-one">
          <img src={sample} alt="" />
          <h4>{title}</h4>
        </div>
        <div className="section-two">
          <div>
            <img src={sample} alt="" />
            <h4>{title2}</h4>
          </div>
          <div>
            <img src={sample} alt="" />
            <h4>{title3}</h4>
          </div>
          <div>
            <img src={sample2} alt="" />
            <h4>{title4}</h4>
          </div>
          {/* <div>
            <img src={sample} alt="" />
            <h4>{title5}</h4>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default NewsCoursel;
