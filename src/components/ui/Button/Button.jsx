import s from './Button.module.scss'

const Button = ({children, color='blue', href, className, onClick}) => {

  if (href) {
    return (
      <a onClick={onClick} href={href} className={`${className} ${s.btn} ${color === 'blue' ? s.blue : s.green  } `}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${className} ${s.btn} ${color === 'blue' ? s.blue : s.green } `}>
      {children}
    </button>
  );
};

export default Button;
