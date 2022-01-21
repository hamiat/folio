import style from "./button.module.scss"

export interface iProps {
  children: React.ReactChild | React.ReactChild[];
  onClick?: any
}

function Button( {children, onClick, }: iProps) {
  return (
    <>
    <button onClick={onClick} className={style.button}>{children} </button>

    </>
  );
}

export default Button;
