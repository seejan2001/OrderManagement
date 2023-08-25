import { setFooterInfo } from "../app/footerslice";
import { useDispatch } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(setFooterInfo(1))}>ButtonOne</button>
      <button onClick={() => dispatch(setFooterInfo(2))}>ButtonOne</button>
      <button onClick={() => dispatch(setFooterInfo(3))}>ButtonOne</button>
    </>
  );
};

export default Footer;
