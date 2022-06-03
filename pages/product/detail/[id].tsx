import Layout1 from '../../../masok/Layout/Layout1/Layout1';
import Detail from '../../../masok/Container/Detail/Detail';
import {useRouter} from 'next/router';
import FakeSkeleton from '../../../masok/Component/FakeSkeleton/FAkeSkeleton';

export default function DetailL(){
    const routerLink = useRouter();
    const {id} = routerLink.query;
  return (
    <Layout1>
      <FakeSkeleton/>
      <Detail
        id={id}        
      />
    </Layout1>
  )
}