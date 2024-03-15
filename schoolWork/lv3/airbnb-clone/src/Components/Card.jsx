function Card(props) {
  return (
    <section className="card">
      <img src={`/${props.img}`} className="card--photo" />
      <div className="card--info">
        <img src="/Star 1.png" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">From ${props.price} / person</p>
    </section>
  );
}

export default Card;
