function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-gray-500">
      <div className="px-8 py-3">
        <p>India</p>
      </div>
      <hr />
      <div className="flex flex-col px-8 py-3 md:flex-row items-center md:justify-between md:px-11">
        <div className="flex justify-center space-x-6">
          <p className="link">About</p>
          <p className="link">Advertising</p>
          <p className="link">Business</p>
          <p className="link">How Search Works</p>
        </div>
        <div className="mt-5 flex justify-center space-x-5 md:mt-0 ">
          <p className="link">Privacy</p>
          <p className="link">Terms</p>
          <p className="link">Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
