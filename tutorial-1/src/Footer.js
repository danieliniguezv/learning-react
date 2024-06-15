const Footer = ({ length }) => {
  // const today = new Date();

  return (
    <footer> 
      {/*<p>Copyright &copy; {today.getFullYear()}</p>i*/}
      <p>{length === 1 ? `${length} Album` : `${length} Albums`}</p>
    </footer>
  )
}

export default Footer;
