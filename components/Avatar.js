function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile-pic"
      className={`h-10 rounded-full cursor-pointer ${className}`}
    />
  );
}

export default Avatar;
