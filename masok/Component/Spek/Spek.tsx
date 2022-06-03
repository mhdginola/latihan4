import st from './Spek.module.css';

export default function Spek(props:any){
    return(
        <tr>
            <td className={st.bdg}><h5>{props.sp} </h5></td>
            <td className={st.bdg}><h5> : </h5></td>
            <td className={st.bdg}><h5> {props.dt}</h5></td>
        </tr>
        // <h1>-- {props.sp} --,</h1>
        //     <h6>-- {props.dt} --,</h6>
        
    )
}