import categories from "../Data/db";

function Card() {
  return (
    <div className="flex flex-col p-4 md:flex-row">
      {categories.map(({ title, description, bgColor, icon }) => (
        <div
          key={title}
          className="p-10"
          style={{ backgroundColor: `var(--color-${bgColor})` }}
        >
          <img src={icon} alt={title} />
          <h2 className="font-bold text-3xl mt-8 text-Light-gray font-heading">
            {title}
          </h2>
          <p className="text-White my-5 font-display w-50">{description}</p>
          <button
            className={`bg-Light-gray py-2 px-6 rounded-3xl transition-all cursor-pointer font-display my-4`}
            style={{
              color: `var(--color-${bgColor})`,
            }}
            onMouseEnter={(e) => (
              (e.currentTarget.style.backgroundColor = `var(--color-${bgColor})`),
              (e.currentTarget.style.color = `var(--color-White)`),
              (e.currentTarget.style.border = `2px solid var(--color-white)`)
            )}
            onMouseLeave={(e) => (
              (e.currentTarget.style.backgroundColor = `var(--color-White)`),
              (e.currentTarget.style.color = `var(--color-${bgColor})`)
            )}
          >
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
