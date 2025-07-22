const HeaderBox = ({ type = "title", title, description, user }: IHeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && <span className="text-bankGradient">&nbsp;{user}</span>}
      </h1>
      <p className="header-box-description">{description}</p>
    </div>
  );
};

export default HeaderBox;
