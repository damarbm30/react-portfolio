const WorkItem = ({ pretitle, name, img, url }) => {
  return (
    <a href={`${url}`} target="_blank" rel="noreferrer">
      <div className="group relative overflow-hidden rounded-xl border-2 border-white/50">
        <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70" />
        <img
          className="transition-all duration-500 group-hover:scale-125"
          src={img}
          alt={name}
        />
        <div className="absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24">
          <span className="text-gradient">{pretitle}</span>
        </div>
        <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14">
          <span className="text-3xl text-white">{name}</span>
        </div>
      </div>
    </a>
  );
};
export default WorkItem;
