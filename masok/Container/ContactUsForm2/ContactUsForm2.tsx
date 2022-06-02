import styles from './ContactUsForm2.module.css';
// import {useForm} from 'react-hook-form';
// import Axios from 'axios';


export default function ContactUsForm() {      
    // const {register, handleSubmit, setError, formState: { errors }, reset} = useForm();
    // async function onSubmitForm(values:any){
    //     console.log(values);
    //     let config ={
    //         method:'post',
    //         url: 'http://localhost:3000/api/contact',
    //         header: {
    //             'content-type' : 'application/json',
    //         },
    //         data: values
    //     };
    //     try{
    //         const response = await Axios(config);
    //         console.log(response);
    //         if(response.status==200){
    //             console.log('success');
    //         }
    //     }catch(err){
    //         console.log(err);
    //     }
        
    // }
    
    return(
        <>
        <div className={styles.container}>
            < form className={styles.main} >
                <div className={styles.styleGroup}>
                    < label htmlFor='name'>Name</label>
                    < input type='text' name='name' className={styles.inputField} required/>  
                </div>
                <div className={styles.styleGroup}>
                    < label htmlFor='email'>Email</label>
                    < input type='email' name='email' className={styles.inputField} required/>            
                </div>
                <div className={styles.styleGroup}>
                    < label htmlFor='message'>Message</label>
                    < input type='text' name='message' className={styles.inputField} required/>            
                </div>
            < input type='submit'/>
            </form >
        </div>
        </>
    )
}