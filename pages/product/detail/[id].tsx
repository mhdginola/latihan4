import Layout1 from '../../../masok/Layout/Layout1/Layout1';
import Detail from '../../../masok/Container/Detail/Detail';
import {useRouter} from 'next/router';

export default function DetailL(){
    const routerLink = useRouter();
    const {id} = routerLink.query;
  return (
    <Layout1>
      <Detail
        id={id}        
      />
    </Layout1>
  )
}