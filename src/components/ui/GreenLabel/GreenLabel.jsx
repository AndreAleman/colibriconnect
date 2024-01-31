import s from './GreenLabel.module.scss'

const GreenLabel = ({children, className}) => {
  return (
    <div className={s.greenLabel + ' ' + className}>
        {children}
    </div>
  );
};

export default GreenLabel;
