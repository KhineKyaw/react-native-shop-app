import moment from 'moment';

class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  get readableDate() {
    return moment(this.date).format('MMMM Do YYYY, hh:mm');
  }
  // get readableDate() {
  //   return this.date.toLocalDateString('en-EN', {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //     hour: '2-digit',
  //     minute: '2-digit'
  //   });
  // }
}

// const dateOptions = {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit'}

export default Order;