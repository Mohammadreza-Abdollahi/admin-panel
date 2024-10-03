import { useSolar } from "../../hook/useSolar";

const CreatedAt = ({data}) => {
    const [solarDate , solarTime] = useSolar(data.created_at)
    console.log(data);
    return ( 
        <>
            <span className={`text-lg`}>{` در تاریخ    ${solarDate}  ساعت  ${solarTime}`}</span>
        </>
    );
}
 
export default CreatedAt;