import moment from "moment-jalaali"

export const useSolar = (date)=>{
    const SliceDate = date.slice(0,10);
    const SliceTime = date.slice(11,16);

    const dateFormat = moment(SliceDate , 'YYYY-MM-DD');
    const timeFormat = moment(SliceTime , 'HH:mm:ss');
    
    const solarDate = dateFormat.format('jYYYY/jMM/jDD');
    const solarTime = timeFormat.format('HH:mm');

    return [solarDate , solarTime];
}