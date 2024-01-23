import "../styles/CardServices.css";

export default function CardServices(props) {
  return (
    <div className="card card-service shadow px-4 pb-5 border-0">
      <img src={props.image} alt="" className="card-img-top mt-3 mx-auto" />
      <div className="card-body">
        <h4 className="card-title text-center">{props.text}</h4>
      </div>
    </div>
  );
}
