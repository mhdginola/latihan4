import styles from './ContactUsForm3.module.css';

export default function ContactUsForm() {      
    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {};
        Array.from(e.currentTarget.elements).forEach(field=>{
            if(!field.name) return;
            formData[field.name]=field.value;
        });
        fetch('/api/mail',{
            method:'post',
            body:JSON.stringify(formData)
        })
        console.log(formData);
    }

    return(
        <>
        <div className={styles.container}>
            <form method='post' onSubmit={handleOnSubmit} className={styles.main} >
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