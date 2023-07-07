import classes from './Notification.module.css';

// type = '' | 'error' 
function Notification({ text, type = ''}) {
  if (!text) {
    return null;
  }

  return (
    <div className={`${classes.notification} ${type === 'error' ? classes.error : ''}`}>{text}</div>
  );
}

export default Notification;
