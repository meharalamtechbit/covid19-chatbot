import { store } from 'react-notifications-component';

class notificationService {
  static success(message) {
    this.showNotification('success', message);
  }

  static error(message) {
    this.showNotification('danger', message);
  }

  static info(message) {
    this.showNotification('info', message);
  }

  static warning(message) {
    this.showNotification('warning', message);
  }

  static default(message) {
    this.showNotification('default', message);
  }

  static showNotification = (type, message) => {
    store.addNotification({
      title: `${this.toTitleCase(type)} !`,
      message: message,
      type: type,
      insert: 'top',
      container: 'top-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };

  static toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
}

export default notificationService;
