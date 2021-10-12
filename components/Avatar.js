function Avatar({ url }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile-pic"
      className="h-10 rounded-full cursor-pointer"
    />
  );
}

export default Avatar;
