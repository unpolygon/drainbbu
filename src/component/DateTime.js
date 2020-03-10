import React,{useState} from 'react';
import DatePicker from 'react-datepicker';

const DateTime = (props) => {
    const [startDate, setStartDate] = useState(new Date(2017,8,3));
    
    const onChangeDate = (date) => {
      setStartDate(date);
      var tzoffset = (new Date()).getTimezoneOffset() * 60000;
      date = new Date(date - tzoffset).toISOString().slice(0, 19).replace('T', ' ')
      if(props.From) props.From(date);
      else props.To(date);
    } 

    return(
        <DatePicker
      selected={startDate}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
      onChange={onChangeDate}
    />
    );
}

export default DateTime;