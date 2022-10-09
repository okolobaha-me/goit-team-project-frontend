import { toast } from 'react-toastify';

const warningNotification = message => toast.warn(message);
const successNotification = message => toast.success(message);
const infoNotification = message => toast.info(message);
const errorNotification = message => toast.error(message);

const notifications = {
    warningNotification,
    successNotification,
    infoNotification,
    errorNotification,
};

export default notifications;
